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
      if (e) throw e;
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
      if (e) throw e;
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
      if (e) throw e;
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
      if (e) throw e;
    }
  },
};

export const changeHospitalPlaces = {
  async changePlaces(
    department_id,
    male,
    maleBusy,
    female,
    femaleBusy,
    maleo2,
    maleo2Busy,
    femaleo2,
    femaleo2Busy
  ) {
    const response = await instance.post(
      `api/hospitals/bunks/multiple_change/`,
      {
        payload: {department_id,
          male,
          maleBusy,
          female,
          femaleBusy,
          maleo2,
          maleo2Busy,
          femaleo2,
          femaleo2Busy}
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    );
    return response
  },
};

export const bunkReleaseAPI = {
  async releaseBunk(department_id) {
    try {
      const response = await instance.post(
        "api/hospitals/bunks/release/", {department_id},
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
