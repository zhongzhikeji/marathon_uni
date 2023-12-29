<template>
	<view>
		<viwe class="title">
			<view class="ft12">添加客服微信联系方式，及时获取一手赛事信息</view>
			<view class="ft14"> 去添加 ></view>
		</viwe>
		<view class="flex cloum alcenter center mt40">
			<u--image src='https://marathon.zznet.live/file/uploadPath/img/success.png' width="263rpx"
				height="263rpx"></u--image>
			<view class="mt20 ftw600 mb30">参与抽签成功</view>
		</view>
		<view class="ml25 mb40 ft14">
			<view>抽签结果公布时间：2023-02-02</view>
			<view class="mt20">抽签结果查询：小程序通知页面查询结果</view>
			<view class="mt20">提示：如未中签，报名费将原路退款</view>
		</view>
		<view class="ml25 mr25 ">
			<u-button @click="$u.route('/pages/competition/details')" color='#F9A4C3' style="font-size: 16px;color:#000;font-weight: bold;" size='large'>完成</u-button>
		</view>
		<view class="ml25 mr25 mt25">
			<view class="points">
				<view class="flex alcenter pt10 pb10 ml10 mr10 space">
					<view class="flex">
						<u--image src='https://marathon.zznet.live/file/uploadPath/img/jifen.png' width="85rpx"
							height="85rpx"></u--image>
					<view class="ml10">
						<view class="ft14 cl-w ftw600">积分到账 +20</view>
						<view class="ft14 cl-w">支付成功获得抽奖积分</view>
					</view>
					</view>
				
					<view >
						<u-button shape="circle" style="font-weight: bold;">去抽奖</u-button>
					</view>
				</view>
			
			</view>
			<view class="points mt20">
				<view class="flex alcenter pt10 pb10 ml10 mr10 space">
					<view class="flex">
						<u--image src='https://marathon.zznet.live/file/uploadPath/img/juan.png' width="85rpx"
							height="85rpx"></u--image>
					<view class="ml10">
						<view class="ft14 cl-w ftw600">优惠卷到账 ￥2000 </view>
						<view class="ft14 cl-w">轻松赚回报名费</view>
					</view>
					</view>
					<view >
						<u-button shape="circle" style="font-weight: bold;">去抽奖</u-button>
					</view>
				</view>
			
			</view>
		</view>
		<view class="flex around mt20">
		<u-icon labelPos='bottom' label="联系客服" size="40" name="https://marathon.zznet.live/file/uploadPath/img/kefu.png"></u-icon>
		<u-icon labelPos='bottom' label="福利社群" size="40" name="https://marathon.zznet.live/file/uploadPath/img/fuli.png"></u-icon>
		<u-icon labelPos='bottom' label="常见问题" size="40" name="https://marathon.zznet.live/file/uploadPath/img/fankui.png"></u-icon>
		</view>
		<view class="text-center mt20 ft14">证照信息</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFF6EC;
		padding: 20rpx 15rpx;
	}

	.points {
		background-color: #F7A17A;
		border-radius: 20rpx;
	}
</style>