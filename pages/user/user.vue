<template>
  <view class="container">
    <view class="user-header">
      <view class="user-info" @click="pageRouter('/pages/profile/profile')">
        <u-avatar size="60" shape="circle" :src="userInfo.avatar"></u-avatar>
        <view class="info-text">
          <view class="user-nickname">{{ hasLogin ? userInfo.nickname || '会员用户' : '匿名用户' }}</view>
          <view class="user-mobile">{{ hasLogin ? userInfo.mobile || ' ' : '登录/注册' }}</view>
        </view>
		<view>
		</view>
      </view>
      <view class="user-setting">
		
        <u-icon v-if="hasLogin" name="setting" color="#939393" size="22" @click="pageRouter('/pages/setting/setting')"></u-icon>
      </view>
    </view>
  <view class="stat-box">
      <u-grid :border="true" col="3" @click="onchangeCollect">
        <u-grid-item v-for="(item, index) in statList" :key="index">
          <text class="grid-value">{{ item.value }}</text>
          <text class="grid-title">{{ item.title }}</text>
		  
        </u-grid-item>
      </u-grid>
    </view>
	  <view class="ml20 mr20" @click="$u.route('/pages/user/vip')">
		  <view class="flex alcenter pt10 pb10 space">
			  <u--image width="127rpx" height="118rpx" src="https://marathon.zznet.live/file/uploadPath/img/vip.png"></u--image>
			  <view class="mr10">
				  <view class="ft18 ftw600" style="color:#651807">马拉松 <text class="ft14">·</text>超级VIP</view>
				  <view class="ft12 mt5" style="color:#B1775E">享积分 报名 优惠券等众多特权</view>
			  </view>
			  <view style="width:80px">
				  <u-button shape='circle' color='#3E3E3E' style="color:#FFCFB4">去开通</u-button>
			  </view>
		  </view>
	  </view>
    <u-gap height="10" bgColor="#f3f3f3"></u-gap>
	<view class="flex alcenter space ml10 mr10 pt15 pb15">
		<view class="flex alcenter ml10 mr10 ">
			<view>
				<view class="ft16 ftw600">赛事订单</view>
				<view>查询您的报名赛事</view>
			</view>
		<!-- 	 <u--image width="80rpx" height="80rpx" src="https://cdn.uviewui.com/uview/album/1.jpg"></u--image> -->
		</view>
	<view class="flex alcenter ml10 mr10" @click="$u.route('/pages/user/order_list/index')">
		<view>
			<view>商城订单</view>
			<view>查询您的商城订单</view>
		</view>
		<!-- <u--image width="80rpx" height="80rpx" src="https://cdn.uviewui.com/uview/album/1.jpg"></u--image> -->
	</view>
	</view>
     <u-gap height="10" bgColor="#f3f3f3"></u-gap>
	 <view class="bg-w ml10 mr10">
		 <view class="ml10 mr10 pt15 pb15">
		 		 <view class="flex">
		 			<text class="mr15 ft16">钱包余额 (元)</text>
		 			<u-icon :name="eyes?'eye':'eye-off'" size="20" @click="eyes= !eyes"></u-icon>
					<!-- <u-icon name="eye-off" size="20"></u-icon> -->
		 		 </view>
		 		 <view class="flex alcenter space">
		 			 <view class="flex alcenter">
		 				 <text class="ft12" v-show="eyes">￥</text>
		 				  <text class="ft22 ftw600" v-show="eyes">59.9</text>
						  <text class="ft16 ftw600" v-show="!eyes">****</text>
		 			 </view>
		 			 <view style="width: 150rpx;">
		 				 <u-button shape='circle' color='#DA1984' style="color:#fff" @click="$u.route('/pages/user/purse/index')">详情</u-button>
		 			 </view>
		 		
		 		 </view>
		 		 <view class="flex around userInfo">
					 <view class="flex">
						 <u-icon name="https://marathon.zznet.live/file/uploadPath/img/info.png"></u-icon>
						 <text class="ml10" style="color: #A9776D;">账户信息</text>
					 </view>
			<u-line direction="col" dashed length="40rpx"></u-line>
					 <view class="flex" @click="$u.route('/pages/order/spread')">
						<u-icon name="https://marathon.zznet.live/file/uploadPath/img/user1.png"></u-icon>
						<text class="ml10" style="color: #A9776D;">推广大使</text> 
					 </view>
				 </view>
		 </view>
	 </view>

	     <u-gap height="10" bgColor="#f3f3f3"></u-gap>
    <view>
   <!--   <view class="order-header">
        <text class="order-title">我的订单</text>
        <view class="see-all" @click="pageRouter(orderPage, -1)">
          <text>查看全部</text>
          <u-icon name="arrow-right"></u-icon>
        </view>
      </view> -->
       <view class="ml10 mr10">
		  <view class="order-status-box">
		    <u-grid :border="false" col="4">
		      <u-grid-item v-for="(item, index) in orderStatusList" :key="index" @click="pageRouter(item.path, item.status)">
		        <u-icon :name="item.icon" :size="25"></u-icon>
		        <text class="grid-title" style="line-height: 100rpx;">{{ item.name }}</text>
		      </u-grid-item>
		    </u-grid>
		  </view> 
	   </view>

    </view>

    <u-gap height="10" bgColor="#f3f3f3"></u-gap>

  

