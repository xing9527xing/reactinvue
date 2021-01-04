/**
 * 网络请求配置
 */
import axios from "axios";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJndWlkIjoiNjBjNGUwMzQtOTQwZC00NmQyLTkwODktMzQ4NzRlOGNjNDI2IiwidWlkIjoiNGU4ZDhkYjItYjRkOC00YTE5LWFmYTEtNDA0M2Y0YTIxYjlmIiwiZWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZ3BpZCI6ImU3YjQ2ZjVlLWU5MDctNGIzNS1hZjQ0LWM5MzkzZWY5OTA1NSIsInBpZCI6IjI3MWFkYzUxLTc1MzEtNGM3OS1hN2E0LTI1YmQ5MmI2ZmE5MyIsInNyb2xlIjowLCJ1cm9sZSI6MCwic2l0ZSI6NDAsIm9yZ3R5cGUiOjAsIkJpelR5cGUiOjAsIkJpeklkIjpudWxsLCJsZXZlbCI6bnVsbCwiZ2VuIjoxNjA5NzcxMDk0LjAsImV4cCI6MTYwOTgwNzA5NC4wfQ.uuN3dkzQWN8Ro5HSy86iYEk2vxlNjz0wc7YVP9ZINak"

axios.defaults.timeout = 100000;
axios.defaults.withCredentials = true; // 开启跨域身份凭证
/**
 * http request 拦截器
 */
axios.interceptors.request.use(
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

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        if (response.data.errCode === 2) {
            console.log("过期");
        }
        return response;
    },
    (error) => {
        console.log("请求出错：", error);
    }
);


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    console.log(url, data, 111)
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                console.log(response, 222)
                //关闭进度条
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

//统一接口处理，返回数据
export default function (fecth, url, param) {
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case "post":
                post(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request POST failed.", error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    });
}

//失败提示
function msag(err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                alert(err.response.data.error.details);
                break;
            case 401:
                alert("未授权，请登录");
                break;

            case 403:
                alert("拒绝访问");
                break;

            case 404:
                alert("请求地址出错");
                break;

            case 408:
                alert("请求超时");
                break;

            case 500:
                alert("服务器内部错误");
                break;

            case 501:
                alert("服务未实现");
                break;

            case 502:
                alert("网关错误");
                break;

            case 503:
                alert("服务不可用");
                break;

            case 504:
                alert("网关超时");
                break;

            case 505:
                alert("HTTP版本不受支持");
                break;
            default:
        }
    }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
    if (data.code === -1) {
    }
}