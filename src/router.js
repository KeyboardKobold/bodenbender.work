import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Imprint from './views/Imprint.vue'
import SiteNotFound from './views/SiteNotFound.vue'

Vue.use(Router)

export default  new Router( {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/imprint',
            name: 'imprint',
            component: Imprint
        },
        {
            // will match everything
            path: '*',
            name: '404',
            component: SiteNotFound
        }
    ]
})