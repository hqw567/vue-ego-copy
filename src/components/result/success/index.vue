<template>
	<div class="success">
		<el-card>
			<div>！ヾ(๑╹◡╹)ﾉ" 提交成功了</div>
			<div>
				提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用
				Message 全局提示反馈即可。
				本文字区域可以展示简单的补充说明，如果有类似展示
				“单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
			</div>
			<div>
				<el-button type="primary" @click="$router.back()">返回列表</el-button>
				<el-button>查看项目</el-button>
				<el-button>打印</el-button>
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
