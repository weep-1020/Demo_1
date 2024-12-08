<template>
	<div style="display: flex;margin: 0 auto;height: 100%;">
		<div style="width: 20%;height: 100%; border: 1px solid lawngreen;">
			<h3>后台管理</h3>
			<ul>
			<li><router-link to="/stu/course">我的课程</router-link></li>	
            <li><router-link to="/stu/mark">我的分数</router-link></li>	
			</ul>
		</div>
		<div style="width: 80%; border: 1px solid lightcoral;">
			<h2>学生</h2>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style>
</style>