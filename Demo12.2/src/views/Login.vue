<template>
	<div style="text-align: center;">
		<p>登录</p>
	</div>
	<div style="display: flex;margin: 0 auto; height: 100%">
		<div style="text-align: center;margin: 0 auto; width: 25%;">
			<table>
				<tr>
					<td>
						<p>手机号：</p>
					</td>
					<td>
						<input type="text" v-model="user.username" style="width: 80%;" />
					</td>
				</tr>
				<tr>
					<td>
						<p>密码：</p>
					</td>
					<td>
						<input type="text" v-model="user.password" style="width: 80%;" />
					</td>
				</tr>
				<tr>
					<td>
						<p>
							选择:
						</p>
					</td>
					<td>
						<input type="button" @click="login()" value="登录">
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				user: {
					username:'',
					password:''
				},
			};
		},
		methods: {
			login() {
				const that = this;
				// let fd = new FormData();
				// fd.append('username', that.user.username);
				// fd.append('password', that.user.password);
				console.log('开始登录');
				// 提交FormData格式数据获取登录token
				this.$postf("/api/login",that.user).then((resp) => {
					// 添加token到window
					window.localStorage.setItem('token', resp.data.data.token);
					console.log(resp.data.data.token);


					that.$get("/api/user/info").then((resp) => {
						console.log(resp.data);

						//将获取出来的信息存储到当前容器中
						that.$store.state.user.name = resp.data.data.uname;
						that.$store.state.user.pic = resp.data.data.pic;
						that.$store.state.user.token = window.localStorage.getItem("token");
						that.$store.state.user.role = resp.data.data.role;
						console.log(that.$store.state.user)

						if (resp.data.data.role == 'adm') {
							console.log("管理员系统")
							that.$router.push('/adm');
							return;
						}
						if (resp.data.data.role == 'tea') {
							console.log("教师用户系统")
							that.$router.push('/tea');
							return;
						}
						if (resp.data.data.role == 'stu') {
							console.log("学生用户系统")
							that.$router.push('/stu');
							return;
						}
					});
				});
			}
		},
		mounted() {

		}
	}
</script>

<style>

</style>