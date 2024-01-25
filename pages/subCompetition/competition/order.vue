<template>
	<view>
		<u-navbar :autoBack="true" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent"
			title="信息确认">

		</u-navbar>
		<view class="ml10 mr10">
			<view class="flex space pt10 pb10 bg-w mt10 mb10 pl10 pr10" style="border-radius: 10rpx;">
				<view class="outTime">
					<view class="stepn">1</view>
					<view class="ft14">
						<view>阅读</view>
						<view>规程</view>
					</view>

				</view>
				<view class="outTime">
					<view class="stepn">2</view>
					<view class="ft14">
						<view>参赛</view>
						<view>项目</view>
					</view>

				</view>
				<view class="outTime">
					<view class="stepn">3</view>
					<view class="ft14">
						<view>参赛</view>
						<view>信息</view>

					</view>
				</view>
				<view class="outTime">
					<view class="step">4</view>
					<view class="ft14 cl-eb">

						<view>信息</view>
						<view>确认</view>
					</view>

				</view>
				<view class="outTime">
					<view class="stepn">5</view>
					<view class="ft14">
						<view class="text-center">缴费</view>
						<view>等待抽签</view>

					</view>

				</view>
				<view class="outTime">
					<view class="stepn">6</view>
					<view class="ft14">
						<view>报名</view>
						<view>成功</view>
					</view>

				</view>
			</view>
			<view class="pt10 bg-w radis pl10 pr10 pb30">
				<view>
					<view class=" pt15 pb15 flex  ">
						<view>
							<u--image radius='5' :src="src" width="95px" height="81px"></u--image>
						</view>
						<view class="ml10 flex cloum space">
							<view class="ft14 ftw600" v-if="list.meetSku">{{list.meetSku.name}}</view>

							<view class="ft12 cl-ae">参赛人数：
								<text class="cl-default" v-if="list.memberList">
									{{list.memberList.length}}人
								</text>
							</view>
							<view class="ft16 flex mt2 ftw600" style="color: #EB3D74;" v-if="list.meetSku">
								￥{{list.meetSku.price}}/人
							</view>
						</view>

					</view>
					<u-line></u-line>
					<view class="mt10 flex  space mb10 ml10 mr10">
						<view>
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/nl.png"
									width="16px" height="20px"></u--image>
								<view class="ml5 mr5 ftw600">能量抵扣</view>
								<view class="tab_hy">会员专享</view>
							</view>
							<view class="cl-placeholder mt10 ft14">可用2000点能量值抵扣2块钱</view>
						</view>
						<u-checkbox-group v-model="checkboxValue" @change="checkboxChange" iconPlacement="right">
							<u-checkbox v-for="(item, index) in checkboxList" :key="index" :name="item.disabled"
								shape='circle' activeColor='#EB3D74'>
							</u-checkbox>
						</u-checkbox-group>
					</view>
					<u-line margin="25rpx 0"></u-line>
					<view>
						<view class='flex'>
							<view>邀请码报名</view>
							<view class="cl-placeholder ml20">使用邀请码报名不需要抽签</view>
						</view>
						<view class="mt10">
							<u--input inputAlign='center' border="surround" v-model="value" @change="change"
								:customStyle="{background:'#F2F2F2'}"></u--input>
						</view>
					</view>
					<u-line margin="20rpx 0 0 0"></u-line>
					<view class="mt20">
						<view class="flex end">
							<view>小计：</view>
							<view class="cl-eb ftw600">￥{{list.price}}</view>
						</view>

					</view>
				</view>

			</view>


			<view class="bg-w mt20 ">
				<view class="ml20 mr20  pt20 pb30">
					<view class="flex alcenter">
						<view class="lhder"></view>
						<view class="ft16 ftw600">支付方式</view>
					</view>
					<view class="pb20 pt10">
						<view class="mt10 flex  space mb10">
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/wx.png"
									width="19px" height="18px"></u--image>
								<view class="ml10">微信支付</view>
							</view>
							<u-checkbox-group v-model="checkboxValue1" @change="checkboxChange1" iconPlacement="right">
								<u-checkbox v-for="(item, index) in checkboxList1" :key="index" :name="item.code"
									shape='circle' activeColor='#EB3D74'>
								</u-checkbox>
							</u-checkbox-group>
						</view>
					</view>
					<u-line></u-line>
					<view class="mt20">
						<view class="flex alcenter ft12">
							<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
								width="12px" height="12px"></u--image>
							<view class="ml5">请在<text class="cl-eb ftw600">30分钟内</text>完成支付，否则订单自动取消</view>
						</view>
						<view class="flex mt10 ft12">
							<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
								width="12px" height="12px" style="margin-top: 5px;"></u--image>
							<view class="ml5 cl-eb ftw600">由于比赛报名属于竞赛性质，非普通商品，具有时效性特征，一旦完成支付，不支持退款</view>
						</view>
						<view class="flex alcenter mt10 ft12">
							<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
								width="12px" height="12px"></u--image>
							<view class="ml5">缴费之后不支持退款</view>
						</view>
						<view class="flex alcenter mt10 ft12">
							<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
								width="12px" height="12px"></u--image>
							<view class="ml5">我已关注公众</view>
						</view>
					</view>

				</view>

			</view>
			<u-gap height="40"></u-gap>
		</view>







		<view class="footer">

			<view class=" flex alcenter space">
				<view class="flex ml10 alcenter">
					<view class="ft14 ftw600">总计：</view>
					<view style="color:#F21A6F" class="ft16 ftw600"><text class="ft12">￥</text>{{list.payPrice}}</view>
				</view>

				<view class="mr10">
					<!-- 	<u-button @click="$u.route('/pages/competition/orderConfi')" :customStyle='foterStyle'
						color='#EB3D74' style="font-size: 16px;color:#fff;font-weight: bold;"
						size='large'>提交报名</u-button> -->
					<u-button @click="showPage" :customStyle='foterStyle' color='#EB3D74'
						style="font-size: 16px;color:#fff;font-weight: bold;" size='large'>提交报名</u-button>
				</view>
			</view>
		</view>
		<u-gap height="50"></u-gap>
		<u-popup :show="show" @close="close" @open="open" mode="center" round='6'>
			<view class="u-popup-slot">
				 <view class="flex cloum  mt20 ml30 mr30">
					 <view class="ft18 ftw600 text-center mb20 mt10">确认信息</view>
					 <view class="mt10 mb15">请在<text class="cl-eb">30分钟内</text>完成支付，否则订单自动取消</view>
					 <view class="cl-eb mb10">由于比赛报名属于竞赛性质，非普通商品，具有
