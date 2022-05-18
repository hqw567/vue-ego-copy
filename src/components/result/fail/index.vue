<template>
	<div class="success">
		<el-card>
			<div>(。・＿・。)ﾉI’m sorry~ 提交失败</div>
			<div>请核对并修改以下信息后，再重新提交。</div>
			<div>
				<el-button type="primary" @click="$router.back()">返回列表</el-button>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.success {
	margin: 20px;
}
.el-card {
	padding: 100px;
	div {
		margin-bottom: 20px;
	}
}
</style>
