<template>
	<div style="display: flex;margin: 0 auto;height: 100%;">
		<div style="width: 20%;height: 100%; border: 1px solid lawngreen;">
			<h3>后台管理</h3>
			<ul>
				<li><router-link to="/adm/clz">班级管理</router-link></li>
				<li><router-link to="/adm/course">课程管理</router-link></li>
				<li><router-link to="/adm/tea">教师管理</router-link></li>
				<li><router-link to="/adm/stu">学生管理</router-link></li>
				<li><router-link to="/adm/task">课程安排</router-link></li>
				<li><router-link to="/adm/head">修改头像</router-link></li>
			</ul>
		</div>
		<div style="width: 80%; border: 1px solid lightcoral;">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>
	import axios from 'axios';
</script>

<script>
	export default{
		
	}
</script>

<style>
</style>