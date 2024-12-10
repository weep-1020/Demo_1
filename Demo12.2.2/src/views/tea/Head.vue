<template>
	<div style="height: 80vh;border: blue 1px solid">
		<h3>头像修改-教师学生同页面组件</h3>
		<hr>
		<div style="display: flex;">
			<!-- menu -->
			<div style="width: 25%; height: 100%; padding-left: 5%; ">
				<h3>
					当前我的图片
				</h3>
				<div style="width: 10vw; height: 10vw; border: 2px solid gray;">
					<img v-bind:src=" $ip+'/api/public/showimg/' + $store.state.user.pic"
						style="width: 100%;height: 100%">
				</div>
			</div>
			<div style="width: 74%;height: 100%;">
				<h3>
					上传新的图片
				</h3>
				<!-- <input type="file" ref="img" @change="go2Photo"> -->
				<!-- <input type="file" ref="img" value="请选择新的图片"> -->
				<input type="file" ref="img">
				<hr>
				<button v-on:click="update()"> 更新我的图片 </button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
		defineComponent
	} from "vue";
	import {
		$get,
		$postf,
		$postj,
		$postx
	} from '../../ajax'
	import { useStore } from "vuex";
	

	
	const store = useStore();
	const img = ref(null);
	function update() {
		var fd = new FormData;
		var file = img.value.files[0];
		fd.append("mypic", file);
		$postf("/api/user/updatePic", fd).then((resp) => {
			store.state.pic = resp.data.data
		})
  }
		
</script>

// <script>
	// 	export default {
	// 		name: 'TeaHead',
	// 		data() {
	// 			return {}
	// 		},
	// 		methods: {
	// 			update() {
	// 				var fd = new FormData;
	// 				var file = this.$refs.img.files[0];
	// 				fd.append("mypic", file);
	// 				this.$postf("/api/user/updatePic", fd).then((resp) => {
	// 					this.$store.state.pic = resp.data.data + "?x=" + (new Date().getMilliseconds());
	// 				})
	// 			}
	// 		}
	// 	}
	// 
</script>

<style>
</style>