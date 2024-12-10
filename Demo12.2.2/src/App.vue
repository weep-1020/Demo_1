<template>
	<div style="width: 100%; height: 100%; border: 1px solid lawngreen;">
		<div style="width: 90%;
		 margin: 0 auto;
		  border: 1px solid lightcoral;">
			<!-- 导航栏 -->
			<div style="text-align: center;">
				<h2>学生成绩管理 Mark5, Vue2.5</h2>
			</div>
			<hr />
			<div style="display:flex; padding-left: 40%; height:50px;"
			v-if="this.$store.state.user.role!==''">
				<div style="width: 20%;">
					<p>{{ roleName }}</p>
				</div>
				<div style="width: 20%;">
					<p>{{ $store.state.user.name }}</p>
				</div>
				<div style="width: 20%;">
					<img style="width: 50px; height: 50px;"
						:src="$ip + '/api/public/showimg/' + $store.state.user.pic" />
				</div>
				<div style="width: 20%;">
					<p>
						<a @click="logout">退出</a>
					</p>
				</div>
			</div>
			<hr />
		</div>

		<div style="width: 90%; margin: 0 auto; border: 1px solid lightcoral;">
			<div style="width: 100%; height: 100%;">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			logout() {
				window.localStorage.setItem("token", "");
				this.$router.push("/login");
			}
		},
		computed: {

			roleName() {
				var userRole = this.$store.state.user.role;
				if (userRole == 'adm') {
					return "管理人员";
				}
				if (userRole == 'stu') {
					return "学生";
				}
				if (userRole == 'tea') {
					return "教师";
				}
			}
		},
		mounted() {
			this.$router.push('/login');
		},
	};
</script>

<style>
	/* 这里添加全局样式 */
</style>