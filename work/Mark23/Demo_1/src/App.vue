<template>
	<div class="gradient-background">
		<div style="height: 100%" class="common-layout" >
		<el-container>
			<el-aside width="200px" height="200px">Logo</el-aside>
			<el-container>
				<el-header>
					<div style="display: flex;">
						<div style="width: 60%">
							<span>欢迎</span>
						</div>
						<div style="width: 20%;">
							<el-button type="success" @click="logout" >退出</el-button>
						</div>
					</div>
				</el-header>
			</el-container>
		</el-container>
	</div>
	<div style=" border: 1px solid lightcoral;">
		<div>
			<router-view></router-view>
		</div>
	</div>
	</div>
	
</template>
<script setup>
	import {
		ref,
		onMounted
	} from 'vue';
	import router from "./router";


	const cva = ref('')

	function logout() {

	}

	function handleMouseOver() {
		cva.value = 'cva'
	}

	function handleMouseOut() {
		cva.value = ''
	}
	onMounted(() => {
		setTimeout(() => {
			router.push("/login");
		}, 5000); // 5秒后跳转到目标页面
	});
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.gradient-background {
	  height: 100vh;
	  background-image: linear-gradient(to bottom, #e7feff, #e0fff9);
	  overflow: hidden;
	}
</style>