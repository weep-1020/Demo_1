<template>
	<div style="text-align: center;border: 1px solid lightseagreen;">
		<h3>班级</h3>
		<table style="width: 90%;
	border: 1px solid lightslategray;margin: 0 auto;" border="1">
			<tr>
				<td>教师ID</td>
				<td>教师名称</td>
				<td>教师电话</td>
				<td>头像</td>
				<td>选择</td>
				<td>选择</td>
			</tr>
			<tr v-for="(x,idx) in teas">
				<td>{{x.uid}}</td>
				<td>{{x.uname}}</td>
				<td>{{x.phone}}</td>
				<td><img style="width: 50px; height: 50px;" :src="$ip + '/api/public/showimg/' + x.pic" /></td>
				<td><button @click="go2Update(x)">修改</button></td>
				<td><button @click="del(x.uid)">删除</button></td>
			</tr>
		</table>
		<p><button @click="go2add()">添加教师</button></p>
	</div>

</template>

<script setup>
	import axios from 'axios';

	function del12(clzno) {
		alert("删除：" + clzno);
	}
</script>

<script>
	export default {
		name: 'Clz',
		data() {
			return {
				teas: [],
				bShow: false,
				cv: false,
				tea: {
					uid: '',
					uname: '',
					phone: '',
					pic: ''

				},
			}
		},
		methods: {
			go2add() {
				this.$router.push({
					path: "/adm/addtea",
					query: {
						uid: 0
					}
				})
			},
			go2Update(x) {
				console.log(x);
				this.$router.push({
					path: "/adm/addtea",
					query: {
						uid: x.uid
					}
				})
			},
			//删除
			del(uid) {
				var that = this;
				this.$get("/api/adm/tea/del?uid=" + uid).then((resp) => {
					console.log(resp.data);
					that.teas = resp.data.data;
				})
			}
		},
		mounted() {
			let token = window.localStorage.getItem("token")
			console.log(token)
			this.$get("/api/user/info").then((resp) => {
				this.tea = resp.data.data;
				console.log(this.tea)
			})
			let that = this;
			// 注意 this 的变化
			this.$get("/api/adm/tea/findAll").then((resp) => {
				that.teas = resp.data.data;
			})
		}
	}
</script>

<style>

</style>
<!-- npm install vuex --save -->