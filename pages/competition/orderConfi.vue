<template>
	<view class="bg-w" >
		<view class="pt10">
			<view class="ml20 mr20  bg-w">
				<view class="ml7 mr7 pt15 pb15 flex alcenter ">
					<view>
						<u--image :showLoading="true" :src="src" width="118px" height="76px"></u--image>
					</view>
					<view class="ml5">
						<view class="ft14 ftw600">2023 <text style="color: #F074B6;margin-left: 5px;"> 西安</text>日出女子跑-鼓浪岛
						</view>
						<view class="ft12 mt2">￥100/人</view>
						<view class="ft12 mt2">参赛人数：2人</view>
						<view class="ft12 flex mt2">
							<view>半程马拉松</view>
							<view>免抽签</view>
						</view>
					</view>
				</view>
				<view class="pt10 pb10">
					<u-line></u-line>
				</view>
				<view class="flex alcenter space ">
					<view>
						<view class="flex">
							<view>积分抵扣</view>
							<view class="ml10">会员专享</view>
						</view>
						<view>可用2000点能量抵扣2块钱</view>
					</view>
					<view>
					<u-checkbox-group  @change="checkboxChange">
						<u-checkbox v-model="checked" shape="circle" name="1"></u-checkbox>
					</u-checkbox-group>
					</view>
				</view>
				<view class="pt20 pb10">
					<u-line></u-line>
				</view>
				<view class="text-right pb20">
					小计：198
				</view>
			</view>
	  <view style="height: 30rpx; background-color: #F5F5F5;"></view>
	  <view class="ml20 mr20 pt20 pb20">
		  <view>支付方式</view>
		  <view class="flex alcenter space mt20">
			  <view class=" flex alcenter">
				  <u-icon name="weixin-circle-fill" color="#2ecc71" size="28"></u-icon>
				  <view class="ml10">微信支付</view>
			  </view>
			  <view>
				  <u-checkbox-group  @change="checkboxChange">
				  	<u-checkbox v-model="checked" shape="circle" name="1"></u-checkbox>
				  </u-checkbox-group>
			  </view>
		  </view>
	  </view>
	  <view class="footer">
		  <view class="flex alcenter ml20 mr20 pb10 pt10">
		
				  	  <view >
						  <text>总计：</text>
						  <text class="ft18 pr10">￥198</text>
					  </view>
			
		
			     <view style="width: 65%">
					<u-button @click=""  color='#F9A4C3'
						 style="font-size: 16px;color:#000;font-weight: bold;"
						size='large'>去支付</u-button> 
				 </view>
				
			
		  </view>
	  </view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
					src: 'https://cdn.uviewui.com/uview/album/1.jpg',
					checked:true,
			
			}
		},
		methods:{
			    checkboxChange(n) {
			              console.log('change', n);
			          }
		}
	}
</script>

<style lang="scss" scoped>
	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #fff;
	}
</style>