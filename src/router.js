import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import lianxi from './page/lianxi.vue'
import moni_jc from './page/moni_jc.vue'
import jsz from './page/jsz.vue'
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

    }, {
            path: '/moni_jc',
            name: 'moni_jc',
            component: moni_jc,
            meta: {
                title: '模拟竞赛'
            }

    }, {
            path: '/jsz',
            name: 'jsz',
            component: jsz,
            meta: {
                title: '竞赛中'
            }

    }
  ]
})
