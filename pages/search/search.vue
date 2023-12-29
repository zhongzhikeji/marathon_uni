<template>
	<view class="container">
		<view class="wrapper">
			<liu-search :hotList="hotList" @input="input" @change="change"></liu-search>
			<view class="mt20 mb20">
				<u-line></u-line>
			</view>
			 <view class="ml15 ftw600 mb15">排行榜</view>
			<view class="bg-w">
			<u-tabs :list="list4" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
			          color: '#EB3D74',
			          fontWeight: 'bold',
					  fontSize:'16px',
			          transform: 'scale(1.05)',
					 
			      }"  :inactiveStyle="{
			          color: '#8F91A1',
			          transform: 'scale(1)'
			      }" itemStyle="padding-left: 20px; padding-right: 20px; height: 50px;" :scrollable='false' @click="click">
			</u-tabs>
			</view>

			<view class="ml10 mr10 mt10 mb10 rank " v-show="isshow ==0">
				<view class="ml20 mr20 mt10 mb15" v-for="item in rankImg">
					<view class="flex alcenter space">
						<view class="flex">
							<u--image :showLoading="true" :src="item.img" width="17px" height="22px"></u--image>
							<view class="ft14 ml15">{{item.name}}</view>
						</view>
					
						<u--image :showLoading="true" :src="item.icon" width="7px" height="4px"></u--image>
					</view>


				</view>
				<view class="pt10 pb10">
								  <view class="flex center alcenter">
									  <view class="mr10" style="color: #cccccc;">查看全部</view>
									  <u-icon name="arrow-right" color="#CCCCCC" size="15"></u-icon>
								  </view>
							
				</view>
			</view>
		<view class="ml10 mr10 mt10 mb10 rank " v-show="isshow ==1">
			<view class="ml20 mr20 mt10 mb15" v-for="item in rankImg">
				<view class="flex alcenter space">
					<view class="flex">
						<u--image :showLoading="true" :src="item.img" width="17px" height="22px"></u--image>
						<view class="ft14 ml15">{{item.name}}</view>
					</view>
				
					<u--image :showLoading="true" :src="item.icon" width="7px" height="4px"></u--image>
				</view>
		
		
			</view>
			<view class="pt10 pb10">
							  <view class="flex center alcenter">
								  <view class="mr10" style="color: #cccccc;">查看全部</view>
								  <u-icon name="arrow-right" color="#CCCCCC" size="15"></u-icon>
							  </view>
						
			</view>
		</view>
		<view class="ml10 mr10 mt10 mb10 rank " v-show="isshow ==2">
			<view class="ml20 mr20 mt10 mb15" v-for="item in rankImg">
				<view class="flex alcenter space">
					<view class="flex">
						<u--image :showLoading="true" :src="item.img" width="17px" height="22px"></u--image>
						<view class="ft14 ml15 flex">
					    <u-avatar :src="item.author" size='23' style="margin-right: 10px;"></u-avatar>
						{{item.name}}
						</view>
					</view>
				
					<u--image :showLoading="true" :src="item.icon" width="7px" height="4px"></u--image>
				</view>
		
		 
			</view>
			  <view class="pt10 pb10">
				  <view class="flex center alcenter">
					  <view class="mr10" style="color: #cccccc;">查看全部</view>
					  <u-icon name="arrow-right" color="#CCCCCC" size="15"></u-icon>
				  </view>
			
			  </view>
		</view>
		<view class="ml10 mr10 mt10 mb10 rank " v-show="isshow ==3">
			<view class="ml20 mr20 mt10 mb15" v-for="item in rankImg">
				<view class="flex alcenter space">
					<view class="flex">
						<u--image :showLoading="true" :src="item.img" width="17px" height="22px"></u--image>
						<view class="ft14 ml15 flex">
					    <u-avatar :src="item.author" size='23' style="margin-right: 10px;"></u-avatar>
						{{item.name}}
						</view>
					</view>
				
					<u--image :showLoading="true" :src="item.icon" width="7px" height="4px"></u--image>
				</view>
		
		 
			</view>
			  <view class="pt10 pb10">
				  <view class="flex center alcenter">
					  <view class="mr10" style="color: #cccccc;">查看全部</view>
					  <u-icon name="arrow-right" color="#CCCCCC" size="15"></u-icon>
				  </view>
			
			  </view>
		</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				rankImg: [{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r1.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/xia.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r2.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r3.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r4.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r5.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r6.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r7.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r8.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r9.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
					{
						img: 'https://marathon.zznet.live/file/uploadPath/img/r10.png',
						name: '2023荣成滨海马拉松报名开启',
						icon:'https://marathon.zznet.live/file/uploadPath/image/home/shang.png',
						author:'https://cdn.uviewui.com/uview/album/5.jpg'
					},
				],
				hotList: ['白酒', '苹果醋', '红酒', '笔记本', '洗衣液', '平板电脑', '电视机'], //热门搜索
				blurList: ['我的', '我要红包', '我要开红包', '我的红包', '我的世界'], //模糊搜索内容
				lineBg :'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
				isshow:0,
				list4: [{
					name: '赛事榜'
				}, {
					name: '热门文章',

				}, {
					name: '跑团榜',
				}, {
					name: '佣金榜'
				}],
			}
		},
		onLoad() {},
		methods: {
			//搜索回调
			change(e) {
				console.log('搜索回调信息：' + e)
				uni.$u.route('/pages/search/resSearch')
			},
			click(e){
				if(e.index ==0){
					this.isshow =0
				}else if(e.index == 1){
					this.isshow =1
				}else if(e.index == 2){
					this.isshow =2
				}else{
					this.isshow =3
				}
			},
			//input事件
			input(e) {
				console.log('搜索框输入的内容：' + e)
			}
		}
	}
</script>
<style>
	page{
		background-color: #fff;
	}
</style>
<style lang="scss" scoped>
	.wrapper {
		height: 100%;
		background-color: #fff;
      
		.rank {
			box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(0,0,0,0.06);
			border: 1px solid #fff;
			border-radius: 20rpx;
			background: #fff;
		
		}
	}
</style>