时效性特征，一旦完成支付，不支持退款</view>
					 <view class="mb10">缴费之后因个人原因不支持退款</view>
					 <view class="mb10">我已关注公众号</view>
					 <view class="flex mt10">
						 <view class="btn1" @click="show=false">不同意</view>
					<!-- 	 <view class="btn2" @click="$u.route('/pages/subCompetition/competition/payResult')">我已阅读并同意</view> -->
						  <view class="btn2" @click="goPay">我已阅读并同意</view>
					 </view>
				 </view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import * as Api from '@/api/competition/list.js';
	import * as PayOrderApi from '@/api/pay/order.js';
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				foterStyle: {
					width: '400rpx',


				},
				show: false,
				value: '',
				memberIds:[],
				channelCode:'',
				skuId:'',
				 orderId: 0, // 支付单号
				 returnUrl: '', // 调回地址
				list:{},
				checkboxList: [{
				isDeduction: true
					}

				],
				checkboxValue: [],
				checkboxList1: [
					{
				    code: 'wx_lite'
					}

				],
				checkboxValue1: [],
			}
		},
		onLoad(e) {
          if(e.memberIds || e.skuId){

			  this.memberIds = e.memberIds.split(",")
			  this.skuId = e.skuId
		  }
		  this.createOrder()
		},
		methods: {
			createOrder(){
				let data = {
					memberIds:this.memberIds,
					skuId:this.skuId,
					pointStatus:false,
					redeemCode:''  //邀请码
				}
				Api.createSettlement(data).then(res=>{
					this.list = res.data
				})
			},
			goPay(){
				uni.showLoading({
					title: '支付中'
				});
				PayOrderApi.submitOrder({
				  id: this.orderId,
				  channelCode: this.channelCode,
				  returnUrl: this.getPayReturnUrl(),
				  channelExtras: { // TODO 芋艿：等登录接入完成，需要改成动态读取
				    // openid: "ockUAwIZ-0OeMZl9ogcZ4ILrGba0" // wx_pub 微信公众号支付的 openid
				    // openid: "oLefc4g5GjKWHJjLjMSXB3wX0fD0" // wx_lite 微信小程序支付的 openid
            openid: this.$Cache.get('OPENID')
				  }
					}).then(res => {
				  this.handleSubmitOrderResult(res.data);
				}).catch(err => {
				  uni.hideLoading();
				  this.$util.Tips({
				    title: err
				  })
				})
					},
					handleSubmitOrderResult(data) {
					  // 1. 如果已支付、或者已关闭，则直接跳转
					  if (data.status === 10) {
					    this.goReturnUrl('success');
					    return;
					  } else if (data.status === 20) {
					    this.goReturnUrl('close');
					    return;
					  }

					  // 2. 根据 displayMode 模式，进行对应的处理
					  const displayMode = data.displayMode;
					  const displayContent = data.displayContent
					  // 2.1 如果返回的是 URL，则直接跳转
					  if (displayMode === 'url') {
					    window.location = displayContent;
					    return;
					  }
					  // 2.2 如果返回的是 APP，则自定义处理
					  if (displayMode === 'app') {
					    if (this.channelCode === 'wx_pub') {
					      this.handleSubmitOrderResultForWxPub(displayContent)
					      return;
					    }
					    if (this.channelCode === 'wx_lite') {
					      this.handleSubmitOrderResultForWxLite(displayContent)
					      return;
					    }
					  }
					},
			getPayReturnUrl() {

			  return 'http://localhost:8080/pages/subCompetition/competition/paySuccess?order_id=' + this.orderId ;

			},
			/**
			 * 回到业务的 URL
			 *
			 * @param payResult 支付结果
			 *                  ① success：支付成功
			 *                  ② cancel：取消支付
			 *                  ③ close：支付已关闭
			 */
			goReturnUrl(payResult) {
							console.log(payResult,995)
							console.log(this.returnUrl,996)
			  uni.reLaunch({
			    url: this.returnUrl.indexOf('?') >= 0
			      ? this.returnUrl + '&payResult=' + payResult
			      : this.returnUrl + '?payResult=' + payResult
			  })
			},
			checkboxChange(n) {
				console.log('change', n);
			},
			checkboxChange1(n) {
				this.channelCode = n.join('')
				console.log('change', n);
			},
			change(e) {
				console.log('change', e);
			},
			showPage() {
				if(this.channelCode == ''){
					this.$util.Tips({
					  title: '请选择支付方式'
					})
				}else{
					let data = {
							memberIds:this.memberIds,
							skuId:this.skuId,
							pointStatus:false,
							redeemCode:''  //邀请码
						}
						Api.createOrder(data).then(res=>{
							this.orderId = res.data.payOrderId
							this.returnUrl  =`/pages/subCompetition/competition/payResult?order_id=${res.data.id}`

						})
					this.show = true
				}

			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.category {
		background-color: #FFEFF5;

		margin-top: 30rpx;
		border-radius: 6px;
		box-shadow: 0px 4px 3px 2px #E5E5E5;

		.tag {
			color: #fff;
			padding: 10rpx 30rpx;
			background-color: #F98CB6;
			font-size: 24rpx;
			margin-left: 40rpx;

		}
	}

	.player {
		background-color: #EFF6FF;
		margin-top: 40rpx;
		box-shadow: 0px 4px 3px 2px #E5E5E5;
	}

	.order {
		width: 24%;
		background-color: #fff;
		box-shadow: 0px 4px 3px 0px #E5E5E5;
		border-radius: 5px;
	}

	.footer {

		position: fixed;
		bottom: 0rpx;
		background-color: #fff;
		padding: 30rpx 0 20rpx 0;
		width: 100%;
		border-top-left-radius: 34rpx;
		border-top-right-radius: 34rpx;
	}
   .u-popup-slot{
	   width: 684rpx;
	   height: 602rpx;
	   .btn1{
		   border: 1rpx solid #D6D6D6;
		   width: 290rpx;
		   height: 94rpx;
		   line-height: 94rpx;
		   text-align: center;
		   border-radius: 12rpx;
		   font-weight: 600;
		   margin-right: 20rpx;
	   }
	   .btn2{
	   		  background: #EB3D74;
	   		  box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(180,5,60,0.42);
	   		   width: 290rpx;
	   		   height: 94rpx;
	   		   line-height: 94rpx;
			   color: #fff;
	   		   text-align: center;
	   		   border-radius: 12rpx;
	   		   font-weight: 600;
	   }
   }
	.outTime {
		margin: 0 3px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24rpx;

		.step {
			width: 60rpx;
			height: 60rpx;
			background-color: #EB3D74;
			border-radius: 50%;
			text-align: center;
			color: #fff;
			line-height: 60rpx;
			margin-bottom: 10rpx;
		}

		.stepn {
			width: 60rpx;
			height: 60rpx;
			background-color: #E9E9E9;
			border-radius: 50%;
			text-align: center;
			color: #000;
			line-height: 60rpx;
			margin-bottom: 10rpx;
		}
	}

	.tab_hy {
		background-color: #FFF2E5;
		color: #D17E2C;
		font-size: 24rpx;
		padding: 10rpx;
		border-radius: 10rpx 12rpx;
	}

	.lhder {
		width: 10rpx;
		height: 30rpx;
		background: #EB3D74;
		margin-right: 12rpx;
	}
</style>
