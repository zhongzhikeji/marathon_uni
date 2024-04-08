<template>
	<view>
    <view class='order-details'>
     <u-navbar bgColor='transparent' title="退款详情" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" :autoBack="true">
     </u-navbar>
	 <view class="ml10 mr10">
		 <view class="flex alcenter">
			 <view class="mr10">
				<u--image :showLoading="true"
				 	src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/order_tk.png" width="23rpx"
				 	height="30rpx"></u--image> 
			 </view>
			
			<view class="ft16"  v-if="afterSale.status === 10">等待商家处理</view>
			<view class="ft16"  v-if="afterSale.status === 20">请退货并填写物流信息</view>
			<view class='ft16' v-if="afterSale.status === 30">退货退款申请待商家处理</view>
			<view class='ft16' v-if="afterSale.status === 40">等待退款</view>
			<view class='ft16' v-if="afterSale.status === 50">退款成功</view>
			<view class='ft16' v-if="afterSale.status === 61">退款关闭</view>
			<view class='ft16' v-if="afterSale.status === 62">商家不同意退款申请，拒绝原因：{{ afterSale.auditReason }}</view>
			<view class='ft16' v-if="afterSale.status === 63">商家拒绝收货，不同意退款，拒绝原因：{{ afterSale.auditReason }}</view>  
		 </view>
	   <view class="flex mt5 ft12 mb15">
		   <view class="cl-ae"> 你的申请已经提交，还剩</view>
		   <view class="cl-eb">2天23时14分</view>
	   </view>
	   <view class="bg-w pl10  pt10 pb10 radis">
		   <view class="mb10">您已成功发起退款申请，请耐心等待商家处理</view>
		   <u-line></u-line>
		   <view class="ft12 mt10">·商家同意后，请按照给出的退货地址退货，并请记录退货运单号</view>
		   <view class="ft12 mt10 mb10">·如商家拒绝，您可以修改申请后再次发起，商家会重新处理</view>
		   <view class="ft12">·如商家超时未处理,退货申请将达成，请按系统给出的退货地址退货</view>
		   <view class="flex end pr10 mt10">
			   <view class="btn_item mr10" v-if="[10, 20, 30].includes(afterSale.status)" @click.stop="cancelAfterSale">撤销申请</view>
			   <view class="btn_item">修改申请</view>
		   </view>
	   </view>
	 </view>
      <view>
		
        <view class='bg-w ml10 mr10 mt10 radis'>
			<view class="pl10 pr10 pt10 pb10">
				<view class="flex alcenter">
					<view class="shu mr10"></view>
					<view class="ft16">退款信息</view>
				</view>
				<view class="mt10 flex">
				<view class='pictrue'>
				  <image :src='afterSale.picUrl' />
				</view>
				<view class="flex cloum ml15 flex1 space">
					<view>{{afterSale.spuName}}</view>
					<view class="cl-ae"> <text v-for="property in afterSale.properties" style="padding-right: 2px">{{property.valueName}}</text></view>
					<view class="flex space alcenter ">
						<view class="cl-eb ft12">￥ 
						<text class="ft16 ftw600">{{ fen2yuan(afterSale.refundPrice) }}</text>
						</view>
						<view>x{{afterSale.count}}</view>
					</view>
				</view>
				
				</view>
			</view>
        </view>

        <view class='wrapper borRadius14 ml10 mr10' >
			<view class='item acea-row row-between'>
			  <view>退款原因：</view>
			  <view class='conter'>{{ afterSale.applyReason }}</view>
			</view>
          <view class='item acea-row row-between'>
            <view>退款金额：</view>
            <view class='conter'>￥ {{ fen2yuan(afterSale.refundPrice) }}</view>
          </view>
		  <view class='item acea-row row-between'>
		    <view>申请件歀</view>
		    <view class='conter'>{{ afterSale.count }}件</view>
		  </view>
		  <view class='item acea-row row-between'>
		    <view>申请时间：</view>
		    <view class='conter'>{{ formatDate(afterSale.createTime) }}</view>
		  </view>
		  <view class='item acea-row row-between'>
		    <view>申请编号：</view>
		    <view class='conter'>{{ afterSale.no }}</view>
		  </view>
          <view class='item acea-row row-between'>
            <view>售后方式：</view>
            <view class='conter'>{{ afterSale.way === 10 ? '仅退款' : '退款退货' }}</view>
          </view>
       
	
		
	
        </view>

      </view>

      <view>
        <!-- 操作区域 -->
        <view class='footer acea-row row-right row-middle' v-if="[20].includes(afterSale.status)">
          <view class="qs-btn"  @click.stop="cancelAfterSale">
            填写退货信息
          </view>
     <!--    <view class="qs-btn" v-if="[10, 20, 30].includes(afterSale.status)" @click.stop="cancelAfterSale">
            撤销申请
          </view> -->
        </view>
      </view>
    </view>
	</view>
