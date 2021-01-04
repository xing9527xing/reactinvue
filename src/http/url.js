// import request from './http';

// // 找回企业提交
// function GetWbsDataAsyn(data) {
//     return request({
//       url: "Api/Schedule/Wbs/GetWbsDataAsyn",
//       data
//     });
//   }

// export {
//     GetWbsDataAsyn
// }
import request from "./http"
function GetWbsDataAsyn(data) {
    return request('post', 'Api/Schedule/Wbs/GetWbsDataAsyn', data);
}
export {
    GetWbsDataAsyn
}