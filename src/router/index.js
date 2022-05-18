import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/Login.vue'

//异步
const Goods = () => import('../views/Goods/index.vue')
const GoodsList = () => import('../views/Goods/GoodsList/Goods.vue')
const GoodsVerify = () => import('../views/Goods/GoodsVerify/index.vue')
const Params = () => import('../views/Params/Params.vue')
const Specifications = () =>
	import('../views/Params/ParamsInfo/Specifications.vue')
const Order = () => import('../views/Order/index.vue')
const OrderList = () => import('../views/Order/OrderList/index.vue')
const OrderBack = () => import('../views/Order/OrderBack/index.vue')
const ChangeGoods = () => import('../views/Order/ChangeGoods/index.vue')
const SendGoods = () => import('../views/Order/SendGoods/index.vue')
const User = () => import('../views/User/index.vue')
//子级路由
const AddGoods = () => import('../views/Goods/GoodsList/AddGoods.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		component: Layout,
		//路由元信息
		meta: {
			isLogin: true,
		},
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home,
			},
			{
				path: '/goods',
				name: 'Goods',
				component: Goods,
				redirect: '/goods/goods-list',
				children: [
					{
						path: 'goods-list',
						name: 'GoodsList',
						component: GoodsList,
					},
					{
						path: 'goods-verify',
						name: 'GoodsVerify',
						component: GoodsVerify,
					},
				],
			},
			{
				path: '/add-goods',
				name: 'AddGoods',
				component: AddGoods,
			},
			{
				path: '/params',
				name: 'Params',
				component: Params,
				redirect: '/params/specifications',
				children: [
					{
						path: 'specifications',
						name: 'Specifications',
						component: Specifications,
					},
				],
			},
			{
				path: '/result',
				name: 'Result',
				component: () => import('../components/result'),
				redirect: '/404',
				children: [
					{
						path: 'success',
						name: 'Success',
						component: () => import('../components/result/success'),
					},
					{
						path: 'fail',
						name: 'Fail',
						component: () => import('../components/result/fail'),
					},
				],
			},
			{
				path: '/user',
				name: 'User',
				component: User,
			},
			{
				path: '/order',
				name: 'Order',
				component: Order,
				redirect: '/order/order-list',
				children: [
					{
						path: 'order-list',
						component: OrderList,
					},
					{
						path: 'order-back',
						component: OrderBack,
					},
					{
						path: 'change-goods',
						component: ChangeGoods,
					},
					{
						path: 'send-goods',
						component: SendGoods,
					},
				],
			},
		],
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/500',
		name: '500',
		component: () => import('../components/ErrorMessage/500.vue'),
	},
	{
		path: '/403',
		name: '403',
		component: () => import('../components/ErrorMessage/403.vue'),
	},
	{
		path: '*',
		name: '404',
		component: () => import('../components/ErrorMessage/404.vue'),
	},
]

const router = new VueRouter({
	routes,
})

export default router
