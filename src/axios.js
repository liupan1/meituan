import axios from 'axios';

axios.defaults.baseURL = 'https://open.duyiedu.com';
axios.interceptors.request.use((config) => ({
  ...config,
  params: {
    appkey: 'liupan_1639385029141',
  },
}), (error) => {
  console.log(error);
});

export default axios;
