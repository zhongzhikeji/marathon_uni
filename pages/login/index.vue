<template>
	<view>
		<u-navbar bgColor='transparent'  :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
			leftIcon=' '>
		</u-navbar>
		<view class="flex center mt40 ">
			<view class="logo"></view>
		</view>

		<view class="ml10 mr10 mt40">
			<view class="flex mt30 alend">
				<view class="isphone " :class="{tabClass:isClass}" @click="isClass = !isClass">
					<view>手机号登陆</view>
				</view>
				<view class="ispsw" @click="isClass = !isClass" :class="{tabClass:!isClass}">账号密码登陆</view>
			</view>	<view class="list" v-if="isClass ">
					<view class="ftw600 ml10 ft14 mt10">手机号码</view>
					<view class="item">
						<view class="acea-row row-middle">

							<input type="text" class="texts" placeholder="请输入手机号码" v-model="account" />
						</view>
					</view>
					<view class="ftw600 ml10 ft14 mt10">验证码</view>
					<view class="item">
						<view class="acea-row row-middle">
							
							<input type="text" placeholder="填写验证码" class="codeIput" v-model="captcha" />
							<button class="code" :disabled="disabled" :class="disabled === true ? 'on' : ''"
								@click="code">
								{{ text }}
							</button>
						</view>
					</view>
				
				</view>
			<view class="bg-w pb10">
			
				<view class="list" v-if="!isClass">
					<view class="ftw600 ml10 ft14 mt10">手机号码</view>
					<view class="item">
						<view class="acea-row row-middle">

							<input type="text" class="texts" placeholder="请输入手机号码" v-model="account" />
						</view>
					</view>
					<view class="ftw600 ml10 ft14 mt10">密码</view>
					<view class="item">
						<view class="acea-row row-middle">
							<input type="password" class="texts" placeholder="请输入您登录密码" v-model="password" />
						</view>
					</view>

					<view class="text-right cl-eb mr5 pt5 pb5" @click="$u.route('/pages/login/registeyOrFrogt?name=frogt')">忘记密码?</view>
				</view>


				<!-- #ifdef H5 -->
				<view class="btnLogin" @click="loginMobile" v-if='isClass'>登陆</view>
				<view class="btnLogin" @click="submit" v-if='!isClass'>登陆</view>
				<view class="btnRegistey" @click="$u.route('/pages/login/registeyOrFrogt?name=registey')">注册</view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="btnLogin" @click="loginMobile" v-if='isClass'>登陆</view>
				<view class="btnLogin" @click="submit" v-if='!isClass'>登陆</view>
					<view class="btnRegistey" @click="$u.route('/pages/login/registeyOrFrogt')" v-if='!isClass'>注册</view>
				<view class="wxLogin" v-if='isClass'>
					<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="btns" >一键登录</button>
				</view>
				<!-- #endif -->
				<view class="flex center mt20">
					<checkbox-group @change="handleChange">
						<label class="flex alcenter mb10">
							<checkbox :checked='agreementAccepted' value='isOk'></checkbox>
							<text>我已阅读并同意 <text class="cl-eb">《用户协议》《隐私协议》</text></text>
						</label>
					</checkbox-group>
				</view>
			</view>





		</view>

	</view>
</template>

