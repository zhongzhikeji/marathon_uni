<template>
	<view class="assistant">
		<u-navbar bgColor='#f5f5f5' title="参赛助手" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" :autoBack="true">
		</u-navbar>
	   <view class="bg-w ml10 mr10 mt20 radis">
	   	<u-tabs :scrollable='false' :list="list" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
	   	          color: '#EB3D74',
	   	          fontWeight: 'bold',
	   			  fontSize:'16px',
	   	          transform: 'scale(1.05)',
	   			 
	   	      }" :inactiveStyle="{
	   	          color: '#606266',
	   	          transform: 'scale(1)'
	   	      }" itemStyle="height: 50px;" @click="onTabClick">
	   	</u-tabs>
		
	   </view>	
	<view class="flex ml15 mr15 mt30 mb20 alcenter space">
		<view class="flex alcenter ">
			<u--image :showLoading="true"
				src="https://marathon.zznet.live/file/uploadPath/image/competition/bannner.png" width="14px"
				height="21px"></u--image>
			<view class="ft18 ftw600 ml10">赛事列表<text
					style="color: #AEAEAE;font-size: 14px;font-weight: 400;">({{productList.length}}场)</text></view>
		</view>
	
		<view class="flex">
			<view class="ztab zbofore" @click="onAsc">
				<u--image :showLoading="true"
					src="https://marathon.zznet.live/file/uploadPath/image/home/sort.png" width="12px"
					height="12px"></u--image>
			</view>
		
		</view>
	</view>
	  <view class="ml15 mr15">  
		<yd-product-more :showType="showType" :product-list="productList" :more-status="moreStatus"
			 @handleProdItemClick='onchangeItem'></yd-product-more>
	  </view>
	</view>
</template>

<script>
	  import * as Api from '@/api/competition/list.js'
	export default {
		data(){
			return{
				lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
			list: [{
					name: '全部'
				},
				{
					name: '未开始'
				},
				{
					name: '已结束'
				},
				{
					name:'已关注'
				}
			],
			type:'0',
			showType: 'assistant',
			productList: [],
			asc:'true',
			moreStatus: 'nomore'
			}
		},
		methods:{
		onchangeItem(item) {
			// console.log(item)
			// uni.$u.route('/pages/subCompetition/competition/details', {
			// 	id: item
			// })
		},
		onAsc(){
			this.asc = !this.asc
			this.getheplerList()
		},
		getheplerList(){
			Api.helper(this.type,1,10,this.asc).then(res=>{
				this.productList = res.data.list
				
			})
		},
		onTabClick(item){
			console.log(item.index)
			this.type = item.index
			this.getheplerList()
		}
			   
				
		},
		onLoad() {
			this.getheplerList()
		}
	}
</script>

<style lang="scss" scoped>
	.assistant{
	.ztab {
		background-color: #fff;
		padding: 15rpx;
		
	}
	
	}
	
</style>