import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Example from './components/Example.vue'
import Index from './pages/Index.vue'

export default new VueRouter({
    routes: [
    	{
    		path: '/',
    		component: Index
    	},
        {
            path: '/hello',
            component: Example
        },
    ]
})