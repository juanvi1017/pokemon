import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(res => {
    res.headers['Access-Control-Allow-Origin'] = '*';
    res.headers['Access-Control-Allow-Credentials'] = 'true'
    res.headers['Access-Control-Request-Method'] = 'POST, GET, OPTION, DELETE, PUT'
    return res;
  })

export default axiosInstance
