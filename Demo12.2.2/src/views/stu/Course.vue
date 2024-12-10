<template>
	<div style="height: 80vh;">
		<h3>我的课程表</h3>
		<hr>
		<div>
			<table width="90%" border="1" cellspacing="0">
				<tr>
					<th>任课教师</th>
					<th>任课教师</th>
					<th>所在班级</th>
					<th>所在班级</th>
					<th>课程编号</th>
					<th>课程名称</th>
				</tr>
				<tr v-for="e in data.tasks">
					<td>{{e.user.uid}}</td>
					<td>{{e.user.uname}}</td>
					<td>{{e.clz.clzno}}</td>
					<td>{{e.clz.clzname}}</td>
					<td>{{e.course.cno}}</td>
					<td>{{e.course.cname}}</td>
				</tr>
			</table>
		</div>
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
		tasks: [],
	})
	onMounted(() => {
		$get("/api/fore/stu/findMyCourse")
			.then((resp) => {
				console.log(resp.data.data)
				data.tasks = resp.data.data;
			})
	})
	const tasks = data.marks;
</script>

<script>
	// export default {
	// 	name: "StuCourse",
	// 	data() {
	// 		return {
	// 			tasks: []
	// 		}
	// 	},
	// 	methods: {

	// 	},
	// 	mounted() {
	// 		this.$get("/api/fore/stu/findMyCourse")
	// 			.then((resp) => {
	// 				console.log(resp.data.data)
	// 				this.tasks = resp.data.data;
	// 			})
	// 	}
	// }
</script>

<style>
</style>