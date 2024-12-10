<template>
	<div style="height: 80vh;border: blue 1px solid">
		<h3>密码修改-教师学生同页面组件</h3>
		<hr>
		<p>旧密码：<input type="password" v-model="data.oldPwd"></p>
		<p>新密码第一次：<input type="password" v-model="data.newPwd1"></p>
		<p>新密码第二次：<input type="password" v-model="data.newPwd2"></p>
		<hr>
		<button v-on:click="update()">确认修改密码</button>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from "vue";
	import {
		$get,
		$postf,
		$postj,
		$postx
	} from '../../ajax'
	
	const data = reactive({
		oldPwd:'',
		newPwd1:'',
		newPwd2:''
	})
	function update() {
				if (data.newPwd1 != data.newPwd2) {
					$store.commit("show", "新密码输入2次不一致")
					return;
				}
				let objPwd = {
					oldPwd: data.oldPwd,
					newPwd: data.newPwd1
				};
				console.log(objPwd)
				$postx("/api/user/updatePwd", objPwd).then((resp) => {
					
				})
			} 
	
</script>

<script>
	export default {
		name: 'TeaPwd',
		data() {
			return {
				oldPwd: '',
				newPwd1: '',
				newPwd2: ''
			}
		},
		methods: {
			update() {
				if (this.newPwd1 != this.newPwd2) {
					this.$store.commit("show", "新密码输入2次不一致")
					return;
				}
				let objPwd = {
					oldPwd: this.oldPwd,
					newPwd: this.newPwd1
				};
				console.log(objPwd)
				this.$postx("/api/user/updatePwd", objPwd).then((resp) => {
					// this.$store.commit("show", resp.data.msg)
				})
			} //update	
		}
	}
</script>

<style>
</style>