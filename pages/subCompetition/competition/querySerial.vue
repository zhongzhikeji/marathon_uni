<template>
	<view>
		<u-navbar bgColor='#f5f5f5' title="参赛号码" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" :autoBack="true">
		</u-navbar>
			<u-notice-bar icon="warning-fill" :text="text1" bgColor='#FFEEF3' color='#EB3D74' ></u-notice-bar>
			<view class="ml10 mr10 mt20">
				<view class="flex cloum alcenter">
					<view >2023 厦门日出女子跑</view>
					<view class="mt5 mb5">A12051</view>
					<view >王俊杰</view>
				</view>
				<view class="flex mt20">
					<u-icon name="error-circle-fill"  size="16" color="#DCDCDC"></u-icon>
					<view class="ml5">赛前领物通知请见公众号后续通知文章</view>
				</view>
				<view class="flex space mt10">
				<u--image :showLoading="true" src="https://marathon.zznet.live/file/uploadPath/image/home/serial01.png" width="100px" height="51px" ></u--image>
			<u--image :showLoading="true" src="https://marathon.zznet.live/file/uploadPath/image/home/serial02.png" width="109px" height="51px" ></u--image>
			<u--image :showLoading="true" src="https://marathon.zznet.live/file/uploadPath/image/home/serial03.png" width="109px" height="51px" ></u--image>
				
				</view>
				<view class="bg-w radis mt10">
					<view class="flex space mr15 ml15 pt15 pb15">
						<view class="flex ">
							<u--image :showLoading="true"
								src="https://marathon.zznet.live/file/uploadPath/image/competition/pay5.png" width="42px"
								height="42px"></u--image>
							<view class="flex cloum space ml10">
								<view>能量到账</view>
								<view class="cl-eb">+20</view>
							</view>
						</view>
						<view class="flex cloum alcenter">
							<view class="pdbtn">去抽奖</view>
							<view class="cl-placeholder ft12 mt5">获得能量值可抽奖</view>
						</view>
					</view>
				</view>
			
			</view>
			<view class="footer">
				<view class="flex alcenter around">
					<view class="flex cloum alcenter">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/pay6.png" width="42px"
							height="42px"></u--image>
						<view class="mt5">联系客服</view>
					</view>
					<view class="flex cloum alcenter">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/pay7.png" width="42px"
							height="42px"></u--image>
						<view class="mt5">福利社群</view>
					</view>
					<view class="flex cloum alcenter">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/pay8.png" width="42px"
							height="42px"></u--image>
						<view class="mt5">常见问题</view>
					</view>
					<view class="flex cloum alcenter">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/pay9.png" width="42px"
							height="42px"></u--image>
						<view class="mt5">证照信息</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				text1:'报名后必须关注公众号，避免错过最新通知公告'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		background: #2D71FF;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
		height: 100rpx;
		color: #fff;
		line-height: 100rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.pdbtn {
		width: 128rpx;
		height: 54rpx;
		background-color: #fff;
		border: 1rpx solid #EB3D74;
		border-radius: 36rpx;
		color: #EB3D74;
		text-align: center;
		line-height: 54rpx;
	}
   .footer{
	   position: fixed;
	   bottom: 40rpx;
	   width: 100%;
   }
</style>