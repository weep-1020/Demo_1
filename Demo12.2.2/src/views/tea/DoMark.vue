<template>
	<div>
		<div style="display: flex; justify-content: space-between; border-bottom: 1px solid green;">
			<h3>登分管理 - 批量登分</h3>
			<p>当前班级：{{clz.clzno}}--{{clz.clzname}} &nbsp;&nbsp; 当前课程：{{course.cno}}-{{course.cname}}</p>
			<p> <button style="color:blue; font-size: 1.1rem;" v-on:click="save()"><b>批量保存成绩....</b></button></p>
		</div>
		<div>
			<table width="98%" border="1" style="background-color: #e7ffd6">
				<tr>
					<th>学号电话</th>
					<th>学生姓名</th>
					<th>班级名称</th>
					<th>课程名称</th>
					<th>分数</th>
				</tr>
				<tr v-for="m in data.markInfos">
					<td>{{m.sno}}</td>
					<td>{{m.user.uname}}</td>
					<td>{{m.user.clz.clzname}}</td>
					<td>{{m.course.cname}}</td>
					<td><input type="text" v-model="m.score"></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script setup>
	import {
		reactive,
		onMounted,
	} from "vue";
	import {
		$get,
		$postf,
		$postj,
		$postx
	} from '../../ajax'
	import router from "../../router/index.js";
	import store from "../../store/index.js"
	const data = reactive({
		clz: {},
		course: {},
		markInfos: [], //显示的
	})

	function save() {
		let mks = []; //练习数组以及数组提交
		for (let i = 0; i < data.markInfos.length; i++) {
			let x = data.markInfos[i];
			let obj = {};
			obj.id = x.id;
			obj.sno = x.sno;
			obj.cno = x.course.cno;
			obj.score = x.score;
			mks.push(obj);
		}
		console.log(mks);
		$postj("/api/fore/tea/addMark", mks).then((resp) => {
			store.commit("show", "批量提交成绩成功 ...");
		})
	}

	onMounted(
		() => clz.clzno = $route.query.clzno;
		 course.cno = route.query.cno;
		  console.log("/api/fore/tea/findMark?clzno=" +
		   clz.clzno + "&cno=" + course.cno);
		   $get("/api/fore/tea/findMark?clzno=" +
			clz.clzno + "&cno=" + course.cno);
		.then((resp) => {
			console.log(resp.data.data);
			data.markInfos = resp.data.data;
		});
	)
</script>

<script>
	// export default {
	// 	name: "TeaDoMark",
	// 	data() {
	// 		return {
	// 			clz: {},
	// 			course: {},
	// 			markInfos: [], //显示的
	// 		}
	// 	},
	// 	methods: {
	// 		save() {
	// 			let mks = []; //练习数组以及数组提交
	// 			for (let i = 0; i < this.markInfos.length; i++) {
	// 				let x = this.markInfos[i];
	// 				let obj = {};
	// 				obj.id = x.id;
	// 				obj.sno = x.sno;
	// 				obj.cno = x.course.cno;
	// 				obj.score = x.score;
	// 				mks.push(obj);
	// 			}
	// 			console.log(mks);
	// 			this.$postj("/api/fore/tea/addMark", mks).then((resp) => {
	// 				this.$store.commit("show", "批量提交成绩成功 ...");
	// 			})
	// 		}
	// 	},
	// 	computed: {

	// 	},
	// 	mounted() {
	// 		this.clz.clzno = this.$route.query.clzno;
	// 		this.course.cno = this.$route.query.cno;
	// 		console.log("/api/fore/tea/findMark?clzno=" + this.clz.clzno + "&cno=" + this.course.cno)
	// 		this.$get("/api/fore/tea/findMark?clzno=" + this.clz.clzno + "&cno=" + this.course.cno)
	// 			.then((resp) => {
	// 				console.log(resp.data.data);
	// 				this.markInfos = resp.data.data;
	// 			});
	// 	}
	// }
</script>

<style>
</style>