<template>
	<view class="container" >
		<mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback" :up='upOption'>
			<view class="wrapper">
				<view>
					<u-navbar leftIcon=' ' :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
						bgColor="transparent">
						<view slot="left">
							<view class="search-wrap" @click="handleSearchClick">
								<u-search inputAlign='center' bgColor='#fff' placeholderColor='#CCCCCC'
									searchIconColor='#F9A4C3' placeholder="搜索赛事名称" disabled
									:show-action="false"></u-search>

							</view>
						</view>
					</u-navbar>
				</view>


				<view class="screening">
					<view class="pt10 pb10">
						<view class="selects">
							<JQ-orderBy @switchSort="switchSort"></JQ-orderBy>
						</view>
						<view>
							<u-tabs :list="filterList" lineWidth="20" lineHeight="7"
							@click="tabItem"
								:lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
						          color: '#EB3D74',
						          fontWeight: 'bold',
								  fontSize:'16px',
						          transform: 'scale(1.05)',
								 
						      }" :inactiveStyle="{
						          color: '#8F91A1',
						          transform: 'scale(1)'
						      }" itemStyle="padding-left: 20px; padding-right: 20px; height: 50px;">
							</u-tabs>
						</view>
					</view>



				</view>

			</view>

			<view class="flex ml15 mr15 mt30 mb20 alcenter space">
				<view class="flex alcenter ">
					<u--image :showLoading="true"
						src="https://marathon.zznet.live/file/uploadPath/image/competition/bannner.png" width="14px"
						height="21px"></u--image>
					<view class="ft18 ftw600 ml10">赛事列表<text
							style="color: #AEAEAE;font-size: 14px;font-weight: 400;">(12场)</text></view>
				</view>

				<view class="flex">
					<view class="ztab" :class="isbg ==0?'zbofore':''" @click="onTab(0)">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/t1.png" width="12px"
							height="12px"></u--image>
					</view>
					<view class="ztab1" :class="isbg ==1?'zbofore':''" @click="onTab(1)">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/t2.png" width="12px"
							height="12px"></u--image>
					</view>
				</view>
			</view>
			<!-- 标签 -->

			<view class="ml15 mr15 mt15 ">
				<yd-product-more :showType="showType" :product-list="productList" :more-status="moreStatus"
					:u_tagList='tagList' @handleProdItemClick='onchangeItem'></yd-product-more>

			</view>
			<view>
		
			
				 <u-back-top :scroll-top="scrollTop" top="100" bottom='300' >
					<u--image :showLoading="true"
					 	src="https://marathon.zznet.live/file/uploadPath/image/competition/fx.png" width="39px"
					 	height="39px"></u--image>
					 <u--image :showLoading="true"
					 	src="https://marathon.zznet.live/file/uploadPath/image/competition/dw.png" width="39px"
					 	height="39px"></u--image>
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/competition/zd.png" width="39px"
							height="39px" @click='clickZb'></u--image>
							
				 </u-back-top>
			</view>
       
			<u-popup :show="show" mode="right" @close="close" @open="open" :customStyle='centenStyle'>
				<view class="ml10 mt30 mr10">
					<view>
						<text class="ftw600">赛事状态</text>
						<view class="flex wrap space mt14">
							<view class="tag-item" v-for="(item, index) in slist" :key="index">
								<u-tag :text="`选项${index + 1}`" :plain="!item.checked" :name="index" @click="itemClick">
								</u-tag>

							</view>

						</view>

						<text class="ftw600">赛事时间</text>
						<view class="flex wrap space mt14">
							<view class="tag-item" v-for="(item, index) in slist" :key="index">
								<u-tag :text="`选项${index + 1}`" :plain="!item.checked" :name="index" @click="itemClick">
								</u-tag>

							</view>

						</view>
						<text class="ftw600">地区</text>
						<view class="flex wrap space mt14">
							<view class="tag-item" v-for="(item, index) in slist" :key="index">
								<u-tag :text="`选项${index + 1}`" :plain="!item.checked" :name="index" @click="itemClick">
								</u-tag>

							</view>

						</view>
						<text class="ftw600">排名</text>
						<view class="flex wrap space mt14">
							<view class="tag-item" v-for="(item, index) in slist" :key="index">
								<u-tag :text="`选项${index + 1}`" :plain="!item.checked" :name="index" @click="itemClick">
								</u-tag>

							</view>

						</view>
					</view>
					<view class="flex space mt60">
						<u-button :customStyle='btnStyle' type="info" shape="circle" text="重置"></u-button>
						<u-button :customStyle='btnStyle' type="error" shape="circle" text="确定"></u-button>
					</view>
				</view>
			</u-popup>

		</mescroll-body>
	</view>
