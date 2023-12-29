import axios from 'axios';

// import { Cookies } from 'react-cookie';

// const cookies = new Cookies();
// const token = cookies.get('Authorization');

const isProduction = process.env.NODE_ENV === 'production';

// console.log('API_URL', process.env.API_URL)

const $http = axios.create({
  // baseURL: isProduction ? process.env.API_URL : 'http://localhost:8888', // 개발
  withCredentials: true, // CORS요청 허용(기본: false)
});

// 서버에 요청 할 때 항상 토큰을 동봉한다
// $http.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export { $http };
