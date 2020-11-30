import { message } from "antd";

const { default: Axios } = require("axios");

const instance = Axios.create({
  baseURL: "https://kbapi-test.oits.su/",
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
  },
});

export const authAPI = {
  async login(username, password) {
    try {
      const response = await instance.post(`api/users/token/`, {
        username,
        password,
      });
      const { refresh, access } = response?.data;
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("access", access);
      localStorage.setItem("username", username);
      return response;
    } catch (e) {
      if(e) {
        message.error({
          content: 'Неверный логин или пароль! Пожалуйста проверьте правильность введенных данных и повторите попытку',
          className: 'custom-class',
          icon: null,
          style: {
            marginTop: '69vh',
            marginRight: '85vh',
          },
        });
      }
    }
  },

  async refreshToken() {
    const refresh = localStorage.getItem("refresh");
    if (refresh) {
      try {
        const username = localStorage.getItem("username");
        const response = await instance.post(
          "/users/token/refresh/",
          { refresh, username },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const { access } = response.data;
        localStorage.setItem("access", access);
        return { access };
      } catch (e) {
        if (e) console.log("Ошибка обновления токена");
        return null;
      }
    }
  },
};

export const additionInfoAPI = {
  async getAdditionInfo() {
    try {
      const response = await instance.get("api/users/addition_info/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      return response;
    } catch (e) {
      if (e) console.log(e);;
    }
  },
};

export const departmentsAPI = {
  async getDepartments() {
    try {
      const response = await instance.get("api/hospitals/departments/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      return response;
    } catch (e) {
      if (e) console.log(e);
    }
  },

  async getSingleDepartment(departmentId) {
    try {
      const response = await instance.get(
        `api/hospitals/departments/${departmentId}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      return response;
    } catch (e) {
      if(e) console.log(e)
    }
  },
};

export const changeHospitalPlaces = {
  async changePlaces({
    department_id,
    count_female_busy,
    count_female_o2_busy,
    count_female_free,
    count_female_o2_free,
    count_male_busy,
    count_male_o2_busy,
    count_male_free,
    count_male_o2_free,
  }) {
    const response = await instance.post(
      `api/hospitals/bunks/multiple_change/`,
      {
        department_id,
        count_female_busy,
        count_female_o2_busy,
        count_female_free,
        count_female_o2_free,
        count_male_busy,
        count_male_o2_busy,
        count_male_free,
        count_male_o2_free,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    );
    return response;
  },
};

export const bunkReleaseAPI = {
  async releaseBunk(sex, has_oxygen, department_id) {
    try {
      const response = await instance.post(
        "api/hospitals/bunks/release/",
        { sex, has_oxygen, department_id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      return response;
    } catch (e) {
      if(e) console.log(e)
    }
  },
};

export const replaceAPI = {
  async replacePatients({
    from_sex,
    from_has_oxygen,
    from_department_id,
    to_sex,
    to_has_oxygen,
    to_department_id,
    count,
  }) {
    try {
      const response = await instance.post(
        "api/hospitals/bunks/transfer/",
        {
          from_sex,
          from_has_oxygen,
          from_department_id,
          to_sex,
          to_has_oxygen,
          to_department_id,
          count,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      return response;
    } catch (e) {
      if (e) throw e;
    }
  },
};

export const changeCountAPI = {
  async add(department_id, busy_count, free_count, sex, has_oxygen) {
    const response = await instance.post(
      "api/hospitals/bunks/multiple_addition/",
      { department_id, busy_count, free_count, sex, has_oxygen },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    );
    return response;
  },

  async remove(department_id, busy_count, free_count, sex, has_oxygen) {
    const response = await instance.post(
      "api/hospitals/bunks/multiple_deletion/",
      { department_id, busy_count, free_count, sex, has_oxygen },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    );
    return response;
  },
};

export const errorHandler = (error) => {
  if (error?.status === 401) {
    instance
      .post(
        "api/users/token/refresh/",
        {
          refresh: localStorage.getItem("refresh"),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem("access", response.data.access);
        error.config.Authorization = `Bearer ${localStorage.getItem("access")}`;
        instance(error);
      })
      .catch((error) => {
        sessionStorage.setItem("redirect_to", "/");
        window.location = "/guest";
        return Promise.reject(error);
      });
  } else {
    return Promise.reject(error);
  }
};

// T54321oikb
