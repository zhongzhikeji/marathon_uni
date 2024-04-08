<template>
	<view>
		<view class='order-details'>
			
              <view class="headers">
				  <u-navbar bgColor='transparent' title="订单详情" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" :autoBack="true">
				  </u-navbar>
				  <view class="flex alcenter">
					  <u--image :showLoading="true"
					   	src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/orderPayIcon.png" width="45rpx"
					   	height="32rpx"></u--image>
						<view class="ft18 ml5 ftw600" v-show="orderInfo.status === 0">待付款</view>
						<view class="ft18 ml5 ftw600" v-show="orderInfo.status === 10">{{orderInfo.deliveryType === 1 ? '待发货' : '待核销'}}</view>
					<view class="ft18 ml5 ftw600" v-show="orderInfo.status === 20 &&orderInfo.deliveryType === 1">待收货</view>
					<view class="ft18 ml5 ftw600" v-show="orderInfo.status === 30 && !orderInfo.commentStatus">待评价</view>
					<view class="ft18 ml5 ftw600" v-show="orderInfo.status === 30 && orderInfo.commentStatus">已完成</view>
				  </view>
				  <view class="ft12 mt10">
					  您的订单已经提变, 请在29分49秒内完成支付超时订单将自动关闭
				  </view>
				  <view v-if="orderInfo.pickUpStoreId > 0" class='address' style="margin-top:15rpx;">
				    <view class='name' @tap="makePhone">{{ system_store.name }}
				      <text class='phone'>{{ system_store.phone }}</text>
				      <text class="iconfont icon-tonghua font-color" />
				    </view>
				    <view>{{ system_store.areaName }} {{ system_store.detailAddress }}</view>
				  </view>
				  <view v-else class='address borRadius14'>
					  <view class="flex">
						  <view class="bg-eb cl-w radis mr5" style="padding: 5rpx 6rpx;">默认</view>
						   <view class="ft14">{{ orderInfo.receiverAreaName }}</view>
					  </view>
					<view class="mt8 mb5 ft16"> {{ orderInfo.receiverDetailAddress}}</view>
				  	<view class='name cl-ae'>{{ orderInfo.receiverName }}
				      <text class='phone'>{{ orderInfo.receiverMobile }}</text>
				    </view>
				  			
				  		</view>
						<view style="height: 30px;"></view>
			  </view>
   <!--   <view class='header bg-eb'>
		<view class='picTxt acea-row row-middle'>
      
        <view class='pictrue'>
            <image v-if="orderInfo.status === 0" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/status_0.gif" />
            <image v-if="orderInfo.status === 10" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/status_10.gif" />
            <image v-if="orderInfo.status === 20" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/status_20.gif" />
            <image v-if="orderInfo.status === 30 && !orderInfo.commentStatus" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/status_30a.gif" />
            <image v-if="orderInfo.status === 30 && orderInfo.commentStatus" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/status_30b.gif" />
            <image v-if="orderInfo.status === 40" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/status_40.gif" />
          </view> 
					<view class='data'>
  
            <view class='state' v-if="orderInfo.status === 0">请在 {{ formatDate(orderInfo.payExpireTime)}} 前完成支付</view>
            <view class='state' v-if="orderInfo.status === 10">商家未发货，请耐心等待</view>
            <view class='state' v-if="orderInfo.status === 20">商家已发货，请耐心等待</view>
            <view class='state' v-if="orderInfo.status === 30 && !orderInfo.commentStatus">已收货，快去评价一下吧</view>
            <view class='state' v-if="orderInfo.status === 30 && orderInfo.commentStatus">交易完成，感谢您的支持</view>
          
            <view class='state' v-if="orderInfo.status === 40">交易关闭</view>
        
						<view>{{ formatDate(orderInfo.createTime) }}</view>
					</view>
				</view>
			</view> -->

      <!-- 状态的过程 -->
   <!--   <view v-if="orderInfo.status !== 40">
        <view class='nav'>
         <view class='navCon acea-row row-between-wrapper'>
            <view :class="orderInfo.status === 0 ? 'cl-eb ftw600':''">待付款</view>
            <view :class="orderInfo.status === 10 ? 'cl-eb ftw600':''">
              {{ orderInfo.deliveryType === 1 ? '待发货' : '待核销' }}
            </view>
            <view :class="orderInfo.status === 20 ? 'on ftw600':''" v-if="orderInfo.deliveryType === 1">待收货</view>
            <view :class="orderInfo.status === 30 && !orderInfo.commentStatus ? 'cl-eb ftw600':''">待评价</view>
            <view :class="orderInfo.status === 30 && orderInfo.commentStatus ? 'cl-eb ftw600':''">已完成</view>
          </view>
          <view class='progress acea-row row-between-wrapper'> -->
            <!-- 状态：待付款 -->
         <!--   <view class='iconfont'
                  :class='(orderInfo.status === 0 ? "icon-webicon318":"icon-yuandianxiao") + " " + (orderInfo.status >= 0 ? "font-num":"")' />
            <view class='line' :class='orderInfo.status > 0 ? "bgeb":""' /> -->
            <!-- 状态：待核销 / 待发货 -->
       <!--     <view class='iconfont'
                  :class='(orderInfo.status === 10 ? "icon-webicon318":"icon-yuandianxiao") + " " + (orderInfo.status >= 10 ? "font-num":"")' />
            <view class='line' :class='orderInfo.status > 10 ? "bgeb":""' /> -->
            <!-- 状态：待收货 -->
           <!-- <view class='iconfont'
                  :class='(orderInfo.status === 20 ? "icon-webicon318":"icon-yuandianxiao") + " " + (orderInfo.status >= 20 ? "font-num":"")'
                  v-if="orderInfo.deliveryType === 1" />
            <view class='line' :class='orderInfo.status > 20 ? "bgeb":""' v-if="orderInfo.deliveryType === 1" /> -->
            <!-- 状态：待评价 -->
         <!--   <view class='iconfont'
                  :class='(orderInfo.status === 30 && !orderInfo.commentStatus ? "icon-webicon318":"icon-yuandianxiao")
							+ " " + (orderInfo.status === 30 ? "font-num":"")' />
            <view class='line' :class='orderInfo.status >= 30 && orderInfo.commentStatus ? "bgeb":""' /> -->
            <!-- 状态：已完成 -->
        <!--    <view class='iconfont'
                  :class='(orderInfo.status === 30 && orderInfo.commentStatus ? "icon-webicon318":"icon-yuandianxiao")
							 + " " + (orderInfo.status === 30 && orderInfo.commentStatus ? "font-num":"")' />
          </view> -->
        <!-- </view> -->

        <!-- TODO 芋艿：核销的情况 -->
      <!--  <view v-if="orderInfo.deliveryType === 2 && orderInfo.payStatus" class="writeOff borRadius14">
					<view class="title">核销信息</view>
					<view class="grayBg">
						<view class="pictrue">
					
							<image :src="codeImg"></image>
						</view>
					</view>
					<view class="gear">
						<image src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/writeOff.jpg"></image>
					</view>
					<view class="num">{{ orderInfo.verifyCode }}</view>
					<view class="rules" v-if='system_store.id'>
						<view class="item">
							<view class="rulesTitle acea-row row-middle">
								<text class="iconfont icon-shijian" />核销时间
							</view>
							<view class="info">
								每日：<text class="time">{{orderInfo.systemStore.dayTime.replace(',','-')}}</text>
							</view>
						</view>
						<view class="item">
							<view class="rulesTitle acea-row row-middle">
								<text class="iconfont icon-shuoming1"></text>使用说明
							</view>
							<view class="info">可将二维码出示给店员扫描或提供数字核销码</view>
						</view>
					</view>
				</view> -->
			<!-- 	<view v-if="orderInfo.deliveryType === 2" class="map acea-row row-between-wrapper borRadius14">
					<view>自提地址信息</view>
					<view class="place cart-color acea-row row-center-wrapper" @tap="showMaoLocation">
						<text class="iconfont icon-weizhi" />查看位置
					</view>
				</view> -->

        <!-- 收货人信息 -->
    

        <!-- 商品列表 -->
				<orderGoods
          :evaluate='evaluate'
          :afterSale="afterSale"
          :productType="orderInfo.type"
          :orderId="order_id"
          :cartInfo="cartInfo"
					:jump="true"
        />

			</view>

			<view>
				<view class='wrapper borRadius14'>
					<view class='item acea-row row-between'>
						<view class="cl-placeholder">订单编号：</view>
						<view class='conter acea-row row-middle row-right'>{{orderInfo.no}}
							<!-- #ifndef H5 -->
							<text class='copy' @tap='copy'>复制</text>
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<text class='copy copy-data' :data-clipboard-text="orderInfo.no">复制</text>
							<!-- #endif -->
						</view>
					</view>
					<view class='item acea-row row-between'>
						<view class="cl-placeholder">下单时间：</view>
						<view class='conter'>{{( formatDate(orderInfo.createTime) )}}</view>
					</view>
					<view class='item acea-row row-between'>
						<view class="cl-placeholder">支付状态：</view>
						<view class='conter' v-if="orderInfo.payStatus">已支付</view>
						<view class='conter' v-else>未支付</view>
					</view>
          <view class='item acea-row row-between'>
						<view class="cl-placeholder">支付方式：</view>
						<view class='conter'>{{ orderInfo.payChannelName }}</view>
					</view>
					<view class='item acea-row row-between' v-if="orderInfo.userRemark">
						<view class="cl-placeholder">买家留言：</view>
						<view class='conter'>{{ orderInfo.userRemark }}</view>
					</view>
				</view>

        <!-- 配送信息 -->
        <view v-if="orderInfo.logisticsId !== undefined">
					<view class='wrapper borRadius14' v-if='orderInfo.logisticsId > 0'>
						<view class='item acea-row row-between'>
							<view class="cl-placeholder">配送方式：</view>
							<view class='conter'>发货</view>
						</view>
						<view class='item acea-row row-between'>
							<view class="cl-placeholder">快递公司：</view>
							<view class='conter'>{{ orderInfo.logisticsName || ''}}</view>
						</view>
						<view class='item acea-row row-between'>
							<view class="cl-placeholder">快递号：</view>
							<view class='conter'>{{ orderInfo.logisticsNo || ''}}</view>
						</view>
					</view>
					<view class='wrapper borRadius14' v-else-if='orderInfo.deliveryType === 0'>
						<view class='item acea-row row-between'>
							<view class="cl-placeholder">虚拟发货：</view>
							<view class='conter'>已发货，请注意查收</view>
						</view>
					</view>
				</view>

        <!-- 价格相关 -->
        <view class='wrapper borRadius14 mt10'>
					<view class='item acea-row row-between'>
						<view class="cl-placeholder">商品总价：</view>
						<view class='conter'>￥{{ fen2yuan(orderInfo.totalPrice) }}</view>
					</view>
					<view class='item acea-row row-between' v-if="orderInfo.deliveryPrice > 0">
						<view class="cl-placeholder">运费：</view>
						<view class='conter'>￥{{ fen2yuan(orderInfo.deliveryPrice) }}</view>
					</view>
					<view class='item acea-row row-between' v-if='orderInfo.couponId'>
						<view class="cl-placeholder">优惠抵扣：</view>
						<view class='conter'>-￥{{ fen2yuan(orderInfo.couponPrice) }}</view>
					</view>
          <!-- TODO 芋艿：vip 价格减免 from php -->
          <!-- TODO 芋艿：vip 价格减免 from php -->
          <view class='item acea-row row-between' v-if="orderInfo.pointPrice > 0">
						<view class="cl-placeholder">活动抵扣：</view>
							<view class='conter'>-￥{{ fen2yuan(orderInfo.deductionPrice) }}</view>
					</view>
					<view class='actualPay acea-row row-right'>
            应付金额：<text class='money cl-eb'>￥{{ fen2yuan(orderInfo.payPrice) }}</text>
          </view>
				</view>
				<view style='height:120rpx;'></view>

        <!-- 操作区域 -->
        <view class='footer acea-row row-right row-middle' v-if='orderInfo.status !==10'>
					<view class="qs-btn" v-if="orderInfo.status === 0" @click.stop="cancelOrder">
            取消订单
          </view>
					<view class='bnt bgColors' v-if="orderInfo.status === 0" @tap='goPay'>
            立即付款
          </view>
          <!-- TODO 芋艿：拼团 -->
        <!--  <view class='bnt bg-color' v-if="orderInfo.combinationId > 0" @tap='goJoinPink'>查看拼团</view> -->
          <navigator class='bnt cancel' v-if="orderInfo.logisticsId > 0"
                     hover-class='none' :url="'/page_home/user/goods_logistics/index?orderId='+ orderInfo.orderId">
            查看物流
					</navigator>
					<view class='bnt bgColors' v-if="orderInfo.status === 20" @tap='confirmOrder'>
            确认收货
          </view>
					<view class='bnt cancel' v-if="orderInfo.status === 40" @tap='delOrder'>
            删除订单
          </view>
          <!-- TODO 芋艿：再次购买 -->
          <view class='bnt bgColors' v-if="orderInfo.status==3 && orderInfo.type!==1" @tap='goOrderConfirm'>
            再次购买
          </view>
				</view>
			</view>
		</view>


	</view>
