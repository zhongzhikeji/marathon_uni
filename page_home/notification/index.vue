<template>
	<view>
		<view class="bg-w pt20">
				<view class="flex center">
					<u-tabs :list="list" @click="click"
						itemStyle="padding-left: 30px; padding-right: 30px; height:44px"></u-tabs>
				</view>
			</view>
			<view class="info">
				<view class="pt15 pb15 ml15 mr15">
					<u--text :lines="1" text="你的账户已成功签到,获得5积分"></u--text>
				
						<view class="flex space alcenter mt10">
							<view>
									<u-button type="primary"  style="height: 45rpx;">积分通知</u-button>
							</view>
					
					     <view class="ft12" style="color:#E2E2E2">5分钟前</view>
						</view>
					
					
				</view>
			</view>
			<view class="info">
				<view class="pt15 pb15 ml15 mr15">
					<u--text :lines="1" text="你参加报名的成都马拉松赛事即将开始"></u--text>
				
						<view class="flex space alcenter mt10">
							<view>
									<u-button type="primary"  style="height: 45rpx;">参赛通知</u-button>
							</view>
					
					     <view class="ft12" style="color:#E2E2E2">5分钟前</view>
						</view>
					
					
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list: [{
						name: '消息通知'
					},
					{
						name: '状态通知'
					},
					{
						name: '系统通知'
					}
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info{
		background-color: #fff;
		margin: 40rpx 30rpx;
	}
</style>