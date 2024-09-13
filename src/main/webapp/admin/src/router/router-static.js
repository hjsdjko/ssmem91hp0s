import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import forum from '@/views/modules/forum/list'
    import jiuzhuzhan from '@/views/modules/jiuzhuzhan/list'
    import liulangdongwu from '@/views/modules/liulangdongwu/list'
    import aixinmujuan from '@/views/modules/aixinmujuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import lingyangshenqing from '@/views/modules/lingyangshenqing/list'
    import dongwuzhonglei from '@/views/modules/dongwuzhonglei/list'
    import config from '@/views/modules/config/list'
    import dongwuzhaojia from '@/views/modules/dongwuzhaojia/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/jiuzhuzhan',
        name: '救助站',
        component: jiuzhuzhan
      }
      ,{
	path: '/liulangdongwu',
        name: '流浪动物',
        component: liulangdongwu
      }
      ,{
	path: '/aixinmujuan',
        name: '爱心募捐',
        component: aixinmujuan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/lingyangshenqing',
        name: '领养申请',
        component: lingyangshenqing
      }
      ,{
	path: '/dongwuzhonglei',
        name: '动物种类',
        component: dongwuzhonglei
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/dongwuzhaojia',
        name: '动物找家',
        component: dongwuzhaojia
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
