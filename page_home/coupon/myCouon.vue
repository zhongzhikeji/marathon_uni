<template>
	<view class="coupon">
		<u-navbar bgColor='transparent' title="我的优惠劵" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
			:autoBack="true">
				</u-navbar>
			<view class="item">
				<view class="bg-w ml10 mr10 radis pb15">
					<u-tabs :list="list4" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
					          color: '#EB3D74',
					          fontWeight: 'bold',
							  fontSize:'16px',
					          transform: 'scale(1.05)',
					
					      }" :inactiveStyle="{
					          color: '#606266',
					          transform: 'scale(1)'
					      }" itemStyle="padding-left: 10px; padding-right: 10px; height: 40px;" @click="onTabClick" :scrollable='false'>
					</u-tabs>
				</view>
		       <view class="pl10 pr10 mt10 bg-w ml10 mr10 pt10 pb10">
		       	<view class="bg_b mb10">
		       		<view class="flex alcenter h-full space cl-8bf " style="width: 60%;">
		       			<view class="ml20 ftw600">￥ <text class="ft28">25</text></view>
		       			<view>
		       				<view class="ftw600">满45元使用</view>
		       				<view class="ft12">有效期至: 2023-03-10</view>
		       				<view>使用须知：</view>
		       			</view>
		       		</view>
		       	</view>
		       <view class="bg_y">
		       	<view class="flex alcenter h-full space cl-8d3 " style="width: 60%;">
		       		<view class="ml20 ftw600">￥ <text class="ft28">25</text></view>
		       		<view>
		       			<view class="ftw600">满45元使用</view>
		       			<view class="ft12">有效期至: 2023-03-10</view>
		       			<view>使用须知：</view>
		       		</view>
		       	</view>
		       </view>
		       </view>
			</view>
	
	     <view class="footer">
			 <view class="items" @click="$u.route('/page_home/coupon/index')">优惠劵中心</view>
		 </view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
				list4: [{
						name: '可使用'
					},
					{
						name: '已使用'
					},
					{
						name: '已过期'
					}
				]
			}
		},
		methods:{
			onTabClick(){}
		}
	}
</script>

<style lang="scss" scoped>
	.coupon{

	  .item{
		
	  }
	  .bg_b{
		  background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/coupon_b.png');
		  background-size: 100% 100%;
		  height: 204rpx;
		  
	  }
	  .bg_y{
	  		  background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/coupon_y.png');
	  		  background-size: 100% 100%;
	  		  height: 204rpx;
	  		  
	  }
	  .bg_r{
	  		  background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/coupon_r.png');
	  		  background-size: 100% 100%;
	  		  height: 204rpx;
	  		  
	  }
	}
.title_shu{
	width: 10rpx;
	height: 30rpx;
	background: #EB3D74;
}
.footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	 padding: 40rpx 20rpx;
	background: #FFFFFF;
	box-shadow: 0rpx -6rpx 40rpx 2rpx rgba(0,0,0,0.1);
	border-radius: 34rpx 34rpx 0rpx 0rpx;
	.items{
		 background: #EB3D74;
		 box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(180,5,60,0.42);
		 border-radius: 12rpx;
		 padding: 20rpx;
		 text-align: center;
		 color: #fff;
	}
}
</style>