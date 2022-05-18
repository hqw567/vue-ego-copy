<template>
	<div>
		<div class="header">
			<div class="header-left">
				<i v-if="!isCollapse" @click="changeMenu" class="iconfont">&#xe638;</i>
				<i v-else @click="changeMenu" class="iconfont">&#xe641;</i>
			</div>
			<div class="header-right">
				<div class="message">
					<el-badge :value="200" :max="99" class="item">
						<i class="iconfont">&#xe759;</i>
					</el-badge>
				</div>
				<el-tooltip
					class="item"
					effect="light"
					content="点击切换全屏"
					placement="bottom-end"
				>
					<i v-if="!fullscreen" class="iconfont" @click="screen">&#xeb11;</i>
					<i v-if="fullscreen" class="iconfont" @click="screen">&#xeb10;</i>
				</el-tooltip>
				<el-dropdown @command="clickLang">
					<span class="el-dropdown-link">
						<i class="iconfont">&#xe618;</i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="zh">中文</el-dropdown-item>
						<el-dropdown-item command="en">English</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown @command="clickPerson">
					<span class="avatar">
						<el-avatar
							src="https://q1.qlogo.cn/g?b=qq&amp;nk=79099400&amp;s=640"
						></el-avatar>
						<span class="el-dropdown-link">
							{{ userinfo.user }}
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="personal">个人中心</el-dropdown-item>
						<el-dropdown-item command="exit" divided>退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<!-- 内容区域---路由出口 -->
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	props: ['isCollapse'],
	data() {
		return {
			fullscreen: false,
		}
	},
	computed: {
		...mapState('loginModule', ['userinfo']),
	},
	methods: {
		...mapMutations('loginModule', ['clearUser']),
		changeMenu() {
			//点击切换按钮的时候 修改父组件的数据   isCollapse
			this.$emit('changeCollapse')
		},
		clickLang(command) {
			this.$i18n.locale = command
		},
		clickPerson(command) {
			if (command === 'exit') {
				//退出登录
				//清空vuex数据
				this.clearUser()
				//清空本地存储
				localStorage.removeItem('user')
				//返回登录
				this.$router.push('/login')
			}
			if (command === 'personal') {
				if (this.$route.path !== '/user') this.$router.push({ path: '/user' })
			}
		},
		screen() {
			console.log(1)
			let element = document.documentElement
			if (this.fullscreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen()
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen()
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen()
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen()
				}
			} else {
				if (element.requestFullscreen) {
					element.requestFullscreen()
				} else if (element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen()
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen()
				} else if (element.msRequestFullscreen) {
					// IE11
					element.msRequestFullscreen()
				}
			}
			this.fullscreen = !this.fullscreen
		},
	},
}
</script>

<style lang="less" scoped>
.header {
	height: 50px;
	line-height: 50px;
	color: #fff;
	background: #fff;
	color: #000;
	display: flex;
	justify-content: space-between;
	padding: 0 15px;
	.header-left {
		cursor: pointer;
	}
	.iconfont {
		font-size: 24px;
	}
}
.header-right {
	float: right;
	padding-right: 20px;
	display: flex;
	.message {
		cursor: pointer;
		margin-right: 25px;
	}
	.el-tooltip {
		cursor: pointer;
		margin-right: 20px;
		font-size: 32px;
	}
	.el-dropdown {
		color: #000;
		cursor: pointer;
		margin-right: 20px;
		.el-icon-arrow-down {
			margin-left: 0px;
		}
	}
	.el-dropdown:last-child {
		margin-right: 0;
	}
	.avatar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.el-avatar {
			margin-right: 5px;
		}
	}
}
</style>
