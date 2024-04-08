<template>
	<view>
		<view class="track">
				 <image :src="img"></image>
		</view>
	
	</view>
</template>

<script>
	import * as  Api from '@/api/competition/list.js'
	export default{
		data(){
			return{
			   img:'',
			   id:'',
			   img:''
			}
		},
		onLoad(e) {
			if(e.spuId){
				this.id = e.spuId
				this.geiImage()
			}
			
		},	
		methods:{
			geiImage(){
				Api.runWayImg(this.id).then(res=>{
					this.img = res.data.picUrl
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.track{
		width: 100vw;
		height: 100vh;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>