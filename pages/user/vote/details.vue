<template>
	<view>
		<view class="flex space alcenter ml20 mr20 mt20">
			<view>
				<view class="ft20 ftw600 mb10">人气跑王</view>
				<view class="ft14">快来PICK你心中的最佳马拉松跑手</view>
			</view>
			<view>
				<u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="200rpx" height="150rpx"></u-image>
			</view>
		</view>
		<view class="bg-w mt20">
			<view class="flex center">
				<u-tabs :list="list" @click="click"
					itemStyle="padding-left: 30px; padding-right: 30px; height:44px"></u-tabs>

			</view>

		</view>
		<view class="bg-w pt30 pb20">
			<view class="inser">
				<view  class="center" style="height: 150px;">
					<view class="item">
						<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="110rpx" height="110rpx"></u-image>
					</view>
					<view class="info">
						<view class="ft12">成都赛区</view>
						<view class="ft18 ftw600 mt5">张三风</view>
						<view  style="width: 120rpx;">
						<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
						</view>
						<view class="mt5 ft12">2394 票</view>
					</view>
					
				</view>
				<view style="height: 165px;" class="center">
					<view class="item">
						<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="120rpx" height="120rpx"></u-image>
					</view>
					<view class="info">
						<view class="ft12">成都赛区</view>
						<view class="ft18 ftw600 mt5">王文超</view>
						<view  style="width: 120rpx;">
						<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
						</view>
						<view class="mt5 ft12">2394 票</view>
					</view>
				</view>
				<view style="height: 135px;" class="center">
					<view class="item">
						<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="120rpx" height="120rpx"></u-image>
					</view>
					<view class="info">
						<view class="ft12">成都赛区</view>
						<view class="ft18 ftw600 mt2 mb2">李二哈</view>
						<view  style="width: 120rpx;">
						<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
						</view>
						<view class="mt5 ft12">2394 票</view>
					</view>
				</view>
			</view>

		</view>
	
	  <view class="bg-w pt10 pb10 mt20">
		  <view class="ml20 mr20  ">
			<view class="flex alcenter space ">
				<view class="flex alcenter">
					<view>4</view>
					<view class="flex alcenter">
						<view style="width: 100rpx;" class="ml20">
							<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="100rpx" height="110rpx"></u-image>
						</view>
						<view class="ml15">
							<view class="ft18 ftw600">李二哈</view>
							<view>成都赛区</view>
						</view>
					</view>
				
				
				</view>
				<view class="flex cloum alcenter">
					<view  style="width: 120rpx;">
					<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
					</view>
					<view class="mt5 ft12">2394 票</view>
				</view>
			</view>
		  </view>
	  </view>
	  <view class="bg-w pt10 pb10 mt20">
	  		  <view class="ml20 mr20  ">
	  			<view class="flex alcenter space ">
	  				<view class="flex alcenter">
	  					<view>5</view>
	  					<view class="flex alcenter">
	  						<view style="width: 100rpx;" class="ml20">
	  							<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="100rpx" height="110rpx"></u-image>
	  						</view>
	  						<view class="ml15">
	  							<view class="ft18 ftw600">李二哈</view>
	  							<view>成都赛区</view>
	  						</view>
	  					</view>
	  				
	  				
	  				</view>
	  				<view class="flex cloum alcenter">
	  					<view  style="width: 120rpx;">
	  					<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
	  					</view>
	  					<view class="mt5 ft12">2394 票</view>
	  				</view>
	  			</view>
	  		  </view>
	  </view>
	  <view class="bg-w pt10 pb10 mt20">
	  		  <view class="ml20 mr20  ">
	  			<view class="flex alcenter space ">
	  				<view class="flex alcenter">
	  					<view>6</view>
	  					<view class="flex alcenter">
	  						<view style="width: 100rpx;" class="ml20">
	  							<u-image shape="circle" src="https://cdn.uviewui.com/uview/album/1.jpg" width="100rpx" height="110rpx"></u-image>
	  						</view>
	  						<view class="ml15">
	  							<view class="ft18 ftw600">李二哈</view>
	  							<view>成都赛区</view>
	  						</view>
	  					</view>
	  				
	  				
	  				</view>
	  				<view class="flex cloum alcenter">
	  					<view  style="width: 120rpx;">
	  					<u-button shape='circle' size="mini"  color='#DA1984' style="color:#fff;height: 25px;" >投票</u-button>
	  					</view>
	  					<view class="mt5 ft12">2394 票</view>
	  				</view>
	  			</view>
	  		  </view>
	  </view>
	  <view class="footer">
		  <view class="flex alcenter">
			  <view class="mr20">
				 	  <u-icon label="分享" size="30" name="share-square" labelPos='bottom'></u-icon> 
			  </view>
		
			 
			  	 <u-button  color='#DA1984' style="color:#fff;height: 45px;" >我要报名</u-button>
			 
		  </view>
		
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
	.inser {
		display: flex;
		flex-flow: wrap-reverse;
		justify-content: space-between;
		margin: 0 40rpx;
		.center{
			border: 1px solid #f40;
			width:100px;
			padding-bottom: 20rpx;
			position: relative;
		}
		.item{
			position: absolute;
			top: -25px;
			left: 20px;
		}
		.info{
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			margin-top: 40%;
		}
	}
	.footer{
		position: fixed;
		bottom: 0;
		background-color: #fff;
		padding: 40rpx;
		width: 100%;
	}
</style>