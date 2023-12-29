<template>
	<view>
		<view class="wrapper">
			<view>
				<u-navbar :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent" title="签到">

				</u-navbar>
			</view>
			<view class="ml10 mr10 pb10 mt20">
				<view class="flex space alcenter">
					<view class="flex alcenter">
						<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/nl.png"
							width="22px" height="28"></u--image>
						<text class="cl-eb ft28 ftw600 ml5">8544</text>
					</view>
					<view class="flex">
						<view class="boxBtn mr20">兑换奖励</view>
						<view class="boxBtn">去抽奖</view>
					</view>
                    
				</view>
				<view class="flex alcenter mt5">
					<view class="ft16 ftw600 mr5">我的能量值</view>
					<view class="flex ft12 col">
						<text>查看明细</text>
						<u-icon name="arrow-right" size="14" color="#B8A8A8"></u-icon>
					</view>
				</view>
				<view class="col mt5">抵扣现金，换直通名额，抽奖福利</view>
			</view>
	<view class="centter">
           	<view class="item1">
			  <view>
				  <view class="flex alcenter space">
					<view>
						<view class="flex">
							<view class="cl-placeholder">已签到：</view>
							<view>4天</view>
						</view>
						<view class="mt5">连续签到30天能量翻倍奖励</view>
					</view>
					<view class="flex">
						<view class="cl-placeholder">提醒我：</view>
						<view>
							<u-switch v-model="value" @change="change" size="16"  activeColor="#31D0C8"></u-switch>
						</view>
					</view>
					<view class="btn">签到</view>
				  </view>
				  <view>11</view>
			
			  </view>
			  <view></view>
			  <view></view>
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
				value:''
			}
		},
		methods:{
			change(e) {
				console.log('change', e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
        position: relative;
		background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/signln.png');
		background-size: 100% 100%;
		height: 400rpx;
       .col{
		   color: #B8A8A8;
	   }
	   .boxBtn{
		   padding: 15rpx 25rpx;
		   font-weight: bold;
		    color: #fff;
		   background: linear-gradient(180deg, #FF7E37 0%, #FB2D45 100%);
		   box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(252,67,53,0.84);
		   border-radius: 36rpx;
	   }
	}
	.centter{
		position: absolute;
	   width:95%;
	   margin-left: 2%;
	   
	   
		.item1{
			  border-radius: 12rpx;
			background-color: #fff;
			padding: 20rpx;
			.btn{
				color: #fff;
				padding: 12rpx 30rpx;
				background: linear-gradient(180deg, #EB3D74 0%, #F23BBB 100%);
				box-shadow: 0rpx 0rpx 12rpx 2rpx rgba(238,60,144,0.31);
				border-radius: 36rpx 36rpx 36rpx 36rpx;
			}
		}
	}
</style>