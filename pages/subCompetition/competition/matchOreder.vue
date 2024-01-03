<template>
	<view>
		<u-navbar :placeholder='true' :fixed="false" bgColor="transparent">
			<view slot='left'>
				<view class="flex alcenter">
					<u-icon name="arrow-left" color="#000" size="18" @click="onCompetition"></u-icon>
					<!-- <view class="ft18 cl-w ml5">{{order_pay_info.spuName}}</view> -->
					<view class="ft18 ml5">标题</view>
				</view>
		
			</view>
		</u-navbar>
		<view class="ml10 mr10 ">
			<view class="mt20">
				<u-notice-bar :text="text1" bgColor='#FFEEF3' color='#EB3D74' style="border-radius: 20px;"
					mode='link'></u-notice-bar>
			</view>
		    <view class="bg-w mt20 radis">
				<view class="flex alcenter cloum pt10 pb10">
					<u--image  src="https://marathon.zznet.live/file/uploadPath/image/competition/status1.png"
						width="77" height="77" ></u--image>
					<view class="ft18 ftw600 pt20">缴费成功。请等待抽签结果</view>
					<view class="ft12 cl-af pt15">请注意关注活动通知消息！</view>
				</view>
			
			</view>
			<view class="bg-w radis mt10">
				<view class="ml10 mr10 pt10 pb10">
					<view>活动信息</view>
					<u-line></u-line>
					<view>2023摇滚马拉松洛阳站</view>
					<view class="flex alcenter">
						<u-icon name="clock" color="#EB3D74" size="11"></u-icon>
						<view>2022-02-21 14:00</view>
					</view>
					<view class="flex alcenter">
						<u-icon name="map" color="#2D71FF" size="11"></u-icon>
						<view>福建省厦门市环岛</view>
					</view>
						<u-line></u-line>
						<view class="flex space alcenter">
							<view>报名组别</view>
							<view>半程马拉松</view>
						</view>
						<u-line></u-line>
						<view class="flex">
							<u-icon name="share-square" color="#EB3D74" size="12"></u-icon>
							<view>分享我的报名</view>
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
		}
	}
</script>

<style>
</style>