</template>
<script>
	import { toLogin } from '@/libs/login.js';
	import { mapGetters } from "vuex";
  import * as AfterSaleApi from '@/api/trade/afterSale.js';
  import dayjs from '@/plugin/dayjs/dayjs.min.js';
  import * as Util from '@/utils/util.js';
  export default {
		data() {
			return {
        id: 0, // 售后编号
        afterSale: {}, // 售后信息
			};
		},
		computed: mapGetters(['isLogin']),
		watch:{
			isLogin:{
				handler: function(newV, oldV) {
					if (newV) {
						this.getAfterSale();
					}
				},
				deep:true
			}
		},
		 onLoad: function (options) {
      if (!this.isLogin) {
        toLogin();
        return;
      }
      if (!options.id) {
        return this.$util.Tips({
          title: '缺少退款编号，无法查看'
        },{
          tab: 3,
          url:1
        });
      }
			this.id = parseInt(options.id);
      this.getAfterSale();
    },
		methods: {
      /**
       * 获取售后订单
      */
      getAfterSale: function() {
        AfterSaleApi.getAfterSale(this.id).then(res => {
          this.afterSale = res.data || {}
        }).catch(err => {
          return this.$util.Tips({
            title: err
          });
        })
      },

      /**
       * 取消售后
       */
      cancelAfterSale: function() {
        uni.showModal({
          title: '提示',
          content: '确认取消该售后?',
          success: res => {
            if (!res.confirm) {
              return;
            }
            AfterSaleApi.cancelAfterSale(this.id).then(() => {
              this.$util.Tips({
                title: '取消成功'
              })
              this.getAfterSale();
            }).catch((err) => {
              this.$util.Tips({
                title: err
              })
              this.getAfterSale();
            });
          }
        });
      },

      fen2yuan(price) {
        return Util.fen2yuan(price)
      },
      formatDate: function(date) {
        return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
      }
		}
	}
</script>
<!-- TODO 芋艿：后续清理下 -->
<style scoped lang="scss">
.shuoming{
  width: 32rpx;
  height: 32rpx;
}
.goodCall {
  color: $theme-color;
  text-align: center;
  width: 100%;
  height: 86rpx;
  padding: 0 30rpx;
  border-bottom: 1rpx solid #eee;
  font-size: 30rpx;
  line-height: 86rpx;
  background: #fff;

  .icon-kefu {
    font-size: 36rpx;
    margin-right: 15rpx;
  }

  /* #ifdef MP */
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 86rpx;
    font-size: 30rpx;
    color: $theme-color;
  }

  /* #endif */
}
.order-details{
	background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/orderBg.png') ;
	 background-repeat: no-repeat;
	 background-size: cover;
	
}
.order-details .header {
  height: 150rpx;
  padding: 0 30rpx;
}

.order-details .header.on {
  background-color: #666 !important;
}

 .pictrue {
  width: 162rpx;
  height: 162rpx;
}

 .pictrue image {
  width: 100%;
  height: 100%;
}

.order-details .header .data {
  color: rgba(255, 255, 255, 0.8);
  font-size: 24rpx;
  margin-left: 27rpx;
}

.order-details .header .data.on {
  margin-left: 0;
}

.order-details .header .data .state {
  font-size: 30rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 7rpx;
}

.order-details .header .data .time {
  margin-left: 20rpx;
}

.picTxt {
  height: 150rpx;
}

.order-details .nav {
  background-color: #fff;
  font-size: 26rpx;
  color: #282828;
  padding: 27rpx 0;
  width: 100%;
  border-radius: 14rpx;
  margin: -100rpx auto 0 auto;
}

.order-details .nav .navCon {
  padding: 0 40rpx;
}

.order-details .nav .on {
  color: $theme-color;
}

.order-details .nav .progress {
  padding: 0 65rpx;
  margin-top: 10rpx;
}

.order-details .nav .progress .line {
  width: 100rpx;
  height: 2rpx;
  background-color: #939390;
}

.order-details .nav .progress .iconfont {
  font-size: 25rpx;
  color: #939390;
  margin-top: -2rpx;
}

.order-details .address {
  font-size: 26rpx;
  color: #868686;
  background-color: #fff;
  margin-top: 15rpx;
  padding: 30rpx 24rpx;
}

.order-details .address .name {
  font-size: 30rpx;
  color: #282828;
  margin-bottom: 15rpx;
}

.order-details .address .name .phone {
  margin-left: 40rpx;
}

.order-details .line {
  width: 100%;
  height: 3rpx;
}

.order-details .line image {
  width: 100%;
  height: 100%;
  display: block;
}

.order-details .wrapper {
  background-color: #fff;
  margin-top: 12rpx;
  padding: 30rpx 24rpx;
}

.order-details .wrapper .item {
  font-size: 28rpx;
  color: #282828;
}

.order-details .wrapper .item~.item {
  margin-top: 20rpx;
}

.order-details .wrapper .item .conter {
  color: #868686;
  // width: 490rpx;
  text-align: right;
}

