<template>
	<div style="height: 80vh;border: blue 1px solid">
		<h3>头像修改</h3>
		<hr>
		<div style="display: flex; ">
			<!-- menu -->
			<div style="width: 25%; height: 100%;">
				<h3>
					当前我的图片
				</h3>
				<div style="width: 10vw; height: 10vw;">
					<img v-bind:src="$ip + '/api/public/showimg/' + $store.state.user.pic" 
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

<script>
import axios from 'axios';

	export default {
		name: 'AdmHead',
		data() {
			return {}
		},
		methods: {
			// go2Photo(e){
			// 	let file = e.target.files[0];
			// 	console.log(file.name)
			// 	this.$store.state.photo.photoName = file.name
			// 	console.log(file.type)
			// 	if (window.FileReader) {
			// 		let reader = new FileReader();
			// 		reader.readAsDataURL(file);
			// 		reader.onload = e =>{
			// 			let Base64String = e.target.result;
			// 			this.$store.photo.photoBody = Base64String; 
			// 			console.log("bese64编码："+Base64String)
			// 		}
			// 	}
			// },
			update() {
				var fd = new FormData;
				var file = this.$refs.img.files[0];
				fd.append("mypic", file);
				this.$postf("/api/user/updatePic", fd).then((resp) => {
					this.$store.state.pic = resp.data.data + "?x=" + (new Date().getMilliseconds());
					// this.$store.commit("show", resp.data.msg)
				})
			} //update
		}
	}
</script>

<style>
</style>