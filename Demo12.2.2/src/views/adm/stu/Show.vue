<template>
	<div style="text-align: center;border: 1px solid lightseagreen;">
		<h3>班级</h3>
		<table style="width: 90%;
	border: 1px solid lightslategray;margin: 0 auto;" border="1">
			<tr>
				<td>学生ID</td>
				<td>学生名称</td>
				<td>班级</td>
				<td>电话号码</td>
				<td>班级名称</td>
				<td>头像</td>
				<td>选择</td>
				<td>选择</td>
			</tr>
			<tr v-for="(x,idx) in stus">
				<td>{{x.uid}}</td>
				<td>{{x.uname}}</td>
				<td>{{x.phone}}</td>
				<td>{{x.clz.clzno}}</td>
				<td>{{x.clz.clzname}}</td>
				<td><img style="width: 50px; height: 50px;" :src="$ip + '/api/public/showimg/' + x.pic" /></td>
				<td><button @click="go2Update(x)">修改</button></td>
				<td><button @click="del(x.uid)">删除</button></td>
			</tr>
		</table>
		<p><button @click="go2add()">添加学生</button></p>
		<hr />
		<div>
			<p><button v-on:click="move(-1)">上一页</button>
			{{page.num}}/{{totalpage}}
			<button v-on:click="move(+1)">下一页</button></p>
		</div>

	</div>
</template>

<script>
	export default {
		name: "AdmTeaShow",
		data: function() {
			return {
				stus: [],
				page: {
					num: 1,
					lines: 6,
					total: 0,
				},
			}
		},
		methods: {
			del(uid) {
				var e = this;
				this.$get("/api/adm/stu/del/" + uid).then((t) => {
					console.log(resp.data),
						e.teas = resp.data.data
				})
			},
			go2add() {
				this.$store.state.pagenum = this.page.num;
				this.$router.push({
					path: '/adm/addstu',
					query: {
						uid: 0,
					}
				})
			},
			go2Update(x) {
				console.log(x);
				this.$store.state.pagenum = this.page.num;
				this.$router.push({
					path: "/adm/addstu",
					query: {
						uid: x.uid
					}
				})
			},
			move(t) {
				this.page.num = this.page.num + t;
				if (this.page.num < 1) {
					this.page.num = 1;
				}
				if (this.page.num > this.totalpage) {
					this.page.num = this.totalpage;
				}
				var that = this;
				this.$get("/api/adm/stu/findPage?pagenum=" + that.page.num +
					"&lines=" + that.page.lines).then((resp) => {
					console.log(resp.data.data),
						that.stus = resp.data.data.students,
						that.page.total = resp.data.data.total
				})
			}
		},
		computed: {
			totalpage() {
				let tnum = this.page.total / this.page.lines;
				console.log("未取整页数=" + tnum);
				tnum = Math.floor(tnum);
				let e = this.page.total % this.page.lines;
				console.log("页数=" + tnum + "余数=" + e)
				if (e > 0) tnum = tnum + 1;
				console.log(tnum)
				return tnum;
			}
		},
		mounted() {
			this.$store.state.pagenum = this.page.num;
			var pnum = this.page.num
			var that = this;
			this.$get("/api/adm/stu/findPage?pagenum=" + pnum +
					"&lines=" + this.page.lines)
				.then((resp) => {
					console.log(resp.data.data),
						that.stus = resp.data.data.students,
						that.page.total = resp.data.data.total
				})
		}
	}
</script>

<style>
</style>