<template>
	<view>
		<u-navbar :placeholder='true' :fixed="false" bgColor="transparent">
			<view slot='left'>
				<view class="flex alcenter">
					<u-icon name="arrow-left" color="#000" size="18" @click="onCompetition"></u-icon>
					<!-- <view class="ft18 cl-w ml5">{{order_pay_info.spuName}}</view> -->
					<view class="ft18 ml5">{{info.spuName}}</view>
				</view>

			</view>
		</u-navbar>
		<view class="ml10 mr10 ">
			<view class="mt20">
				<u-notice-bar :text="text1" bgColor='#FFEEF3' color='#EB3D74' style="border-radius: 20px;"
					mode='link'></u-notice-bar>
			</view>
			<view class="bg-w mt10 radis">
				<view class="flex alcenter cloum pt10 pb10">
					<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/status1.png" width="77"
						height="77"></u--image>
					<!-- 	<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/status3.png" width="77"
						height="77"></u--image>
					<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/status4.png" width="77"
						height="77"></u--image>
					<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/status5.png" width="77"
						height="77"></u--image>
					<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/status6.png" width="77"
						height="77"></u--image> -->
					<view class="ft18 ftw600 pt20">缴费成功。请等待抽签结果</view>
					<!-- <view class="ft18 ftw600 pt20">报名失败，已退款</view>
					<view class="ft18 ftw600 pt20">比赛结束</view>
					<view class="ft18 ftw600 pt20">兑换名额排队中，正在配对</view>
					<view class="ft18 ftw600 pt20">报名排队中，正在助力</view> -->
					<view class="ft12 cl-af pt15">请注意关注活动通知消息！</view>
				</view>

			</view>
			<view class="bg-w radis mt10">
				<view class="ml15 mr15 pt10 pb10">
					<view class="ft12 mb10 cl-partner">活动信息</view>
					<u-line></u-line>
					<view class="ft16 ftw600 mt5 mb5">{{info.spuName}}</view>
					<view class="flex alcenter">
						<u-icon name="clock" color="#EB3D74" size="12"></u-icon>
						<view class="ml5">{{formatDate(info.meetStartTime)}}</view>
					</view>
					<view class="flex alcenter mt5 mb10">
						<u-icon name="map" color="#2D71FF" size="12"></u-icon>
						<view class="ml5">{{info.areaName}}</view>
					</view>
					<u-line></u-line>
					<view class="flex space alcenter mt10 mb10 ml5 mr20">
						<view class="ft14 ftw600">报名组别</view>
						<view class="ft14 cl-partner">{{info.skuName}}</view>
					</view>
					<u-line></u-line>
					<view class="flex mt10">
						<u-icon name="share-square" color="#EB3D74" size="16"></u-icon>
						<view class="ft14 ml5 cl-partner">分享我的报名</view>
					</view>
				</view>
			</view>
			<view class="bg-w radus mt10">
				<view class="ml15 mr15 pt10 pb10">
					<view class="ft12 cl-partner mb10">抽签状态</view>
					<u-line></u-line>
					<view class="mt10 flex alcenter space mb5">
						<view class="ft12 cl-partner">抽签公布时间:</view>
						<view class="ft12 ">2023-02-02</view>
					</view>
					<view class="flex alcenter space">
						<view class="ft12 cl-partner">抽签结果查询:</view>
						<view class="ft12">小程序通知页面查询结果</view>
					</view>
					<view class="ft12 cl-eb text-center mt10">提示: 如未中签，报名费将原路退款</view>
				</view>

			</view>
			<view class="bg-w radus mt10 ">
				<view class="ml15 mr15 pt10 pb10 ft12 cl-partner">
					<view class="ft12  mb10">报名信息</view>
					<u-line></u-line>
					<view v-for="item in info.participatorItems">
						<view class="mt10 mb5">姓名：{{item.name}}</view>
						<view>性别：{{item.gender == 1?'男':'女'}}</view>
					</view>
				
					<view class="mt5 mb10">报名组别：半程马拉松</view>
					<u-line></u-line>
					<view class="flex space mt10 mb10">
						<view>订单金额</view>
						<view style="color: #2F2F46;">￥660</view>
					</view>
					<u-line></u-line>
					<view class="mt10">选手信息</view>
				</view>
			</view>
			<view class="bg-w radus mt10 ">
				<view class="ml15 mr15 pt10 pb10 ft12 cl-partner">
					<view class="mb10">订单信息</view>
					<u-line></u-line>
					<view class="mt10">订单编号：S20231207313513156156163</view>
					<view class="mt5 mb5">支付状态：已支付</view>
					<view>订单金额：￥660</view>
					<view class="mt5 mb5">支付时间：2023-12-07 20:08:12</view>
					<view class="mb10">支付方式：微信</view>
					<u-line></u-line>
					<view class="flex space mt5 mb5">
						<view class="cl-placeholder" @click="refund">申请退款</view>
						<view>退款条件</view>
					</view>
				</view>
			</view>
			<view class="bg-w radis mt10">
				<view class="flex space mr15 ml15 pt15 pb15">
					<view class="flex ">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/pay4.png" width="42px"
							height="42px"></u--image>
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
						<view class="pdbtn" @click="$u.route('/page_home/lottery-draw/lottery-draw')">去抽奖</view>
						<view class="cl-placeholder ft12 mt5">获得能量值可抽奖</view>
					</view>
				</view>
			</view>
			<view class="mt30 pb20 ml20 mr20">
				<view class="flex alcenter space">
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
		<view class="footer">
			<view class="btn">报名已完成</view>
		</view>
		<u-popup :show="show" mode="center" @close="close" @open="open" round='6'>
			<view class="mt30 ml20 mr20 popup pb15">
				<view class="flex alcenter cloum ">
					<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/status7.png" width="81"
						height="81"></u--image>
					<view class="ftw600 mt10 ft16 mb10">重要提示</view>
					<view class="flex cloum flexWrap">
						<text>1.普通用户根据《竞赛规程》《报名须知》规定：</text>
						<text class="cl-eb mt5 mb5">缴费之后因个人原因不支持退款。</text>
					</view>
					<view class="flex cloum flexWrap">
						<text>2.金牌级别VIP会员在2024年2月1日时间前可申</text>
						<view class="mt5 mb5">
							请付费取消
							<text class="cl-eb">需收取10%手续费。</text>
						</view>
					</view>
					<view class="flex cloum flexWrap"> 
					<view>3.白金级别以上VIP会员可在2024年3月1日前</view>
					<text class="cl-eb mt5">免费取消。</text>
					</view>
					<view class="flex space mt15">
						<view class="btn1" @click="close">返回</view>
						<view class="btn2">申请退款</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	  import dayjs from '@/plugin/dayjs/dayjs.min.js';
	    import * as Util from '@/utils/util.js';
	import * as Api from '@/api/competition/list.js'
	export default {
		data() {
			return {
				text1: '添加客服微信联系方式，及时获取一手赛事信息',
				show: false,
				id:'',
				info:''
			}
		},
		onLoad(e) {
			if(e.order_id){
			 this.getOprderList(e.order_id)
			}
		},
		methods: {
			onCompetition(){
				 uni.navigateBack({ 
				        delta: 1 
				      }); 	
			},
			getOprderList(id){
				Api.getOrderDetails(id).then(res=>{
					this.info = res.data
				})
			},
			refund() {
				this.show = true
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
		formatDate(date) {
			return dayjs(date).format("YYYY-MM-DD");
		},
			fen2yuan(price) {
			  return Util.fen2yuan(price)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		background-color: #fff;
		width: 100%;
		height: 188rpx;
		border-radius: 34rpx 34rpx 0rpx 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		// box-shadow: 0rpx -6rpx 40rpx 2rpx rgba(0,0,0,0.1);
		.btn {
			width: 100%;
			margin: 0rpx 20rpx;
			height: 94rpx;
			line-height: 94rpx;
			text-align: center;
			background: #8F91A1;
			color: #fff;
			font-size: 30rpx;
			font-weight: bold;
			box-shadow: 0rpx 0rpx 22rpx 2rpx #8F91A1;
			border-radius: 12rpx;
		}
	}

	.popup {
		width: 620rpx;

		.btn1 {
			width: 290rpx;
			height: 94rpx;
			background: rgba(125, 144, 171, 0);
			border-radius: 12rpx;
			border: 1rpx solid #D6D6D6;
			line-height: 94rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: bold;
			margin-right: 25rpx;
		}

		.btn2 {
			width: 290rpx;
			height: 94rpx;
			line-height: 94rpx;
			background: #EB3D74;
			text-align: center;
			font-size: 30rpx;
			font-weight: bold;
			color: #fff;
			box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(180, 5, 60, 0.42);
			border-radius: 12rpx 12rpx 12rpx 12rpx;

		}
		
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
</style>