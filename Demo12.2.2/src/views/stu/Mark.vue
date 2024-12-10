<template>
	<div style="height: 80vh;">
		<h3>我的分数表</h3>
		<hr>
		<div>
			<table width="90%" border="1" cellspacing="0">
				<tr>
					<th>学生编号</th>
					<th>学生姓名</th>
					<th>班级编号</th>
					<th>班级名称</th>
					<th>课程编号</th>
					<th>课程名称</th>
					<th>课程成绩</th>
					<th>录入时间</th>
				</tr>
				<tr v-for="(e,xid) in data.marks">
					<td>{{e.user.uid}}</td>
					<td>{{e.user.uname}}</td>
					<td>{{e.user.clz.clzno}}</td>
					<td>{{e.user.clz.clzname}}</td>
					<td>{{e.course.cno}}</td>
					<td>{{e.course.cname}}</td>
					<td><span style="font-weight: 700;">{{e.score}}</span></td>
					<td>{{fmtDate(e.tpost,'yyyy-M-d')}}</td>
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
		$get
	} from '../../ajax'

	const data = reactive({
		marks: [],
	})

	function fmtDate(value, args) {
		console.log(value)
		const dt = new Date(value);
		if (args === 'yyyy-M-d') { // yyyy-M-d
			let year = dt.getFullYear();
			let month = dt.getMonth() + 1;
			let date = dt.getDate();
			return `${year}-${month}-${date}`;
		}
	}
	onMounted(() => {
		$get("/api/fore/stu/findMyMark")
			.then((resp) => {
				console.log(resp.data.data)
				data.marks = resp.data.data;
			})
	})
	const marks = data.marks;
</script>

<script>
// 	export default {
// 		name: "StuCourse",
// 		data() {
// 			return {
// 				marks: [],
// 			}
// 		},

// 		methods: {
// 			fmtDate(value, args) {
// 				console.log(value)
// 				var dt = new Date(value);
// 				if (args == 'yyyy-M-d') { // yyyy-M-d
// 					let year = dt.getFullYear();
// 					let month = dt.getMonth() + 1;
// 					let date = dt.getDate();
// 					return `${year}-${month}-${date}`;
// 				}
// 			}
// 		},
// 		filters: {

// 		},
// 		mounted() {
// 			this.$get("/api/fore/stu/findMyMark")
// 				.then((resp) => {
// 					console.log(resp.data.data)
// 					this.marks = resp.data.data;
// 				})
// 		}
// 	}
</script>

<style>
</style>