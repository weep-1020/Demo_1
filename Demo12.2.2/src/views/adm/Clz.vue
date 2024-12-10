<template>
	<div style="text-align: center;border: 1px solid lightseagreen;">
		<h3>班级</h3>
		<table style="width: 90%;
	border: 1px solid lightslategray;margin: 0 auto;" border="1">
			<tr>
				<td>班级编号</td>
				<td>班级名称</td>
				<td>操作</td>
				<td>选择</td>
			</tr>
			<tr v-for="(x,idx) in clzs">
				<td>{{x.clzno}}</td>
				<td>{{x.clzname}}</td>
				<td><button @click="goupdate(x)">修改</button></td>
				<td><button @click="del(x.clzno)">删除</button></td>
			</tr>
		</table>
		<p><button @click="go2add()">添加班级</button></p>
		<dialog v-bind:open="bShow" style="position: absolute;top: 30%; left:10%">
			<h3>{{orx()}}</h3>
			<table>
				<tr>
					<td>
						课程编号：
					</td>
					<td>
						<input v-model="newClz.clzno" v-bind:readonly="orx()=='更改班级'" />
					</td>

				</tr>

				<tr>
					<td>
						课程名称：
					</td>
					<td>
						<input v-model="newClz.clzname" />
					</td>

				</tr>
				<tr>
					<td><button @click="cancel()">取消</button></td>
					<td><button @click="save()">保存</button></td>
				</tr>
			</table>
		</dialog>
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
				clzs: [],
				bShow: false,
				cv: false,
				clz: {
					clzno: '',
					clzname: ''
				},
				newClz: {
					clzno: '',
					clzname: ''
				}
			}
		},
		methods: {
			//添加或更改
			orx() {
				if (this.cv == false) {
					return "更改班级";
				}
				if (this.cv == true) {
					return "添加班级";
				}
			},
			//返回
			cancel() {
				this.bShow = false;
			},
			//提交
			save() {
				var that = this;
				// this.newClz = that.clz
				//更改
				if (this.cv == false) {
					this.$postf("/api/adm/clz/update", this.newClz)
						.then((resp) => {
							console.log(resp.data)
							that.clzs = resp.data.data;
						})
					alert("更改成功!")
					this.bShow = false;
				}
				//添加
				if (this.cv == true) {
					this.$postx("/api/adm/clz/add", this.newClz)
						.then((resp) => {
							console.log(resp.data)
							that.clzs = resp.data.data;
						})
					alert("添加成功!")
					this.bShow = false;
				}
			},
			//准备添加
			go2add() {
				this.newClz = {
					clzno: '',
					clzname: ''
				}
				this.cv = true;
				this.bShow = true;
			},
			//准备更改
			goupdate(obj) { //obj 对象参数名
				this.bShow = true;
				this.newClz = obj;
				this.cv = false;
			},
			//删除
			del(clzno) {
				var that = this;
				this.$get("/api/adm/clz/del?clzno=" + clzno).then((resp) => {
					console.log(resp.data);
					that.clzs = resp.data.data;
				})


			}
		},
		mounted() {
			let token = window.localStorage.getItem("token")
			console.log(token)
			this.$get("/api/public/getClzs").then((resp) => {
				this.clz = resp.data.data;
				console.log(this.clzs)
			})
			let that = this; // 注意 this 的变化
			this.$get("/api/public/getClzs").then(function(resp) {
				that.clzs = resp.data.data;
			})
		}

	}
</script>

<style>

</style>
<!-- npm install vuex --save -->