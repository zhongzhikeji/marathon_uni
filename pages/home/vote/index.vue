<template>
	<view>
		<view class="wrapper">
			<u-navbar :auto-back="true" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent" title="投票">
			</u-navbar>
			<view class="ml10 mr10 pb10 mt20">
				<u-search  bgColor='#fff'  searchIconColor='#604EEA' placeholder="搜索名称"
					disabled :show-action="false" @click="handleSearchClick"></u-search>
			</view>
			 <view class="Citem">
				 <view class="item">
					 <view class="flex alcenter around pt15">
						 <view>
					<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote01.png" width="101px" height="26px"></u--image>
						<view class="content_title">快来PICK你心中的最佳马拉松跑手</view>
						 </view>
						 <view>
						<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote02.png" width="77px" height="73px"></u--image> 
						 </view>
					 </view>
				 </view>
				 <view class="item">
				 		<view class="flex alcenter around pt15">
				 			 <view>
				 		<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote03.png" width="86px" height="27px"></u--image>
				 			<view class="content_title1">快来PICK你心中的最佳马拉松跑手</view>
				 			 </view>
				 			 <view>
				 			<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote04.png" width="77px" height="73px"></u--image> 
				 			 </view>
				 		 </view>			 
				 </view>
				 <view class="item">
				 		<view class="flex alcenter around pt15">
				 			 <view>
				 		<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote05.png" width="86px" height="27px"></u--image>
				 			<view class="content_title2">快来PICK你心中的最佳跑团</view>
				 			 </view>
				 			 <view>
				 			<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote06.png" width="77px" height="73px"></u--image> 
				 			 </view>
				 		 </view>			 
				 </view>
				 <view class="item">
				 		<view class="flex alcenter around pt15">
				 			 <view>
				 		<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote07.png" width="86px" height="27px"></u--image>
				 			<view class="content_title3">快来PICK你心中的最佳马拉松跑手</view>
				 			 </view>
				 			 <view>
				 			<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote08.png" width="77px" height="73px"></u--image> 
				 			 </view>
				 		 </view>			 
				 </view>
				 <view class="item">
				 			<view class="flex alcenter around pt15">
				 				 <view>
				 			<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote09.png" width="86px" height="27px"></u--image>
				 				<view class="content_title4">快来PICK你心中的最佳马拉松跑手</view>
				 				 </view>
				 				 <view>
				 				<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/vote10.png" width="77px" height="73px"></u--image> 
				 				 </view>
				 			 </view>		 
				 </view>
			 </view>
		</view>

		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handleSearchClick(e) {
			  uni.$u.route('/pages/search/search')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		position: relative;
		background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/voteBg.png');
		background-size: 100% 100%;
		height: 636rpx;
		}
		.Citem{
			position: absolute;
		     top: 560rpx;
			 left:5%;
		     width: 90%;
			 .item{
				 width: 100%;
				 height: 200rpx;
				 background: #FFFFFF;
				 border-radius: 22rpx 22rpx 22rpx 22rpx;
				 margin-bottom: 20rpx;
				 .content_title{
					 color: #FE623C;
					 font-size: 28rpx;
					 width: 382rpx;
					 margin-top: 20rpx;
				 }
				 .content_title1{
				 					 color: #FEB34E;
				 					 font-size: 28rpx;
				 					
				 					 margin-top: 20rpx;
				 }
				 .content_title2{
				 					 color: #1AB995;
				 					 font-size: 28rpx;
				 					
				 					 margin-top: 20rpx;
				 }
				 .content_title3{
				 					 color: #FF7948;
				 					 font-size: 28rpx;
				 					 
				 					 margin-top: 20rpx;
				 }
				 .content_title4{
				 					 color: #FE623C;
				 					 font-size: 28rpx;
				 				
				 					 margin-top: 20rpx;
				 }
			 }
		}
</style>