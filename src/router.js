import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import lianxi from './page/lianxi.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '标题'
            }

    }, {
            path: '/lianxi',
            name: 'lianxi',
            component: lianxi,
            meta: {
                title: '随机练习'
            }

    }
  ]
})
