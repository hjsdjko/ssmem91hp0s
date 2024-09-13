import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import dongwuzhongleiList from '../pages/dongwuzhonglei/list'
import dongwuzhongleiDetail from '../pages/dongwuzhonglei/detail'
import dongwuzhongleiAdd from '../pages/dongwuzhonglei/add'
import liulangdongwuList from '../pages/liulangdongwu/list'
import liulangdongwuDetail from '../pages/liulangdongwu/detail'
import liulangdongwuAdd from '../pages/liulangdongwu/add'
import jiuzhuzhanList from '../pages/jiuzhuzhan/list'
import jiuzhuzhanDetail from '../pages/jiuzhuzhan/detail'
import jiuzhuzhanAdd from '../pages/jiuzhuzhan/add'
import aixinmujuanList from '../pages/aixinmujuan/list'
import aixinmujuanDetail from '../pages/aixinmujuan/detail'
import aixinmujuanAdd from '../pages/aixinmujuan/add'
import dongwuzhaojiaList from '../pages/dongwuzhaojia/list'
import dongwuzhaojiaDetail from '../pages/dongwuzhaojia/detail'
import dongwuzhaojiaAdd from '../pages/dongwuzhaojia/add'
import lingyangshenqingList from '../pages/lingyangshenqing/list'
import lingyangshenqingDetail from '../pages/lingyangshenqing/detail'
import lingyangshenqingAdd from '../pages/lingyangshenqing/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'dongwuzhonglei',
					component: dongwuzhongleiList
				},
				{
					path: 'dongwuzhongleiDetail',
					component: dongwuzhongleiDetail
				},
				{
					path: 'dongwuzhongleiAdd',
					component: dongwuzhongleiAdd
				},
				{
					path: 'liulangdongwu',
					component: liulangdongwuList
				},
				{
					path: 'liulangdongwuDetail',
					component: liulangdongwuDetail
				},
				{
					path: 'liulangdongwuAdd',
					component: liulangdongwuAdd
				},
				{
					path: 'jiuzhuzhan',
					component: jiuzhuzhanList
				},
				{
					path: 'jiuzhuzhanDetail',
					component: jiuzhuzhanDetail
				},
				{
					path: 'jiuzhuzhanAdd',
					component: jiuzhuzhanAdd
				},
				{
					path: 'aixinmujuan',
					component: aixinmujuanList
				},
				{
					path: 'aixinmujuanDetail',
					component: aixinmujuanDetail
				},
				{
					path: 'aixinmujuanAdd',
					component: aixinmujuanAdd
				},
				{
					path: 'dongwuzhaojia',
					component: dongwuzhaojiaList
				},
				{
					path: 'dongwuzhaojiaDetail',
					component: dongwuzhaojiaDetail
				},
				{
					path: 'dongwuzhaojiaAdd',
					component: dongwuzhaojiaAdd
				},
				{
					path: 'lingyangshenqing',
					component: lingyangshenqingList
				},
				{
					path: 'lingyangshenqingDetail',
					component: lingyangshenqingDetail
				},
				{
					path: 'lingyangshenqingAdd',
					component: lingyangshenqingAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
