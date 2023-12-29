<template>
	<view class="page">
		<view class="system-height" :style="{height:statusBarHeight}"></view>
		<!-- #ifdef MP -->
		<view class="title-bar" style="height: 43px;">
			<view class="icon" @click="back" v-if="!isHome">
				<image src="../static/left.png"></image>
			</view>
			<view class="icon" @click="home" v-else>
				<image src="../static/home.png"></image>
			</view>
			账户登录
		</view>
		<!-- #endif -->
		<view class="wechat_login">
			<view class="img">
				<image src="../../static/images/wechat_login.png" mode="widthFix"></image>
			</view>
			<view class="btn-wrapper">
				<!-- #ifdef H5 -->
				<button hover-class="none" @click="wechatLogin" class="bg-green btn1">微信登录</button>
				<!-- #endif -->
				<!-- #ifdef MP -->
				<button @getphonenumber="getPhoneNumber" class="bg-green btn1"  open-type="getPhoneNumber">微信登录</button>
				
				<!-- #endif -->
				<!-- <button hover-class="none" @click="isUp = true" class="btn2">手机号登录</button> -->
			</view>
		</view>
		<block v-if="isUp">
			<mobileLogin :isUp="isUp" @close="maskClose" @wechatPhone="wechatPhone"
                   :social-code="socialCode" :social-state="socialState" />
		</block>
		<block v-if="isPhoneBox">
			<routinePhone :logoUrl="logoUrl" :isPhoneBox="isPhoneBox" @close="bindPhoneClose" :authKey="authKey">
			</routinePhone>
		</block>
	</view>
</template>
<script>
	const app = getApp();
	let statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
  import * as UserApi from "@/api/member/user";
 	import * as AuthApi from "@/api/member/auth";
  import mobileLogin from '@/components/login_mobile/index.vue'
	import routinePhone from '@/components/login_mobile/routine_phone.vue'
	  import * as BrokerageAPI from '@/api/trade/brokerage.js'
	import {
		getLogo,
		getUserPhone
	} from '@/api/public';
	import Routine from '@/libs/routine';
	import wechat from "@/libs/wechat";
		const BACK_URL = "login_back_url";
	export default {
		data() {
			return {
				isUp: false,
				phone: '',
				statusBarHeight: statusBarHeight,
				isHome: false,
				isPhoneBox: false,
				logoUrl: '',
				code: '',
				authKey: '',
				options: '',
				userInfo: {},
				codeNum: 0,

        socialCode: '',
        socialState: '',
			}
		},
		components: {
			mobileLogin,
			routinePhone
		},
		onLoad(options) {
			// getLogo().then(res => {
			// 	this.logoUrl = res.data.logoUrl
			// })
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			home() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			// 弹窗关闭
			maskClose() {
				this.isUp = false
			},
			bindPhoneClose(data) {
				if (data.isStatus) {
					this.isPhoneBox = false
					this.$util.Tips({
						title: '登录成功',
						icon: 'success'
					}, {
						tab: 3
					})
				} else {
					this.isPhoneBox = false
				}
			},
   getUserInfo(data) {
	     
     this.$store.commit("SETUID", data.userId);
     this.$store.commit("OPENID", data.openid);
     UserApi.getUserInfo().then(res => {
	
       this.$store.commit("UPDATE_USERINFO", res.data);

       // 调回登录前页面
	
       let backUrl = this.$Cache.get(BACK_URL) || "/pages/home/index";
	
       if (backUrl.indexOf('/') !== 0) {
         backUrl = '/' + backUrl;
       }
       if (backUrl.indexOf('/pages/login/index') === 0) {
         backUrl = '/pages/home/index';
       }
       uni.reLaunch({
         url: backUrl
       });
     })
   			},
		bindBrokerUser() {
		  const spread = this.$Cache.get("spread");
		  if (spread > 0) {
		    BrokerageAPI.bindBrokerageUser(spread)
		  }
		},
			async getPhoneNumber(e) {
			
			  // 情况一：拒绝授权手机号码
			  const phoneCode = e.detail.code
			  if (!e.detail.code) {
			    uni.showModal({
			      title: '授权失败',
			      content: '您已拒绝获取绑定手机号登录授权，可以使用其他手机号验证登录',
			      confirmText: '知道了',
			      confirmColor: '#3C9CFFFF'
			    })
			    return;
			  }
			  // 情况二：允许授权手机号码
			  const loginCode = await Routine.getCode()
			  AuthApi.weixinMiniAppLogin(phoneCode, loginCode).then(res => {
			    const data = res.data;
				console.log(data.accessToken,123465)
			    // TODO 芋艿：refreshToken 机制
			    this.$store.commit("LOGIN", {
			      'token':  data.accessToken
			    });
				
			
			    this.getUserInfo(data);
			     this.bindBrokerUser();
			  }).catch(e => {
				  console.log(e)
			    this.$util.Tips({
			      title: e
			    });
			  });
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: #fff;
		height: 100%;
	}

	.page {
		background: #fff;
		height: 100%;
	}

	.wechat_login {
		padding: 72rpx 34rpx;

		.img image {
			width: 100%;
		}

		.btn-wrapper {
			margin-top: 86rpx;
			padding: 0 66rpx;

			button {
				width: 100%;
				height: 86rpx;
				line-height: 86rpx;
				margin-bottom: 40rpx;
				border-radius: 120rpx;
				font-size: 30rpx;

				&.btn1 {
					color: #fff;
				}

				&.btn2 {
					color: #666666;
					border: 1px solid #666666;
				}
			}
		}
	}

	.title-bar {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
	}

	.icon {
		position: absolute;
		left: 30rpx;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 86rpx;
		height: 86rpx;

		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
</style>
