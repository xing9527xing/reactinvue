/**
 * 网络请求配置
 */
import Axios from "axios";
// 定义axios配置
const http = Axios.create({
    // baseURL: 'http://mobiletest.hnylxgs.com/swagger/docs/v1' , // api的base_url
    withCredentials: true, // 开启跨域身份凭证
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    timeout: 0 // request timeout
  });

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJndWlkIjoiNjBjNGUwMzQtOTQwZC00NmQyLTkwODktMzQ4NzRlOGNjNDI2IiwidWlkIjoiNGU4ZDhkYjItYjRkOC00YTE5LWFmYTEtNDA0M2Y0YTIxYjlmIiwiZWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZ3BpZCI6ImU3YjQ2ZjVlLWU5MDctNGIzNS1hZjQ0LWM5MzkzZWY5OTA1NSIsInBpZCI6IjI3MWFkYzUxLTc1MzEtNGM3OS1hN2E0LTI1YmQ5MmI2ZmE5MyIsInNyb2xlIjowLCJ1cm9sZSI6MCwic2l0ZSI6NDAsIm9yZ3R5cGUiOjAsIkJpelR5cGUiOjAsIkJpeklkIjpudWxsLCJsZXZlbCI6bnVsbCwiZ2VuIjoxNjA5NzcxMDk0LjAsImV4cCI6MTYwOTgwNzA5NC4wfQ.uuN3dkzQWN8Ro5HSy86iYEk2vxlNjz0wc7YVP9ZINak"
/**
 * http request 拦截器
 */
http.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    config.headers.auth = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;