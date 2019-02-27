import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import lianxi from './page/lianxi.vue'
import moni_jc from './page/moni_jc.vue'
import jsz from './page/jsz.vue'
import competition_results from './page/competition_results.vue'
import wrong_topic from './page/wrong_topic.vue'
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
                title: ''
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

    }, {
            path: '/competition_results',
            name: 'competition_results',
            component: competition_results,
            meta: {
                title: '竞赛成绩'
            }

    }, {
            path: '/wrong_topic',
            name: 'wrong_topic',
            component: wrong_topic,
            meta: {
                title: '我的错题'
            }

    }
  ]
})
