<template>
	<view>
		<view class="address-window" :class="address.address ? 'on' : ''">
			<view class='title'>选择地址<text class='iconfont icon-guanbi' @tap='close'></text></view>
			<view class='list'>
				<view class='item acea-row row-between-wrapper' :class='active === index?"font-color":""'
              v-for="(item,index) in addressList" @tap='tapAddress(index,item.id)' :key='index'>
					<text class='iconfont icon-ditu' :class='active===index?"font-color":""' />
					<view class='address'>
						<view class='name' :class='active==index?"font-color":""'>
              {{ item.name }}
              <text class='phone'>{{ item.mobile }}</text>
            </view>
						<view class='line1'>{{ item.areaName }} {{ item.detailAddress }}</view>
					</view>
					<text class='iconfont icon-complete' :class='active === index?"font-color":""' />
				</view>
			</view>
			<!-- 无地址 -->
			<view class='pictrue' v-if="!is_loading && !addressList.length">
				<image src='https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/noAddress.png'></image>
			</view>
			<view class='addressBnt bg-color' @tap='goAddressPages'>选择其地址</view>
		</view>
		<view class='mask' catchtouchmove="true" :hidden='!address.address' @tap='close' />
	</view>
</template>

<script>
  import * as AddressApi from '@/api/member/address.js';
  export default {
		props: {
			pagesUrl: {
				type: String,
				default: '',
			},
			address: {
				type: Object,
				default: function() {
					return {
						address: true, // 是否打开
						addressId: 0,
					};
				}
			},
			isLog: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				active: 0, // 激活的 addressList 下标
				is_loading: true,
				addressList: []
			};
		},
		methods: {
      /**
       * 选中某个地址
       */
			tapAddress: function(e, addressid) {
				this.active = e;
				for (let i = 0; i < this.addressList.length; i++) {
					if (this.addressList[i].id === addressid) {
            this.$emit('OnChangeAddress', this.addressList[i]);
            break
          }
				}
			},
			close: function() {
				this.$emit('changeClose');
			},
			goAddressPages: function() {
				console.log(this.pagesUrl)
				this.$emit('changeClose');
				uni.navigateTo({
					url: this.pagesUrl
				});
			},
			getAddressList: function() {
        AddressApi.getAddressList().then(res => {
					const addressList = res.data;
					this.$set(this, 'addressList', addressList);
					this.is_loading = false;
          // 处理默认选中项
					if (!this.address.addressId) {
            return;
          }
          let defaultAddress = {};
          for (let i = 0; i < addressList.length; i++) {
						if (addressList[i].id === this.address.addressId) {
							this.active = i;
							defaultAddress = this.addressList[i];
						}
					}
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	.address-window {
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 101;
		transform: translate3d(0, 100%, 0);
		transition: all .3s cubic-bezier(.25, .5, .5, .9);
	}

	.address-window.on {
		transform: translate3d(0, 0, 0);
	}

	.address-window .title {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		height: 123rpx;
		line-height: 123rpx;
		position: relative;
	}

	.address-window .title .iconfont {
		position: absolute;
		right: 30rpx;
		color: #8a8a8a;
		font-size: 35rpx;
	}

	.address-window .list .item {
		margin-left: 30rpx;
		padding-right: 30rpx;
		border-bottom: 1px solid #eee;
		height: 129rpx;
		font-size: 25rpx;
		color: #333;
	}

	.address-window .list .item .iconfont {
		font-size: 37rpx;
		color: #2c2c2c;
	}

	.address-window .list .item .iconfont.icon-complete {
		font-size: 30rpx;
		color: #fff;
	}

	.address-window .list .item .address {
		width: 560rpx;
	}

	.address-window .list .item .address .name {
		font-size: 28rpx;
		font-weight: bold;
		color: #282828;
		margin-bottom: 4rpx;
	}

	.address-window .list .item .address .name .phone {
		margin-left: 18rpx;
	}

	.address-window .addressBnt {
		font-size: 30rpx;
		font-weight: bold;
		color: #fff;
		width: 690rpx;
		height: 86rpx;
		border-radius: 43rpx;
		text-align: center;
		line-height: 86rpx;
		margin: 85rpx auto;
	}

	.address-window .pictrue {
		width: 414rpx;
		height: 336rpx;
		margin: 0 auto;
	}

	.address-window .pictrue image {
		width: 100%;
		height: 100%;
	}
</style>
