import axios from "axios"
import qs from "qs"
import router from "../router/index.js"

let token = ''
axios.defaults.withCredentials = false;
axios.defaults.headers.common['Authorization'] = token;

//defaults.headers  // 缺省的请求头

//创建一个实例
// 指定基准路径 baseURL: 'http://127.0.0.1:9000'
// this.$ip + /api/......
//     /api/.....
var instance = axios.create({
     baseURL: 'http://127.0.0.1:9000'
     //baseURL: ''
})

//添加一个请求拦截器   自动读取 localStorage 的 JWT  Token， 并带到 SpringBoot
instance.interceptors.request.use(
    config => {    
        let token = window.localStorage.getItem('token');
        console.log("每次请求前读取 Token=" + token)
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }  
);

// http response 响应拦截器
instance.interceptors.response.use(
    response => {
    console.log("成功 拦截1:" + response.status)
        return response;
    },
    error => {
        console.log("error 拦截1:" + error.response.status)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                   console.log("error 拦截2:" + error.response.status)
                   // store.commit("show", "账号或密码有误....");                    
                   localStorage.setItem('token', "");
                   router.push('/login');     //跳转登录
                   break;
                case 403:   //禁止访问, 没有权限
                   // store.commit("show", "禁止访问, 没有权限-403....");
                   //Message.error({message: "禁止访问, 没有权限-403" , offset: 150});
                   //router.push('/login');     //跳转登录
                break;
        default:
           // 系统建设中 。。。
           // store.commit("show", "操作失败 ...");
            //Message.error({message: "操作失败 ...." , offset: 150});
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
);


//get  键值对
// url: /api/adm/clz/findPage    obj： {pagenum: 3, lines: 10}

export let $get = ( url,  obj) => {
    return instance.get(
          url, 
          {params : obj}
        )
}

//post  键值对(key-value) Body  x-www-formed
// url: /api/adm/clz/add    obj： {clzno: 'K01', clzname: 'Java'}
export let $postx = function(url, obj) {
    //把 obj 转成键值对
    let kv = qs.stringify(obj)
 console.log("postx=" + kv)
    return instance.post(
        url,
        kv, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf8'
            }
        }
    )

}


//post  Json Body  application/json
// url: /api/adm/clz/add    obj： {clzno: 'K01', clzname: 'Java'}
export let $postj = function(url, obj) {
    return instance.post(
        url,
        obj, {
            headers: {
                'Content-Type': 'application/json;charset=utf8'
            }
        }
    )
}

//post  file Body  
// url: /api/adm/stu/add 带图片   FormData 键值对
export let $postf = function(url, formData) {    
    return instance.post(
        url,
        formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )
}
