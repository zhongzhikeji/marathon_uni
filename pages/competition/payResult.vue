<template>
	<view>
		<view class="wrapper">
			<view>
				<u-navbar  :placeholder='true' :fixed="false" bgColor="transparent">
			        <view slot='left'>
						<view class="flex alcenter">
							<u-icon name="arrow-left" color="#000" size="18" @click="onCompetition"></u-icon>
							<view class="ft18 cl-w ml5">2023摇滚马拉松洛阳站</view>
						</view>
						
					</view>
				</u-navbar>
			</view>
		<view class="ml10 mr10 mt20">
			<u-notice-bar :text="text1" bgColor='#FFEEF3' color='#EB3D74' style="border-radius: 20px;" mode='link'></u-notice-bar>
		</view>
		<view class="ml40 mr40 mt40">
			<view class="flex">
				<view class="flex cloum alcenter ">
					<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay2.png"
						width="20px" height="20px"></u--image>
						<view class="nborder"></view>
				</view>
				<view class="ml15 cl-w ftw600">
					<view class="ft18 ">支付成功</view>
					<view>实付￥160.00元</view>
					<view>支付之后因个人原因不支持退款</view>
				</view>
			</view>
		<view class="flex">
			<view class="flex cloum alcenter ">
				<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay3.png"
					width="20px" height="20px"></u--image>
					<view class="nborder"></view>
			</view>
			<view class="ml15 cl-w ftw600">
				<view class="ft18 ">等待抽签</view>
				<view>本场赛事报名流程需要抽签</view>
				<view>预计2023年12月20日公布结果</view>
			</view>
		</view>
			<view class="flex">
				<view class="flex cloum alcenter ">
					<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay10.png"
						width="20px" height="20px"></u--image>
						<view class="nborder" style="border: none;height: 50px;"></view>
				</view>
				<view class="ml15 cl-w ftw600">
					<view class="ft18 " style="color: #AEB0BE;">报名成功</view>
					<view>报名尚未成功，请注意关注活动通知消息！</view>
				
				</view>
			</view>
			<u-line dashed color="#E1DDDD"></u-line>
			<view class="flex around mt10 alcenter">
				<view class="bg-w pl10 pr10" style="color: #ff0000;">报名有奖</view>
				<view class="cl-w">你有一次抽奖机会</view>
				<view class="qcj">去抽奖</view>
			</view>
			<view class="flex  mt10 space mt30">
				<view class="cbtn1">查看订单</view>
				<view>
					<view class="cbtn2">装备特惠</view>
					<view class="cl-w ft12 text-center mt5">轻松赚回报名费</view>
				</view>
			</view>
		
		</view>
		<view class="ml10 mr10 mt10">
			<view class="item1">
				<view class="flex space ">
					<view class="flex ">
						<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay4.png"
							width="42px" height="42px"></u--image>
							<view class="flex cloum space ml10">
								<view>优惠券到账</view>
								<view class="cl-eb">￥2000</view>
							</view>
					</view>
					<view class="flex cloum alcenter">
						<view class="pdbtn">买装备</view>
						<view class="cl-placeholder ft12 mt5">轻松赚回报名费</view>
					</view>
				</view>
				
			</view>
			<view class="item1 mt10">
				<view class="flex space ">
					<view class="flex ">
						<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay5.png"
							width="42px" height="42px"></u--image>
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
			<view class="footer">
				<view class="flex alcenter space">
					<view class="flex cloum alcenter">
						<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay6.png"
							width="42px" height="42px"></u--image>
							<view class="mt5">联系客服</view>
					</view>
					<view class="flex cloum alcenter">
						<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay7.png"
							width="42px" height="42px"></u--image>
							<view class="mt5">福利社群</view>
					</view>
						<view class="flex cloum alcenter">
						<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay8.png"
							width="42px" height="42px"></u--image>
							<view class="mt5">常见问题</view>
					</view>
						<view class="flex cloum alcenter">
						<u--image :showLoading="true"  src="https://marathon.zznet.live/file/uploadPath/image/competition/pay9.png"
							width="42px" height="42px"></u--image>
							<view class="mt5">证照信息</view>
					</view>
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				text1: '添加客服微信联系方式，及时获取一手赛事信息'
			}
		},
		methods:{
			onCompetition(){
				uni.switchTab({
					url:'/pages/competition/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper{
		position: relative;
		background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/pay1.png');
		background-size: 100% 100%;
		height: 1100rpx;
		.nborder {
		border-left: 2px solid #fff;
		height: 140rpx;
		
     
	}
	.qcj{
			   background-color: #fff;
			   border-radius: 36rpx;
			padding: 10rpx 20rpx;
			font-size: 24rpx;
			text-align: center;
			   color: #EB3D74;
	}
	.cbtn1{
		width: 200rpx;
		height: 60rpx;
		line-height: 60rpx;
		color: #fff;
		font-weight: 600;
		border: 1rpx solid #FFFFFF;
		border-radius: 36rpx;
		text-align: center;
 	}
	.cbtn2{
		background-color: #fff;
		border-radius: 36rpx;
		width: 200rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #FF0000;
		font-weight: bold;
	}
	.item1{
		border-radius: 12rpx;
		background-color: #fff;
		padding: 30rpx 20rpx;
		.pdbtn{
			width: 128rpx;
			height: 54rpx;
			background-color: #fff;
			border: 1rpx solid #EB3D74;
			border-radius: 36rpx;
			color:#EB3D74 ;
			text-align: center;
			line-height: 54rpx;
		}
	}
	.footer{
		position: fixed;
		bottom: 40rpx;
		width: 80%;
		margin-left: 7%;
	}
	}
</style>