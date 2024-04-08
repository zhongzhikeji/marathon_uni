<template>
	<view>
		<u-navbar bgColor='transparent' :title="title" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
			:autoBack="true">
		</u-navbar>
		<view class="flex center mt40 ">
			<view class="logo"></view>
		</view>
		<view class="ml10 mr10 mt40">
			<view class="bg-w pb10">
				<view class="list">
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
					<view class="ftw600 ml10 ft14 mt10">密码 <text class="cl-placeholder">（设置密码登录可获得积分奖励）</text></view>
					<view class="item">
						<view class="acea-row row-middle">

							<input type="password" class="texts" placeholder="请输入登录密码" v-model="password" />
						</view>
					</view>
					<view class="ftw600 ml10 ft14 mt10">确认密码</view>
					<view class="item">
						<view class="acea-row row-middle">

							<input type="password" class="texts" placeholder="请确认您登录密码" v-model="confirm" />
						</view>
					</view>
				</view>
				<view class="btnLogin" @click="loginMobile">登陆/注册</view>
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
	export default {
		mixins: [sendVerifyCode],
		data() {
			return {
				account: "",
				password: "",
				captcha: "",
				confirm: '',
				type:'',
				title:'',
				agreementAccepted: false, // 用户是否同意协议的状态

			}
		},
		onLoad(e) {
			if(e.name){
			this.type = e.name
			e.name == 'registey'?this.title='注册':this.title='忘记密码'
			console.log(this.title)
			}
		},
		methods: {
			handleChange(item) {

				this.agreementAccepted = !this.agreementAccepted;
				if (item.detail.value[0] == 'isOk') {
					this.isAg = true
				} else {
					this.isAg = false
				}
			},
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
				if (!this.password) {
					return this.$util.Tips({
						title: '请填写密码'
					});
				}
				if (!this.confirm) {
					return this.$util.Tips({
						title: '请填写确认密码'
					});
				}
				if (this.confirm != this.password) {
					return this.$util.Tips({
						title: '您输入的密码不一致'
					});
				}
			
				 AuthApi.registey({
					 mobile: this.account,
					 code: this.captcha,
					 password:this.password
				 }).then(res=>{
					 let data = res.data;
					 this.$store.commit("LOGIN", {
					 	'token': res.data.accessToken
					 });
					 this.getUserInfo(data);
					 this.bindBrokerUser();
				 })
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
				if(this.type == 'registey'){
					await AuthApi.sendSmsCode(this.account, 5)
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
				}else{
					await AuthApi.sendSmsCode(this.account, 4)
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
				}
			
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
</style>