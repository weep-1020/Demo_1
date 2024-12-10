import {
	createApp
} from 'vue'
import store  from "./store/index.js"
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import {$get,$postx,$postj,$postf} from './ajax/index.js' 


var vm = createApp(App)
vm.use(router)
vm.use(store)
//get  键值对
vm.config.globalProperties.$get = $get; 
//post  file Body  
// url: /api/adm/stu/add 带图片   FormData 键值对
vm.config.globalProperties.$postf = $postf; 
//post  Json Body  application/json
// url: /api/adm/clz/add    obj： {clzno: 'K01', clzname: 'Java'}
vm.config.globalProperties.$postj = $postj; 
//post  键值对(key-value) Body  x-www-formed
// url: /api/adm/clz/add    obj： {clzno: 'K01', clzname: 'Java'}
vm.config.globalProperties.$postx = $postx; 
// vm.config.globalProperties.$store = store;
// vm.config.globalProperties.$axios = axios;
vm.config.globalProperties.$ip = "http://127.0.0.1:9000";
vm.mount('#app')