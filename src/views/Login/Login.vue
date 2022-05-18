<template>
	<div class="wrapper">
		<div class="login-box">
			<div class="login-left">
				<img src="../../assets/images/login_left.svg" alt="login" />
			</div>
			<div class="login-form">
				<div class="logo">
					<img
						class="login-icon"
						src="../../assets/images/logo.svg"
						alt="logo"
					/>
					<p>He-Admin</p>
				</div>
				<el-form
					:model="loginForm"
					status-icon
					:rules="rules"
					ref="ruleForm"
					label-width="60px"
					class="demo-ruleForm"
				>
					<el-form-item label="账号" prop="username">
						<el-input
							type="text"
							v-model="loginForm.username"
							autocomplete="off"
						></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input
							type="password"
							v-model="loginForm.password"
							autocomplete="off"
						></el-input>
					</el-form-item>
					<el-form-item class="form-btn">
						<el-button type="primary" @click="submitForm('ruleForm')">
							登录
						</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import jwt from 'jwt-decode'
import { mapMutations } from 'vuex'
export default {
	data() {
		var validateUser = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入账号'))
			} else {
				callback()
			}
		}
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				callback()
			}
		}
		return {
			info: '',
			loginForm: {
				username: 'admin',
				password: 'admin',
			},
			rules: {
				username: [{ validator: validateUser, trigger: 'blur' }],
				password: [{ validator: validatePass, trigger: 'blur' }],
			},
		}
	},
	methods: {
		...mapMutations('loginModule', ['setUser']),
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let { username, password } = this.loginForm
					//请求登录接口-------------
					this.$api
						.getLogin({
							username,
							password,
						})
						.then(res => {
							console.log('-----', res.data)
							if (res.data.status === 200) {
								console.log(jwt(res.data.data))
								//登录成功后：1. 存储登录信息  2. 跳转网页 3. 顶部区域显示用户信息  4. 持久化
								let obj = {
									user: jwt(res.data.data).username,
									token: res.data.data,
								}
								this.setUser(obj)
								//存储本地
								localStorage.setItem('user', JSON.stringify(obj))
								//跳转
								this.$router.push('/')
								this.$message({
									message: '登录成功!',
									type: 'success',
								})
							} else {
								this.$message.error('账号或密码错误!')
							}
						})
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
			this.loginForm = {
				username: '',
				password: '',
			}
		},
	},
}
</script>

<style lang="less" scoped>
.wrapper {
	height: 100vh;
	background-image: url(../../assets/images/login_bg.svg);
	background-color: #eee;
	background-size: 100% 100%;
	background-size: cover;
	background-position: 50%;
	min-width: 400px;
	min-height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.login-box {
	width: 96%;
	height: 94%;
	background-color: #ffffffd9;
	border-radius: 10px;
	padding: 0 8% 0 6%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.login-left {
	width: 900px;
	img {
		width: 100%;
		height: 100%;
	}
}
.login-form {
	width: 400px;
	padding: 50px 40px 45px;
	border-radius: 10px;
	box-shadow: 2px 3px 7px #0003;
}
.logo {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	img {
		width: 70px;
		height: 70px;
	}
	p {
		font-weight: 700;
		font-size: 45px;
		white-space: nowrap;
		color: #181818;
	}
}
.form-btn {
	display: flex;
	justify-content: center;
	.el-button {
		margin-right: 35px;
	}
}
</style>
