
// import qs from "qs";
 
// export default function({ $axios, redirect }) {
//   $axios.onRequest(config => {
//     config.data = qs.stringify(config.data, {
//       allowDots: true //Option allowDots can be used to enable dot notation
//     });
//     return config;
//   });
 
//   $axios.onResponse(response => {
//     return Promise.resolve(response.data);
//   });
 
//   $axios.onError(error => {
//     return Promise.reject(error);
//   });
// }
export default function({ $axios, redirect }) {
    console.log("进入插件")
    // request interceptor
    $axios.interceptors.request.use(
      config => {
        // do something before request is sent
        return config
      },
      error => {
        // do something with request error
        return Promise.reject(error)
      }
    )
    $axios.onRequest(config => {
        console.log("请求路径是:",config.url)
      console.log('Making request to ' + config.url)
    })
  
    // response interceptor
    $axios.interceptors.response.use(
      /**
       * Determine the request status by custom code
       * Here is just an example
       * You can also judge the status by HTTP Status Code
       */
      response => {
        const res = response.data
        console.info("服务器数据是",res);
        if (res.code === 200) {
          return res
        } else {
          redirect('/404')
          // if the custom code is not 200, it is judged as an error.
        }
        return Promise.reject(new Error(res.msg || 'Error'))
      },
      error => {
        console.log('err' + error) // for debug
  
        return Promise.reject(error)
      }
    )
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/404')
      } else if (code === 500) {
        redirect('/500')
      }
    })
  }