</template>

<script>
	import * as Api from '@/api/competition/list.js';
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";

	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				scrollTop: 0,
				isbg: 0,
				radios: [{
						checked: true,
						icon: 'list-dot'
					},


					{
						checked: false,
						icon: 'https://marathon.zznet.live/file/uploadPath/img/alist.png'
					},

				],
				btnStyle: {
					width: '200rpx'
				},
				slist: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					},

				],
				 upOption: {
				          toTop: {
				            
				            // 设置为 false 即可关闭回到顶部按钮
				            src: ''
				          }
						  },
				show: false,
				centenStyle: {
					top: '40px'
				},
				categoryId:'',
				lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
				filterList: [],
				// 如果顶部还有内容，且需要吸顶效果，可以传入needSticky
				needSticky: false,
				showType: 'imglist',
				productList: [],
				tagList: [
			
				],
				sortList: [{
					text: '按照价格排序1',
					value: ['acs', 'desc'],
				}, {
					text: '按照编号排序',
					value: ['acs', 'desc'],
				}],
				sortStyle: ['#ff557f', '#3f3f3f'],
				moreStatus: 'nomore'
			}

		},
		onLoad() {
			this.getTabList()
		},
		methods: {
			onPageScroll(e) {
		
					this.scrollTop = e.scrollTop;
				},
				clickZb(){
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 100
					});
					
				},
				tabItem(item){
					console.log(item)
					this.categoryId = item.id
					this.mescroll.resetUpScroll()
				},
			getTabList(){
				Api.getTabList().then(res=>{
				
					this.filterList = res.data
					this.categoryId = res.data[0].id
				})
			},
			onTab(num){
				this.isbg = num
				if(num == 0){
					this.showType = 'imglist'
				}else{
					this.showType = 'list'				}
			},
			switchSort(index, value) {
				
			},
			upCallback(page) {
				let pageNum = page.num;
				let pageSize = page.size;
				Api.getList({
					pageNo: pageNum,
					pageSize,
					categoryId:this.categoryId

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
	
			itemClick(name) {
				this.slist.map((item, index) => {
					item.checked = index === name ? true : false
				})
				name == 0 ? this.showType = 'imglist' : this.showType = 'list'
			},
			onchangeItem(item) {
				console.log(item)
				uni.$u.route('/pages/subCompetition/competition/details', {
					id: item
				})
			},


			handleSearchClick(e) {
				uni.$u.route('/pages/search/search')
			},

			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},


		}
	}
</script>

<style lang="scss" scoped>
	.search-wrap {
		background: transparent;
		padding: 20rpx;
		@include flex-space-between;
	}

	.screening {
		background-color: #fff;
		margin: 20rpx;
		border-radius: 8rpx;

		.selects {
			margin: 0 40rpx;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #F1F1F1;
		}
	}

	.wrapper {
		// background-image: url('https://marathon.zznet.live/file/uploadPath/img/bg.png');
		// background-size: cover;
	}

	.tag-item {
		width: 27%;
		margin-bottom: 20rpx;
		height: 58rpx;
	}

	.ztab {
		background-color: #fff;
		padding: 15rpx;
		border-top-left-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
	}

	.ztab1 {
		background-color: #fff;
		padding: 15rpx;
		border-top-right-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		
	}

	.zbofore {
		background-color: #eee;
	}

</style>