<!--    <u-gap height="10" bgColor="#f3f3f3"></u-gap> -->

<!--    <u-cell-group class="fun-list">
      <u-cell class="fun-item" :border="false" icon="gift" title="分销中心" isLink></u-cell>
      <u-cell class="fun-item" :border="false" icon="tags" title="领券中心" isLink></u-cell>
      <u-cell class="fun-item" :border="false" icon="coupon" title="我的优惠券" isLink></u-cell>
      <u-cell class="fun-item" :border="false" icon="map" title="收货地址" @click="pageRouter('/pages/address/list')" isLink></u-cell>
    </u-cell-group> -->
  </view>
</template>

<script>
import orderStatus from '@/common/orderStatus'
	import { toLogin } from '@/libs/login.js';
	import Cache from '@/utils/cache';
	import { BACK_URL } from '@/config/cache';
export default {
  data() {
    return {
      orderPage: '/pages/order/list',
	  eyes:false,
      statList: [
        { value: '0', title: '收藏' },
        { value: '2', title: '评价' },
        { value: '883', title: '能量' }
      ]
    }
  },
  onLoad() {
    if (this.hasLogin) {
      this.$store.dispatch('ObtainUserInfo')
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo
    },
    hasLogin() {
		
      return this.$store.getters.isLogin
    },
    orderStatusList() {
      let orderStatusList = []
      for (let status in orderStatus) {
        // if (status !== '40') {
        
        // }
		  orderStatusList.push({ name: orderStatus[status].name, status: status, icon: orderStatus[status].icon,path:orderStatus[status].path })
      }
      return orderStatusList
    }
  },
  methods: {
    pageRouter(pageUrl, param) {
			console.log(Cache)
      if (!this.hasLogin) {
    Cache.set(BACK_URL, '')
    toLogin();
      } else if (pageUrl) {
        uni.$u.route(pageUrl, {
          status: param
        })
      } else {
        uni.$u.route(pageUrl)
      }
    },
		onchangeCollect(name){
			if(name == 0){
			this.$u.route('/pages/user/collect/index')
			}else if(name == 1){
				console.log('评价')
			}else{
				this.$u.route('/pages/user/energy/index')
			}
		},
    logout() {
      uni.showModal({
        title: '提示',
        content: '您确定要退出登录吗',
        success: res => {
          if (res.confirm) {
            this.$store.dispatch('Logout')
          } else if (res.cancel) {
            //console.log('用户点击取消')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
	.u-border-right{
		height: 25px;
	}
.user-header {
  // background-color: #fff;
  @include flex-space-between;
  padding: 30rpx;
  height: 200rpx;

  .user-info {
    @include flex-left;
    align-items: center;

    .info-text {
      margin-left: 20rpx;

      .user-nickname {
        font-size: 30rpx;
        font-weight: 700;
        line-height: 50rpx;
      }

      .user-mobile {
        font-size: 24rpx;
        font-weight: 700;
        color: #939393;
        line-height: 50rpx;
      }
    }
  }

  .user-setting {
    margin-right: 5rpx;
  }
}

.order-header {
  @include flex-space-between;
  padding: 20rpx 30rpx;
  border-bottom: $custom-border-style;

  .order-title {
    color: #333333;
    font-size: 34rpx;
  }

  .see-all {
    height: 40rpx;
    @include flex-right;
    color: #666666;
    font-size: 26rpx;
  }
}

.order-status-box {
  padding: 50rpx 0;
  background-color: #fff;
  
}

.stat-box {
  padding: 20rpx 0;
}

.grid-title {
  line-height: 50rpx;
  font-size: 26rpx;

}

.grid-value {
  
  font-size: 36rpx;
  font-weight: 700;
  color: #2b85e4;
}

.fun-list {
  .fun-item {
    padding-top: 10rpx;
    padding-bottom: 10rpx;
    border-bottom: $custom-border-style;
  }
}
.userInfo{
	margin-top: 20rpx;
	background-color: #FFF7F7;
	padding: 25rpx 0;
	border-radius: 20rpx;
}
</style>