.order-details .wrapper .item .conter .copy {
  font-size: 20rpx;
  color: #333;
  border-radius: 20rpx;
  border: 1rpx solid #666;
  padding: 3rpx 15rpx;
  margin-left: 24rpx;
}

.order-details .wrapper .actualPay {
  border-top: 1rpx solid #eee;
  margin-top: 30rpx;
  padding-top: 30rpx;
}

.order-details .wrapper .actualPay .money {
  font-weight: bold;
  font-size: 30rpx;
}

.order-details .footer {
  width: 100%;
  height: 100rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 0 30rpx;
  box-sizing: border-box;
}

.order-details .footer .bnt {
  width: 158rpx;
  height: 54rpx;
  text-align: center;
  line-height: 54rpx;
  border-radius: 50rpx;
  color: #fff;
  font-size: 27rpx;
}

.order-details .footer .bnt.cancel {
  color: #aaa;
  border: 1rpx solid #ddd;
}

.order-details .footer .bnt~.bnt {
  margin-left: 18rpx;
}

.order-details .writeOff {
  background-color: #fff;
  margin-top: 15rpx;
  padding-bottom: 50rpx;
}

.order-details .writeOff .title {
  font-size: 30rpx;
  color: #282828;
  height: 87rpx;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 24rpx;
  line-height: 87rpx;
}

.order-details .writeOff .grayBg {
  background-color: #f2f5f7;
  width: 590rpx;
  height: 384rpx;
  border-radius: 20rpx 20rpx 0 0;
  margin: 50rpx auto 0 auto;
  padding-top: 55rpx;
}

.order-details .writeOff .grayBg .pictrue {
  width: 290rpx;
  height: 290rpx;
  margin: 0 auto;
}

.order-details .writeOff .grayBg .pictrue image {
  width: 100%;
  height: 100%;
  display: block;
}

.order-details .writeOff .gear {
  width: 590rpx;
  height: 30rpx;
  margin: 0 auto;
}

.order-details .writeOff .gear image {
  width: 100%;
  height: 100%;
  display: block;
}

.order-details .writeOff .num {
  background-color: #f0c34c;
  width: 590rpx;
  height: 84rpx;
  color: #282828;
  font-size: 48rpx;
  margin: 0 auto;
  border-radius: 0 0 20rpx 20rpx;
  text-align: center;
  padding-top: 4rpx;
}

.order-details .writeOff .rules {
  margin: 46rpx 30rpx 0 30rpx;
  border-top: 1px solid #f0f0f0;
  padding-top: 10rpx;
}

.order-details .writeOff .rules .item {
  margin-top: 20rpx;
}

.order-details .writeOff .rules .item .rulesTitle {
  font-size: 28rpx;
  color: #282828;
}

.order-details .writeOff .rules .item .rulesTitle .iconfont {
  font-size: 30rpx;
  color: #333;
  margin-right: 8rpx;
  margin-top: 5rpx;
}

.order-details .writeOff .rules .item .info {
  font-size: 28rpx;
  color: #999;
  margin-top: 7rpx;
}

.order-details .writeOff .rules .item .info .time {
  margin-left: 20rpx;
}

.order-details .map {
  height: 86rpx;
  font-size: 30rpx;
  color: #282828;
  line-height: 86rpx;
  border-bottom: 1px solid #f0f0f0;
  margin-top: 15rpx;
  background-color: #fff;
  padding: 0 24rpx;
}

.order-details .map .place {
  font-size: 26rpx;
  width: 176rpx;
  height: 50rpx;
  border-radius: 25rpx;
  line-height: 50rpx;
  text-align: center;
}

.order-details .map .place .iconfont {
  font-size: 27rpx;
  height: 27rpx;
  line-height: 27rpx;
  margin: 2rpx 3rpx 0 0;
}

.order-details .address .name .iconfont {
  font-size: 34rpx;
  margin-left: 10rpx;
}

.refund {
  padding:  0 !important;
  margin-top: 15rpx;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    font-size: 30rpx;
    color: #333;
    height: 86rpx;
    border-bottom: 1px solid #f5f5f5;
    font-weight: 400;
    padding: 0 24rpx;

    image {
      width: 32rpx;
      height: 32rpx;
      margin-right: 10rpx;
    }
  }

  .con {
    font-size: 25rpx;
    color: #666666;
    padding: 30rpx 24rpx;
  }
}
.shu{
	width: 10rpx;
	height: 30rpx;
	background: #EB3D74;
}
.btn_item{
	 padding: 15rpx 20rpx;
	background: rgba(235,61,116,0);
	border-radius: 12rpx 12rpx 12rpx 12rpx;
	border: 1rpx solid #D5D5D5;
	color: #5D5F74;
	text-align: center;
}
</style>
<style>
.qs-btn {
  width: auto;
  height: 60rpx;
  text-align: center;
  line-height: 60rpx;
  border-radius: 50rpx;
  color: #fff;
  font-size: 27rpx;
  padding: 0 3%;
  color: #aaa;
  border: 1px solid #ddd;
  margin-right: 20rpx;
}
</style>
