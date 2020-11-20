const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://kbapi-test.oits.su/',
    headers: {
        withCredentials: true,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.setItem('access', { access: "", refresh: "" })}`
    }
})

export const authAPI = {
    async login(username, password) {
        const response = await instance.post(`api/users/token/`, { username, password });
        const { refresh, access } = response?.data;
        localStorage.setItem('refresh', refresh);
        localStorage.setItem('access', access);
        localStorage.setItem('username', username);
        return response;
    }
}

// const errorHandler = (error) => {
//     if (error?.response?.status === 401) {
//         instance
//             .post(
//                 'api/users/token/refresh/',
//                 {
//                     refresh: localStorage.getItem('refresh'),
//                 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Accept: 'application/json',
//                     },
//                 }
//             )
//         .then((response) => {
//           localStorage.setItem('access', response.data.access);
//           error.config.Authorization = `Bearer ${localStorage.getItem('access')}`;
//           securedAxiosInstance(error);
//         })
//         .catch((error) => {
//           doAuthCleanup();
//           sessionStorage.setItem('redirect_to', window.location);
//           window.location = '/guest';
//           return Promise.reject(error);
//         });
//     }
//     else {
//         return Promise.reject(error)
//     }
// };

// T54321oikb