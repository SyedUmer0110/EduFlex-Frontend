import Axios from 'axios'

// export const base_url = "http://192.168.0.107:8989";
// export const base_url = "http://192.168.0.107:8080";
export const base_url = 'http://localhost:8080'

export const publicAPI = Axios.create({ baseURL: base_url })

export const privateAPI = Axios.create({ baseURL: base_url })

// const tok = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyM0tTRTkzMjIiLCJpYXQiOjE3MTM3MjE3MTIsImV4cCI6MTcxMzgwODExMiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJvbGVfU1RVREVOVCJ9LHsiYXV0aG9yaXR5IjoiYW5ub3VuY2VtZW50IDogcmVhZCJ9LHsiYXV0aG9yaXR5IjoiYW5ub3VuY2VtZW50IDogd3JpdGUifSx7ImF1dGhvcml0eSI6InN0dWRlbnQgOiByZWFkIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OiB3cml0ZSJ9XX0.cd0uNX4eewbs2W8v7FZ_rURu0DcpoSjzKIgWsdNORiw";
// const headers = {
//   'Authorization': `Bearer ${tok}`,
// };

// export const attachToken = async () => {
  // const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyM0tTRTkzMjIiLCJpYXQiOjE3MTM3MjU5NDQsImV4cCI6MTcxMzgxMjM0NCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJvbGVfU1RVREVOVCJ9LHsiYXV0aG9yaXR5IjoiYW5ub3VuY2VtZW50IDogcmVhZCJ9LHsiYXV0aG9yaXR5IjoiYW5ub3VuY2VtZW50IDogd3JpdGUifSx7ImF1dGhvcml0eSI6InN0dWRlbnQgOiByZWFkIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OiB3cml0ZSJ9XX0.yGMe4utci1l2p8JqNCA1XAsXlH2GYGvBqd4pgf55zqc'
  const jwt = localStorage.getItem('token')
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`
//   // console.log("Token Attached");
// }
