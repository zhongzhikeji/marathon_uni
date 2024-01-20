<template>
	<view>
		<view class="wrapper">
			<u-navbar :auto-back="true" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent" title="投票">
			</u-navbar>
			<view class="ml10 mr10 pb10 mt20">
				<u-search  bgColor='#fff'  searchIconColor='#604EEA' placeholder="搜索名称"
					disabled :show-action="false" @click="handleSearchClick"></u-search>
			</view>
		</view>
	  
		<view class=" mt10 ml10 mr10 mb40" style="background-color: #FAF5F0;">
			<view class="flex center">
			<u-tabs :list="list" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
			          color: '#EB3D74',
			          fontWeight: 'bold',
					  fontSize:'16px',
			          transform: 'scale(1.05)',
					 
			      }" :inactiveStyle="{
			          color: '#606266',
			          transform: 'scale(1)'
			      }" itemStyle="padding-left: 40px; padding-right: 40px; height: 50px;">
			</u-tabs>

			</view>

		</view>
		<view class=" pt40 pb20">
			<view class="inser">
				<view  class="center  bg_1" style="height: 150px;">
					<view class="arice">
						<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="110rpx" height="110rpx"></u-image>
					</view>
					<view class="item">
						<u-image shape="circle" src="https://marathon.zznet.live/file/uploadPath/image/home/rankbg05.png" width="84rpx" height="95rpx"></u-image>
					</view>
					<view class="info">
						<view class="ft12 cl-6A ftw600">成都赛区</view>
						<view class="ft16 ftw600 mt5 cl-6A mb5">张三风</view>
					<view  style="width: 120rpx;">
					<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
					</view>
						<view class="mt5 ft12 cl-partner">2394 票</view>
					</view>
					
				</view>
				<view style="height: 165px;" class="center bg_2">
					<view class="arice01">
						<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="110rpx" height="110rpx"></u-image>
					</view>
				<view class="item">
					<u-image shape="circle" src="https://marathon.zznet.live/file/uploadPath/image/home/rankbg04.png" width="94rpx" height="108rpx"></u-image>
				</view>
					<view class="info" style="margin-top: 45%;">
						<view class="ft12 cl-d9 ftw600">重庆赛区</view>
						<view class="ft16 ftw600 mt5 mb5 cl-d9">刘志伟</view>
						<view  style="width: 120rpx;">
						<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
						</view>
						<view class="mt5 ft12 cl-partner">2394 票</view>
					</view>
				</view>
				<view style="height: 135px;" class="center bg_3">
					<view class="arice02">
						<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="110rpx" height="110rpx"></u-image>
					</view>
				<view class="item" style="position:absolute;left:40px;top:-3px">
					<u-image shape="circle" src="https://marathon.zznet.live/file/uploadPath/image/home/rankbg06.png" width="69rpx" height="78rpx"></u-image>
				</view>
					<view class="info">
						<view class="ft12 ftw600 cl-d9">北京赛区</view>
						<view class="ft16 ftw600 mt2 mb5 cl-d9">王羲之</view>
						<view  style="width: 120rpx;">
						<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
						</view>
						<view class="mt5 ft12 cl-partner">2394 票</view>
					</view>
				</view>
			</view>

		</view>
	
	  <view class="bg-w pt10 pb10 mt10 ml10 mr10 radis">
		  <view class="ml20 mr20  ">
			<view class="flex alcenter space ">
				<view class="flex alcenter">
					<view>4</view>
					<view class="flex alcenter">
						<view style="width: 100rpx;" class="ml20">
							<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="102rpx" height="102rpx"></u-image>
						</view>
						<view class="ml15">
							<view class="ft16 ftw600 ">李二哈</view>
							<view class="cl-6A">成都赛区</view>
						</view>
					</view>
				
				
				</view>
				<view class="flex cloum alcenter">
					<view  class="listBtn">
					投票
					</view>
					<view class="mt5 ft12">2394 票</view>
				</view>
			</view>
		  </view>
	  </view>
	  <view class="bg-w pt10 pb10 mt10 ml10 mr10 radis">
	  		  <view class="ml20 mr20 ">
	  			<view class="flex alcenter space ">
	  				<view class="flex alcenter">
	  					<view>5</view>
	  					<view class="flex alcenter">
	  						<view style="width: 100rpx;" class="ml20">
	  							<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="102rpx" height="102rpx"></u-image>
	  						</view>
	  						<view class="ml15">
	  					<view class="ft16 ftw600 ">李二哈</view>
	  					<view class="cl-6A">成都赛区</view>
	  						</view>
	  					</view>
	  				
	  				
	  				</view>
	  				<view class="flex cloum alcenter">
	  					<view  class="listBtn">
	  				   投票
	  					</view>
	  					<view class="mt5 ft12">2394 票</view>
	  				</view>
	  			</view>
	  		  </view>
	  </view>
	<view class="bg-w pt10 pb10 mt10 ml10 mr10 radis">
			  <view class="ml20 mr20 ">
				<view class="flex alcenter space ">
					<view class="flex alcenter">
						<view>6</view>
						<view class="flex alcenter">
							<view style="width: 100rpx;" class="ml20">
								<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="102rpx" height="102rpx"></u-image>
							</view>
							<view class="ml15">
						<view class="ft16 ftw600 ">李二哈</view>
						<view class="cl-6A">成都赛区</view>
							</view>
						</view>
					
					
					</view>
					<view class="flex cloum alcenter">
						<view  class="listBtn">
					   投票
						</view>
						<view class="mt5 ft12">2394 票</view>
					</view>
				</view>
			  </view>
	</view>
	   <view style="height: 200rpx;"></view>
	  <view class="footer">
		  <view class="flex alcenter">
			  <view class="mr20">
				 	  <u-icon label="分享" size="30" name="share" labelPos='bottom' color="#EB3D74"></u-icon> 
			  </view>
		
			 
			  	 <u-button  color='#EB3D74' style="color:#fff;height: 45px;border-radius: 12rpx;" >我要报名</u-button>
			 
		  </view>
		
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
				list: [{
						name: '人气排名'
					},
					{
						name: '热搜排名'
					}
				]
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper{
		background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/ranktitle.png');
		background-size: 100% 100%;
		height: 454rpx;
	}
	.inser {
		display: flex;
		flex-flow: wrap-reverse;
		justify-content: space-between;
		margin: 0 40rpx;
		.center{
			

			flex: 1;
			padding-bottom: 20rpx;
			position: relative;
		}
		.bg_1{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/rankbg02.png');
					background-size: 100% 100%;
		}
		.bg_2{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/rankbg01.png');
					background-size: 100% 100%;
		}
		.bg_3{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/rankbg03.png');
					background-size: 100% 100%;
		}
		.item{
			position: absolute;
			top: -10px;
			left: 32px;
		}
		.arice{
			position: absolute;
			top: -60px;
			left: 24px;
			z-index: 999;
		}
		.arice01{
			position: absolute;
			top: -57px;
			left: 28px;
			z-index: 999;
		}
		.arice02{
			position: absolute;
			top: -55px;
			left: 31px;
			z-index: 999;
		}
		.info{
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			margin-top: 35%;
			.boxBtn{
				width: 128rpx;
				height: 54rpx;
				background: linear-gradient(180deg, #EB3D74 0%, #F23BBB 100%);
				box-shadow: 0rpx 0rpx 12rpx 2rpx rgba(238,60,144,0.31);
				border-radius: 36rpx;
				line-height: 54rpx;
				color: #fff;
				text-align: center;
			}
		}
	}
	.listBtn{
		width: 112rpx;
		height: 48rpx;
		background: rgba(235,61,116,0);
		border-radius: 36rpx;
	    color: #EB3D74;
		text-align: center;
        line-height: 48rpx;
		border: 1rpx solid #EB3D74;
	}
	.footer{
		position: fixed;
		bottom: 0;
		background-color: #fff;
		border-radius: 34rpx 34rpx 0rpx 0rpx;
		box-shadow: 0rpx -6rpx 40rpx 2rpx rgba(0,0,0,0.1);
		padding: 40rpx;
		width: 100%;
	}
</style>