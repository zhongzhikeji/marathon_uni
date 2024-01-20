<template>
	<view>
		<u-navbar bgColor='#f5f5f5' title="查询结果" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" :autoBack="true">
		</u-navbar>
		<view class="reponse">
			<view class="flex center mt10">
				<u--image :showLoading="true" src="https://marathon.zznet.live/file/uploadPath/image/home/resubg.png"
					width="129px" height="118px"></u--image>
			</view>
			<view class="ml5 mr5">
				<view class="item">
					<view class="flex space  pt10 pb10 ml40 mr40">
						<view>姓名：
						<text class="ftw600">王治郅</text>
						</view>
						
						<view class="sub">查看完整信息</view>
					</view>
				
				</view>
			<view class="item">
				<view class="flex  pt20 pb20 ml40">
					<view>性别：
					<text class="ftw600">男</text>
					</view>
				 <view></view>
				</view>
			
			</view>
			<view class="item">
				<view class="flex  pt20 pb20 ml15">
					<view>证件号码：
					<text class="ftw600">500381********1323</text>
					</view>
				 <view></view>
				</view>
			
			</view>
			<view class="item">
				<view class="flex  pt20 pb20 ml15">
					<view>参加赛事：：
					<text class="ftw600">2023美林湖马拉松风雨无阻开跑</text>
					</view>
				 <view></view>
				</view>
			
			</view>
			<view class="item">
				<view class="flex  pt20 pb20 ml15">
					<view>参赛项目：
					<text class="ftw600">全程马拉松</text>
					</view>
				 <view></view>
				</view>
			
			</view>
			<view class="item">
				<view class="flex  pt20 pb20 ml15">
					<view>全程马拉松：
					<text class="status">已报满</text>
					</view>
				 <view></view>
				</view>
			
			</view>
			</view>
	

		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.reponse {
		border: 1px solid #fff;
		margin: 40rpx 20rpx;
		background-color: #fff;
		border-radius: 15rpx;
		.item{
			border-bottom: 1px solid #EEEEEE;
			.sub{
				color: #2F2F46;
				font-size: 30rpx;
			}
			.status{
				background: linear-gradient(270deg, #EB3D74 0%, #F23BBB 100%);
				box-shadow: 0rpx 2rpx 20rpx 2rpx rgba(236,61,127,0.26);
				border-radius: 8rpx 8rpx 8rpx 8rpx;
			     padding: 20rpx;
				display: inline-block;
				color: #fff;
				font-weight: bold;
			}
		}

	}
</style>