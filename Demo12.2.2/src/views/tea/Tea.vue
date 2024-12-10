<template>
	<div style="display: flex;margin: 0 auto;height: 100%;">
		<div style="width: 20%;height: 100%; border: 1px solid lawngreen;">
			<h3>后台管理</h3>
			<ul>
            <li><router-link to="/tea/pwd">修改密码</router-link></li>
			<li><router-link to="/tea/head">更改头像</router-link></li>
            <li><router-link to="/tea/gomark">登分管理</router-link></li>
			</ul>
		</div>
		<div style="width: 80%; border: 1px solid lightcoral;">
			<!-- <h2>教师</h2> -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>