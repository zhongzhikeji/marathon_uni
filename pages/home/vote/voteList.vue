<template>
	<view class="">
		<mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback" >
			<view class="wrapper">
				<u-navbar :auto-back="true" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent" title="人气投票">
				</u-navbar>
			</view>
	
			
		<view class="ml15 mr15 mt15 ">
			<yd-product-more :showType="showType" :product-list="productList" :more-status="moreStatus"
				 @handleProdItemClick='onchangeItem'></yd-product-more>
		
		</view>
			</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import * as Api from '@/api/competition/list.js';
	export default{
		mixins: [MescrollMixin], // 使用mixin
		data(){ 
		return{
		 	showType: 'imglist',
			productList: [],
			moreStatus: 'nomore',
			tagList:[]
		}
		},
		methods:{
			upCallback(page) {
				let pageNum = page.num;
				let pageSize = page.size;
				Api.getList({
					pageNo: pageNum,
					pageSize
					// categoryId:this.categoryId
			
				}).then(res => {
			
					console.log(res.data.list)
					let curPageData = res.data.list
					let curPageLen = curPageData.length;
					let totalPage = res.data.total
					if (page.num == 1) this.productList = [];
					this.productList = this.productList.concat(curPageData);
					this.mescroll.endByPage(curPageLen, totalPage);
				})
			},
			onchangeItem(item) {
				console.log(item)
				uni.$u.route('/pages/home/vote/details', {
					id: item
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper{
		background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/demoBg.png');
		background-size: 100% 100%;
		height: 330rpx;
	}
</style>