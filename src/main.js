import Vue from 'vue'
import App from './App.vue'
//import component vue.js yaitu Home.vue
import Home from './Home.vue'

//add component(name_component, object)
Vue.component('app-server-status', Home)

new Vue({
  el: '#app', //id
  render: h => h(App) //template
})