</template>
<script>
  import { qrcodeApi } from '@/api/order.js';
  import * as OrderApi from '@/api/trade/order.js';
  import * as DeliveryApi from '@/api/trade/delivery.js';
  import { openOrderRefundSubscribe } from '@/utils/SubscribeMessage.js';

  import payment from '@/components/payment';
  import orderGoods from "@/components/orderGoods";
  import ClipboardJS from "@/plugin/clipboard/clipboard.js";
  import { toLogin } from '@/libs/login.js';
  import { mapGetters } from "vuex";
  import dayjs from '@/plugin/dayjs/dayjs.min.js';
  import * as Util from '@/utils/util.js';
  export default {
    components: {
      payment,
   
      orderGoods
    },
    data() {
      return {
        order_id: '', // 订单编号
        type: 'normal',
        orderInfo: { // 订单详情
          systemStore: {},
        },
        cartInfo: [], // 购物车产品

        evaluate: 0, // 是否开启评论，和订单状态有关
        afterSale: false, // 是否开启售后

        // ========== 门店自提（核销） ==========
        system_store: {}, // 门店信息

        // TODO 芋艿：未整理
        codeImg: '',
        qrcodeSize: 100
      };
    },
    computed: mapGetters(['isLogin', 'chatUrl', 'userInfo']),
    onLoad: function(options) {
      this.type = options.type ? options.type : 'normal';
      if (!options.order_id) {
        return this.$util.Tips({
          title: '缺少参数'
        }, {
          tab: 3,
          url: 1
        });
      }
      this.$set(this, 'order_id', options.order_id);
    },
    onShow() {
      if (!this.isLogin) {
        toLogin();
        return
      }
      this.getOrderInfo();
    },
    onReady: function() {
      // #ifdef H5
      this.$nextTick(() => {
        const clipboard = new ClipboardJS(".copy-data");
        clipboard.on("success", () => {
          this.$util.Tips({
            title: '复制成功'
          });
        });
      });
      // #endif
    },
    methods: {
      /**
       * 获取订单详细信息
       */
      getOrderInfo: function() {
        uni.showLoading({
          title: "正在加载中"
        });
        OrderApi.getOrderDetail(this.order_id).then(res => {
          if (!res.data) {
            this.$util.Tips({
              title: '订单信息不存在'
            }, '/pages/users/order_list/index');
            return
          }

          uni.hideLoading();
          this.$set(this, 'orderInfo', res.data);
          this.$set(this, 'cartInfo', res.data.items);

          // 如果已完成，且未评论，则设置 evaluate 为 2，开启评论功能
          this.$set(this, 'evaluate', res.data.status === 30 && !res.data.commentStatus ? 2 : 0);
          //  如果满足指定状态，则开启售后按钮
          if ([10, 20, 30].includes(res.data.status)) {
            this.$set(this, 'afterSale', true);
          }

          // 配送方式：门店自提
          if (res.data.pickUpStoreId) {
            DeliveryApi.getDeliveryPickUpStore(res.data.pickUpStoreId).then(res => {
              this.system_store = res.data || {};
            });
          }
          if (this.orderInfo.deliveryType === 2 && this.orderInfo.payStatus) {
            this.markCode(res.data.verifyCode);
          }
        }).catch(err => {
          uni.hideLoading();
          this.$util.Tips({
            title: err
          }, '/pages/users/order_list/index');
        });
      },
      /**
       * 打开支付组件
       */
      goPay() {
        const returnUrl = encodeURIComponent('/pages/order_pay_status/index?order_id=' + this.orderInfo.id);
        uni.navigateTo({
          url: `/pages/goods/cashier/index?order_id=${this.orderInfo.payOrderId}&returnUrl=${returnUrl}`
        })
      },
      /**
       * 确认收货
       */
      confirmOrder: function() {
        uni.showModal({
          title: '确认收货',
          content: '为保障权益，请收到货确认无误后，再确认收货',
          success: (res) => {
            if (!res.confirm) {
              return
            }
            OrderApi.receiveOrder(this.orderInfo.id).then(res => {
              return this.$util.Tips({
                title: '收货成功',
                icon: 'success'
              }, () => {
                this.getOrderInfo();
              });
            }).catch(err => {
              return this.$util.Tips({
                title: err
              });
            })
          }
        })
      },
      /**
       * 取消订单
       */
      cancelOrder() {
        uni.showModal({
          title: '提示',
          content: '确认取消该订单?',
          success: res => {
            if (res.confirm) {
              OrderApi.cancelOrder(this.orderInfo.id).then(() => {
                this.$util.Tips({
                  title: '取消成功'
                })
                this.getOrderInfo();
              }).catch((err) => {
                this.$util.Tips({
                  title: err
                })
                this.getOrderInfo();
              });
            }
          }
        });
      },
      /**
       * 删除订单
       */
      delOrder: function() {
        uni.showModal({
          title: '提示',
          content: '确认删除该订单?',
          success: res => {
            if (res.confirm) {
              OrderApi.deleteOrder(this.orderInfo.id).then(() => {
                this.$util.Tips({
                  title: '删除成功'
                }, {
                  tab: 3,
                  url: '/pages/users/order_list/index'
                })
              }).catch((err) => {
                this.$util.Tips({
                  title: err
                })
                this.getOrderInfo();
              });
            }
          }
        });
      },

      // TODO 芋艿：未整理

      /**
       * 生成二维码
       */
      markCode(text) {
        qrcodeApi({
          height: '145',
          text: text,
          width: '145'
        }).then(res => {
          this.codeImg = res.data.code
        });
      },
      /**
       * 去拼团详情
       */
      goJoinPink: function() {
        uni.navigateTo({
          url: '/pages/activity/goods_combination_status/index?id=' + this.orderInfo.pinkId,
        });
      },
      /**
       * 再此购买
       */
      goOrderConfirm: function() {
        this.$Order.getPreOrder("again",[{
          orderNo: this.order_id
        }]);
      },

      // ========== 非关键逻辑 ==========
      /**
       * 跳转客服
       */
      kefuClick() {
        location.href = this.chatUrl;
      },
      /**
       * 订阅，并前往链接
       */
      openSubcribe: function(page) {
        uni.showLoading({
          title: '正在加载',
        })
        openOrderRefundSubscribe().then(res => {
          uni.hideLoading();
          uni.navigateTo({
            url: page,
          });
        }).catch(() => {
          uni.hideLoading();
        });
      },
      /**
       *
       * 剪切订单号
       */
      // #ifndef H5
      copy: function() {
        uni.setClipboardData({
          data: this.orderInfo.no
        });
      },
      // #endif
      /**
       * 拨打电话
       */
      makePhone: function() {
        uni.makePhoneCall({
          phoneNumber: this.system_store.phone
        })
      },
      /**
       * 打开地图
       */
      showMaoLocation: function() {
        if (!this.system_store.latitude || !this.system_store.longitude) {
          return this.$util.Tips({
            title: '缺少经纬度信息无法查看地图！'
          });
        }
        uni.openLocation({
          latitude: this.system_store.latitude,
          longitude: this.system_store.longitude,
          scale: 8,
          name: this.system_store.name,
          address: this.system_store.areaName + this.system_store.detailAddress,
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

	.order-details .headers {
	
		padding: 0 30rpx;
		background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/orderBg.png');
		background-size: 100% 100%;
	}

	.order-details .header.on {
		background-color: #666 !important;
	}

	.order-details .header .pictrue {
		width: 110rpx;
		height: 110rpx;
	}

	.order-details .header .pictrue image {
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

	 .address {
		font-size: 28rpx;
		color: #000;
		background-color: #fff;
		margin-top: 15rpx;
		padding: 30rpx 24rpx;
	}

	 .address .name {
		font-size: 30rpx;
		color: #8F91A1;
		margin-bottom: 15rpx;
	}

	 .address .name .phone {
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

	 .wrapper {
		background-color: #fff;
		// margin-top: 12rpx;
		padding: 30rpx 24rpx;
		margin: 0rpx 20rpx 20rpx 20rpx;
	}

	 .wrapper .item {
		font-size: 28rpx;
		color: #282828;
	}

	 .wrapper .item~.item {
		margin-top: 20rpx;
	}

	 .wrapper .item .conter {
		color: #2F2F46;
		// width: 490rpx;
		text-align: right;
	}

	 .wrapper .item .conter .copy {
		font-size: 20rpx;
		color: #333;
		border-radius: 20rpx;
		border: 1rpx solid #666;
		padding: 3rpx 15rpx;
		margin-left: 24rpx;
	}

	 .wrapper .actualPay {
		border-top: 1rpx solid #eee;
		margin-top: 30rpx;
		padding-top: 30rpx;
	}

	 .wrapper .actualPay .money {
		font-weight: bold;
		font-size: 30rpx;
	}

	 .footer {
		width: 100%;
		height: 188rpx;
		
		position: fixed;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		box-shadow: 0rpx -6rpx 40rpx 2rpx rgba(0,0,0,0.1);
		border-radius: 34rpx 34rpx 0rpx 0rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

 .footer .bnt {
		
		text-align: center;
		box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(180,5,60,0.42);
	    border-radius: 15rpx;
		color: #fff;
		font-size: 27rpx;
		padding: 20rpx 25rpx;
	}
 .footer .bnt.bgColors {
	border: 1rpx solid #EB3D74;
	color: #fff;
	background-color: #EB3D74;
	}

	 .footer .bnt.cancel {
		color: #5D5F74;
		border: 1rpx solid #ddd;
	}

	 .footer .bnt~.bnt {
		margin-left: 18rpx;
	}

	 .writeOff {
		background-color: #fff;
		margin-top: 15rpx;
		padding-bottom: 50rpx;
	}

	 .writeOff .title {
		font-size: 30rpx;
		color: #282828;
		height: 87rpx;
		border-bottom: 1px solid #f0f0f0;
		padding: 0 24rpx;
		line-height: 87rpx;
	}

	 .writeOff .grayBg {
		background-color: #f2f5f7;
		width: 590rpx;
		height: 384rpx;
		border-radius: 20rpx 20rpx 0 0;
		margin: 50rpx auto 0 auto;
		padding-top: 55rpx;
	}

	 .writeOff .grayBg .pictrue {
		width: 290rpx;
		height: 290rpx;
		margin: 0 auto;
	}

	 .writeOff .grayBg .pictrue image {
		width: 100%;
		height: 100%;
		display: block;
	}

	 .writeOff .gear {
		width: 590rpx;
		height: 30rpx;
		margin: 0 auto;
	}

	 .writeOff .gear image {
		width: 100%;
		height: 100%;
		display: block;
	}

	 .writeOff .num {
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

	 .writeOff .rules {
		margin: 46rpx 30rpx 0 30rpx;
		border-top: 1px solid #f0f0f0;
		padding-top: 10rpx;
	}

	 .writeOff .rules .item {
		margin-top: 20rpx;
	}

	 .writeOff .rules .item .rulesTitle {
		font-size: 28rpx;
		color: #282828;
	}

	 .writeOff .rules .item .rulesTitle .iconfont {
		font-size: 30rpx;
		color: #333;
		margin-right: 8rpx;
		margin-top: 5rpx;
	}

	 .writeOff .rules .item .info {
		font-size: 28rpx;
		color: #999;
		margin-top: 7rpx;
	}

	 .writeOff .rules .item .info .time {
		margin-left: 20rpx;
	}

	 .map {
		height: 86rpx;
		font-size: 30rpx;
		color: #282828;
		line-height: 86rpx;
		border-bottom: 1px solid #f0f0f0;
		margin-top: 15rpx;
		background-color: #fff;
		padding: 0 24rpx;
	}

	 .map .place {
		font-size: 26rpx;
		width: 176rpx;
		height: 50rpx;
		border-radius: 25rpx;
		line-height: 50rpx;
		text-align: center;
	}

	 .map .place .iconfont {
		font-size: 27rpx;
		height: 27rpx;
		line-height: 27rpx;
		margin: 2rpx 3rpx 0 0;
	}

	 .address .name .iconfont {
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
</style>
<style>
	.qs-btn {
		
		
		text-align: center;
	    padding:20rpx 25rpx;
		border-radius: 15rpx;
		color: #fff;
		font-size: 27rpx;
		
		color: #5D5F74;
		border: 1px solid #ddd;
		margin-right: 20rpx;
	}
	.bgeb{
		background-color: #EB3D74 !important;
	}
</style>
