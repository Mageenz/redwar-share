import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import RedWarIndex from './components/Index'
import Project from './components/Project'
import RedWarInfo from './components/RedWarInfo'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {component: RedWarIndex, path: '/index'},
    {component: Project, path: '/project'},
    {component: RedWarInfo, path: '/redWarInfo'},
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
