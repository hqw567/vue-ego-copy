<template>
	<div>
		<el-menu
			:default-active="$route.path"
			class="el-menu-vertical-demo"
			text-color="#fff"
			background-color="#20222a"
			active-text-color="#409EFF"
			router
			:collapse="isCollapse"
			unique-opened
		>
			<el-menu-item>
				<svg
					t="1652865093364"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="1413"
					width="200"
					height="200"
				>
					<path
						d="M512 512m-473.770667 0a473.770667 473.770667 0 1 0 947.541334 0 473.770667 473.770667 0 1 0-947.541334 0Z"
						fill="#040000"
						p-id="1414"
					></path>
					<path
						d="M512 512m-432.298667 0a432.298667 432.298667 0 1 0 864.597334 0 432.298667 432.298667 0 1 0-864.597334 0Z"
						fill="#F3C81E"
						p-id="1415"
					></path>
					<path
						d="M309.418667 542.378667m-117.930667 0a117.930667 117.930667 0 1 0 235.861333 0 117.930667 117.930667 0 1 0-235.861333 0Z"
						fill="#F3961D"
						p-id="1416"
					></path>
					<path
						d="M714.581333 542.378667m-117.930666 0a117.930667 117.930667 0 1 0 235.861333 0 117.930667 117.930667 0 1 0-235.861333 0Z"
						fill="#F3961D"
						p-id="1417"
					></path>
					<path
						d="M334.506667 405.504m-63.317334 0a63.317333 63.317333 0 1 0 126.634667 0 63.317333 63.317333 0 1 0-126.634667 0Z"
						fill="#040000"
						p-id="1418"
					></path>
					<path
						d="M674.304 405.504m-63.317333 0a63.317333 63.317333 0 1 0 126.634666 0 63.317333 63.317333 0 1 0-126.634666 0Z"
						fill="#040000"
						p-id="1419"
					></path>
					<path
						d="M397.994667 660.309333c7.850667 55.978667 55.808 99.157333 114.005333 99.157334s106.154667-43.178667 114.005333-99.157334H397.994667z"
						fill="#FFFFFF"
						p-id="1420"
					></path>
					<path
						d="M512 776.533333c-32.085333 0-62.976-11.605333-87.210667-32.768-23.893333-20.992-39.424-49.664-43.861333-81.066666l-2.730667-19.456h267.434667l-2.730667 19.456c-4.437333 31.232-19.968 60.074667-43.861333 81.066666-24.064 21.162667-54.954667 32.768-87.04 32.768z m-92.330667-99.157333C433.493333 715.605333 470.186667 742.4 512 742.4s78.506667-26.794667 92.330667-65.024H419.669333z"
						fill="#080103"
						p-id="1421"
					></path>
				</svg>
				<span slot="title" style="font-size: 20px; font-weight: 700">
					He-Admin
				</span>
			</el-menu-item>
			<el-menu-item index="/">
				<i class="el-icon-s-data"></i>
				<span slot="title">{{ $t('menu.home') }}</span>
			</el-menu-item>
			<el-submenu index="/goods">
				<template slot="title">
					<i class="el-icon-s-order"></i>
					<span slot="title">{{ $t('menu.goods') }}</span>
				</template>
				<el-menu-item index="/goods/goods-list">
					<i class="el-icon-s-shop"></i>
					<span slot="title">商品列表</span>
				</el-menu-item>
				<el-menu-item index="/goods/goods-verify">
					<i class="el-icon-s-shop"></i>
					<span slot="title">商品审核</span>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="/params">
				<template slot="title">
					<i class="el-icon-s-management"></i>
					<span slot="title">{{ $t('menu.params') }}</span>
				</template>
				<el-menu-item index="/params/specifications">
					<i class="el-icon-s-management"></i>
					<span slot="title">规格与包装</span>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="/order">
				<template slot="title">
					<i class="el-icon-s-platform"></i>
					<span>订单管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="/order/order-list">
						<i class="el-icon-menu"></i>
						<span slot="title">订单列表</span>
					</el-menu-item>
					<el-menu-item index="/order/send-goods">
						<i class="el-icon-s-claim"></i>
						<span slot="title">发货列表</span>
					</el-menu-item>
					<el-menu-item index="/order/change-goods">
						<i class="el-icon-s-claim"></i>
						<span slot="title">换货列表</span>
					</el-menu-item>
					<el-menu-item index="/order/order-back">
						<i class="el-icon-s-claim"></i>
						<span slot="title">退货管理</span>
					</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="/result">
				<template slot="title">
					<i class="el-icon-s-promotion"></i>
					<span slot="title">结果页</span>
				</template>
				<el-menu-item index="/result/success">
					<i class="el-icon-success"></i>
					<span slot="title">成功页</span>
				</el-menu-item>
				<el-menu-item index="/result/fail">
					<i class="el-icon-error"></i>
					<span slot="title">失败页</span>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="/">
				<template slot="title">
					<i class="el-icon-warning"></i>
					<span slot="title">错误页</span>
				</template>
				<el-menu-item index="/403">
					<i class="el-icon-warning-outline"></i>
					<span slot="title">403</span>
				</el-menu-item>
				<el-menu-item index="/404">
					<i class="el-icon-warning-outline"></i>
					<span slot="title">404</span>
				</el-menu-item>
				<el-menu-item index="/500">
					<i class="el-icon-warning-outline"></i>
					<span slot="title">500</span>
				</el-menu-item>
			</el-submenu>
			<el-menu-item index="/user">
				<i class="el-icon-s-custom"></i>
				<span slot="title">个人中心</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	props: ['isCollapse'],
	data() {
		return {
			// isCollapse:false
		}
	},
}
</script>

<style lang="less" scoped>
.menu-logo {
	img {
		width: 30px;
		height: 30px;
		margin-right: 12px;
	}
	span {
		font-size: 20px;
		font-weight: 700;
	}
}
.el-menu {
	border-right: 0;
	svg {
		width: 45px;
		height: 45px;
		margin-left: -10px;
		margin-right: 5px;
	}
	.is-active {
		background: #8700cd !important;
		color: #fff !important;
	}
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
