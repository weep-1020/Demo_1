<template>
	<div style="text-align: center;border: 1px solid lightseagreen;">
		<h3>班级</h3>
		<table style="width: 90%;
	border: 1px solid lightslategray;margin: 0 auto;" border="1">
			<tr>
				<td>课程编号</td>
				<td>课程名称</td>
				<td>操作</td>
				<td>选择</td>
			</tr>
			<tr v-for="(x,idx) in courses">
				<td>{{x.cno}}</td>
				<td>{{x.cname}}</td>
				<td><button @click="goupdate(x)">修改</button></td>
				<td><button @click="del(x.cno)">删除</button></td>
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
						<input v-model="newCourse.cno" v-bind:readonly="orx()=='更改班级'" />
					</td>

				</tr>

				<tr>
					<td>
						课程名称：
					</td>
					<td>
						<input v-model="newCourse.cname" />
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

	function del12(cno) {
		alert("删除：" + cno);
	}
</script>

<script>
	export default {
		name: 'Course',
		data() {
			return {
				courses: [],
				bShow: false,
				cv: false,
				course: {
					cno: '',
					cname: ''
				},
				newCourse: {
					cno: '',
					cname: ''
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
				//更改
				if (this.cv == false) {
					this.$postj("/api/adm/course/update", this.newCourse)
						.then((resp) => {
							console.log(resp.data);
							that.courses = resp.data.data;
						})
					alert("更改成功!")
					this.bShow = false;
				}
				//添加
				if (this.cv == true) {
					this.$postj("/api/adm/course/add", this.newCourse)
						.then((resp) => {
							console.log(resp.data);
							that.courses = resp.data.data;
						})
					alert("添加成功!")
					this.bShow = false;
				}
			},
			//准备添加
			go2add() {
				this.newCourse = {
					cno: '',
					cname: ''
				}
				this.cv = true;
				this.bShow = true;
			},
			//准备更改
			goupdate(obj) { //obj 对象参数名
				this.bShow = true;
				this.newCourse = obj;
				this.cv = false;
			},
			//删除
			del(cno) {
				// alert(cno)
				var that = this;
				this.$get("/api/adm/course/del?cno=" + cno).then((resp) => {
					console.log(resp.data);
					that.clzs = resp.data.data;
				})
			}
		},
		mounted() {
			let token = window.localStorage.getItem("token")
			console.log(token)
			this.$get("/api/public/getCourses").then((resp) => {
				this.course = resp.data.data;
				console.log(this.courses)
			})

			let that = this; // 注意 this 的变化
			this.$get("/api/public/getCourses").then(function(resp) {
				that.courses = resp.data.data;
			})
		}

	}
</script>

<style>

</style>
<!-- npm install vuex --save -->