// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'//导入组件
import router from './router'//导入路由
import Mint from 'mint-ui';//使用mint-ui组件库
import 'mint-ui/lib/style.css';
import Axios from 'axios';

//自己的css
import '../static/css/base.css';
Vue.use(Mint);
// Axios.defaults.baseURL='http://127.0.0.1:8888/';
Vue.config.productionTip = false;
Vue.prototype.$axios=Axios;
Vue.prototype.$mint=Mint;
//添加拦截器
Axios.interceptors.request.use(function (fig) {
  //加载提示框
  Mint.Indicator.open({
    text:'加载中...'
  });
  //发送请求之前
  return fig;
},function (err) {
  return Promise.reject(err);

});
Axios.interceptors.response.use(function (res) {
  //对相应数据操作
  // 加载提示框关闭
  Mint.Indicator.close();
  return res;
},function (err) {
  return Promise.reject(err);
});

//挂载公共组件
import Navbar from '@/components/publicomponent/Navbar/Navbar';
Vue.component(Navbar.name,Navbar);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
