import Vue from 'vue'
import App from './App.vue'
//import component vue.js yaitu Home.vue
import Home from './Home.vue'

//global component
//add component(name_component, object)
Vue.component('app-servers', Home)

new Vue({
  el: '#app', //id
  render: h => h(App) //template
})