<script>
	import sendVerifyCode from "@/mixins/SendVerifyCode";
	import * as AuthApi from "@/api/member/auth";
	import * as UserApi from "@/api/member/user";
	const BACK_URL = "login_back_url";
	import * as BrokerageAPI from '@/api/trade/brokerage.js'
	import Routine from '@/libs/routine.js';
	export default {

		mixins: [sendVerifyCode],
		data() {
			return {
				isClass: true,
				checked: [], // 存储选中的复选框值
				agreementAccepted: false, // 用户是否同意协议的状态
				current: 1, // 1：快速登录；2：账号登录
				isAg:false,
				account: "",
				password: "",
				captcha: "",
				type: "login",
			
			}
		},
		methods: {
            handleChange(item) {
            
              this.agreementAccepted = !this.agreementAccepted;
			 if(item.detail.value[0] == 'isOk'){
				 this.isAg = true
			 }else{
				 this.isAg = false
			 }
              },
			/**
			 * 手机 + 验证码登录
			 */
			async loginMobile() {
				if(!this.isAg){
					return this.$util.Tips({
						title: '请同意协议后再登录'
					});
				}
				if (!this.account) {
					return this.$util.Tips({
						title: '请填写手机号码'
					});
				}
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.account)) {
					return this.$util.Tips({
						title: '请输入正确的手机号码'
					});
				}
				if (!this.captcha) {
					return this.$util.Tips({
						title: '请填写验证码'
					});
				}
				if (!/^[\w\d]+$/i.test(this.captcha)) {
					return this.$util.Tips({
						title: '请输入正确的验证码'
					});
				}

				// 1. 三方登录的特殊逻辑
				let socialType = undefined;
				let socialCode = undefined;
				let socialState = undefined;
				// 1.1 微信小程序的情况
				// #ifdef MP
				socialType = 34;
				socialCode = await Routine.getCode();
				socialState = 'default'
				// #endif
                
				// 2. 短信登录
				AuthApi.smsLogin({
					mobile: this.account,
					code: this.captcha,
					socialType: socialType,
					socialCode: socialCode,
					socialState: socialState
				}).then(res => {
					// TODO 芋艿：refreshToken 机制
					let data = res.data;
					this.$store.commit("LOGIN", {
						'token': res.data.accessToken
					});
					this.getUserInfo(data);
					this.bindBrokerUser();
				}).catch(res => {
					this.$util.Tips({
						title: res
					});
				});
			},
			async code() {
				if (!this.account) {
					return this.$util.Tips({
						title: '请填写手机号码'
					});
				}
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.account)) {
					return this.$util.Tips({
						title: '请输入正确的手机号码'
					});
				}
				await AuthApi.sendSmsCode(this.account, 1)
					.then(res => {
						this.$util.Tips({
							title: res.message
						});
						this.sendCode();
					})
					.catch(err => {
						return this.$util.Tips({
							title: err
						});
					});
			},
			/**
			 * 手机 + 密码登录
			 */
			async submit() {
				if(!this.isAg){
					return this.$util.Tips({
						title: '请同意协议后再登录'
					});
				}
				if (!this.account) {
					return this.$util.Tips({
						title: '请填写账号'
					});
				}
				if (!/^[\w\d]{5,16}$/i.test(this.account)) {
					return this.$util.Tips({
						title: '请输入正确的账号'
					});
				}
				if (!this.password) {
					return this.$util.Tips({
						title: '请填写密码'
					});
				}

				// 1. 三方登录的特殊逻辑
				let socialType = undefined;
				let socialCode = undefined;
				let socialState = undefined;
				// 1.1 微信小程序的情况
				// #ifdef MP
				socialType = 34;
				socialCode = await Routine.getCode();
				socialState = 'default'
				// #endif

				// 2. 执行登录
				AuthApi.login({
					mobile: this.account,
					password: this.password,
					socialType: socialType,
					socialCode: socialCode,
					socialState: socialState
				}).then(({
					data
				}) => {

					this.$store.commit("LOGIN", {
						'token': data.accessToken
					});
					this.getUserInfo(data);
					this.bindBrokerUser();
				}).catch(e => {
					this.$util.Tips({
						title: e
					});
				});
			},
			/**
			 * 微信一键登录
			 */
			async getPhoneNumber(e) {
				if(!this.isAg){
					return this.$util.Tips({
						title: '请同意协议后再登录'
					});
				}
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
					// TODO 芋艿：refreshToken 机制
					this.$store.commit("LOGIN", {
						'token': data.accessToken
					});
					this.getUserInfo(data);
					this.bindBrokerUser();
				}).catch(e => {
					this.$util.Tips({
						title: e
					});
				});
			},
			getUserInfo(data) {
				this.$store.commit("SETUID", data.userId);
				this.$store.commit("OPENID", data.openid);
				UserApi.getUserInfo().then(res => {
					this.$store.commit("UPDATE_USERINFO", res.data);
					// 调回登录前页面
					let backUrl = this.$Cache.get(BACK_URL) || "/pages/index/index";
					if (backUrl.indexOf('/') !== 0) {
						backUrl = '/' + backUrl;
					}
					if (backUrl.indexOf('/pages/users/login/index') === 0) {
						backUrl = '/pages/index/index';
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logo {
		background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/loginLogo.png');
		background-size: 100% 100%;
		height: 127rpx;
		width: 289rpx;
	}

	.isphone {
		width: 50%;
		color: #7D7D7D;
		border-radius: 18rpx 0rpx 18rpx 0rpx;
		line-height: 74rpx;
		text-align: center;
		height: 74rpx;
		background: #E8E8E8;
	}

	.tabClass {
		height: 98rpx !important;
		line-height: 98rpx !important;
		color: #EB3D74 !important;
		font-weight: bold;
		background-color: #fff !important;
		border-radius: 16rpx 18rpx 0rpx 0rpx;
		font-size: 36rpx;
	}

	.ispsw {
		width: 50%;
		background: #E8E8E8;
		border-radius: 0rpx 18rpx 0rpx 18rpx;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		color: #7D7D7D;
	}

	.list {

		overflow: hidden;

		.item {

			background: #fff;
			margin: 20rpx 10rpx;

			.row-middle {
				position: relative;
				padding: 10rpx 22rpx;
				background-color: #F6F6F6;
				border-radius: 12rpx;

				.texts {
					flex: 1;
					font-size: 28rpx;
					height: 80rpx;
					line-height: 80rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				input {
					flex: 1;
					font-size: 28rpx;
					height: 80rpx;
					line-height: 80rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.code {
					position: absolute;
					right: 30rpx;
					top: 50%;
					color: #EB3D74;
					font-size: 26rpx;
					transform: translateY(-50%);
					background-color: transparent;
				}
			}
		}

	}

	.btnLogin {
		margin: 20rpx 10rpx 0 10rpx;

		background: #EB3D74;
		box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(180, 5, 60, 0.42);
		border-radius: 12rpx;
		text-align: center;
		color: #fff;
		font-size: 30rpx;
		font-weight: bold;
		padding: 30rpx 0;
	}

	.btnRegistey {
		margin: 30rpx 10rpx 0 10rpx;

		background: #FFECF2;

		border-radius: 12rpx;
		text-align: center;
		color: #EB3D74;
		font-size: 30rpx;
		font-weight: bold;
		padding: 30rpx 0;
	}

	.wxLogin {
		margin: 30rpx 10rpx 0 10rpx;

		background: #FFECF2;

		border-radius: 12rpx;
		text-align: center;

		font-size: 30rpx;
		font-weight: bold;
		padding: 30rpx 0;

		button {
			background-color: transparent;
			color: #EB3D74;
			font-size: 30rpx;
		}
	}
</style>