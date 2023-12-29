<template>
	<view>
		<view class="prod-block list">
			<view v-if="showType == 'imglist'">
				<view class="prod-list1" v-for="(item,index) in productList" :key="item.id" :class="{list1: item.categoryColor == 1,
				list2: item.categoryColor == 2,
				list3: item.categoryColor == 3,
				list4: item.categoryColor == 4,
				list5: item.categoryColor == 5,
				list6: item.categoryColor == 6,
				list7: item.categoryColor == 7,
				}">
					<view class="flex space alcenter">
						<text class="btitle" :class="{btitle1: item.categoryColor ==1,btitle2: item.categoryColor ==2,btitle3: item.categoryColor ==3,
						btitle4: item.categoryColor ==4,
						btitle5: item.categoryColor ==5,
						btitle6: item.categoryColor ==6,
						btitle7: item.categoryColor ==7,
						}">{{item.categoryName}}</text>
						<view class="mr10" :class="{onflex: index == 0}">
							<view  v-show="index == 0" class="mr5" @click.stop="swapItems(index)">
								<u-icon name="https://marathon.zznet.live/file/uploadPath/image/competition/zhiding.png" color="#CCCCCC" size="13"></u-icon>
							</view>
							
							<u-icon name="close" color="#CCCCCC" size="16"  @click="onDelete(index)"></u-icon>
						</view>

					</view>
					<view style="color: #8F91A1; margin-right: 20rpx;">
				<u-count-down :time="(item.joinStartTime - isData)" format="DD:HH:mm:ss" autoStart millisecond @change="onChange">
					   
					
						<view class="flex alcenter end">
							<view>报名倒计时:</view>
							<text style="color: #EB3D74;">{{ timeData.days }}</text>
							<text>天</text>
					
					
				
				
				
				
					</view>
				</u-count-down>
					
					</view>
					<view class="prod-item1" @click="handleProdItemClick(item.id)">
						<view class="prod-tion flex">
							<image :src="item.picUrl" class="prod-img"></image>
							<view class="statuse" :class="{status1: item.meetStatus == 0,status2: item.meetStatus == 1,status3: item.meetStatus == 2,status4: item.meetStatus == 3,status5: item.meetStatus == 4,status6: item.meetStatus == 5,status7: item.meetStatus == 6,status8: item.meetStatus == 7}">
								<text class="test">{{statusText(item)}}</text>
								
							</view>

						</view>
						<view class="item-info">
							<view class="info-text">
								<u--text :lines="1" size="14px" color="#333333" :bold='true'
									:text="item.title"></u--text>
								<u-gap height="5px"></u-gap>
								<view class="flex alcenter ml5 mb5" style="color: #8F91A1;">
									<view class="tradius tradiusColor"></view>
									
									{{formatDate(item.startTime)}}
								</view>
								<view class="flex alcenter ml5 ">
									<view class="tradius tradiusColorb"></view>
									<u--text class="info-desc" :lines="1" size="12px" color="#8F91A1"
										:text="item.area"></u--text>
								</view>

								<u-gap height="5px"></u-gap>
							

							</view>
							<view class="flex mt5 ">

								<view v-for="(k,index) in item.keyword">
									<view class="tagList" :class="{blueBackground: index === 0,rBackground: index === 1,yBackground: index === 2}">{{k}}</view>

								</view>



							</view>

						</view>
					</view>
				</view>
			</view>
			<view v-if="showType == 'collctList'">
				<view class="prod-list" v-for="item in productList" :key="item.id">
					<view class="prod-item" @click="handleProdItemClick(item.id)">
						<image class="prod-image" :src="item.image"></image>
						<view class="item-info">
							<view class="info-text">
								<u--text :lines="1" size="14px" color="#333333" :bold='true'
									:text="item.title"></u--text>
								<u-gap height="5px"></u-gap>
								<view class="flex">
									<text>时间：</text>
									<u--text class="info-desc" :lines="1" size="12px" color="#000"
										:text="item.desc"></u--text>
								</view>

								<u-gap height="5px"></u-gap>
								<view class="flex">
									<text>地点：</text>
									<u--text class="info-desc" :lines="1" size="12px" color="#000"
										:text="item.price"></u--text>
								</view>
							</view>
							<view class="flex mt10 space">
								<view class="flex">
									<view class="u-page__tag-item " v-for="item in u_tagList">
										<u-tag size="mini" :text="item.text" plain type="info"> </u-tag>

									</view>
								</view>

								<view>
									<u-button size="mini" shape="circle" color='#DA1984'
										style="color:#fff;height: 30px;">取消收藏</u-button>
								</view>
							</view>

						</view>
					</view>
				</view>
			</view>
			<view v-if="showType == 'priceList'">
				<view class="prod-list" v-for="item in productList" :key="item.id">
					<view class="prod-item" @click="handleProdItemClick(item.id)">
						<image class="prod-image" :src="item.image"></image>
						<view class="item-info">
							<view class="info-text">
								<u--text :lines="1" size="14px" color="#333333" :bold='true'
									:text="item.title"></u--text>
								<u-gap height="5px"></u-gap>

							</view>
							<view class="flex  ">

								<view class="u-page__tag-item " v-for="item in u_tagList">
									<u-tag size="mini" :text="item.text" plain type="info"> </u-tag>

								</view>

							</view>
							<view class="flex space alcenter mt10">
								<view>￥ 299.0</view>
								<view>
									<u-button size="mini" shape="circle" color='#DA1984'
										style="color:#fff;height: 30px;">取消收藏</u-button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="showType == 'list'">
				<view class="prod-list" v-for="item in productList" :key="item.id">
					<view class="prod-item" @click="handleProdItemClick(item.id)">

						<view class="">
							<view class="info-text">
								<view class="flex">
									<view class="bmz">{{statusText(item)}}</view>
									<u--text :lines="1" size="14px" color="#333333" :bold='true'
										:text="item.title"></u--text>
								</view>


								<view class="info_add">
									<view>{{item.area}}</view>
									<u-line direction="col" length="10px" color="#dddddd" margin="0 20rpx"></u-line>
									<view>{{formatDate(item.startTime)}}</view>
								</view>


							</view>
							<view class="flex mt10">
								<view class="u-page__tag-item " v-for="item in u_tagList">
									<u-tag size="mini" :text="item.text" plain type="info"> </u-tag>

								</view>
							</view>

						</view>
					</view>
				</view>
			</view>
		</view>

		<!--加载更多-->
		<u-loadmore fontSize="28rpx" :line="true" :status="moreStatus" :loading-text="loadingText"
			:loadmore-text="loadmoreText" :nomore-text="nomoreText" />

	</view>
</template>

<script>
	import dayjs from '@/plugin/dayjs/dayjs.min.js';
	/**
	 * 商品列表(加载更多)
	 */
	export default {
		name: 'yd-product-more',
		computed: {
			statusText() {

				return (item) => {
					switch (item.meetStatus) {

						case 0:
							return '未开始';
						case 1:
							return '预报名';
						case 2:
							return '报名中';
						case 3:
							return '抽签中';
						case 4:
							return '比赛中';
						case 5:
							return '比赛结束';
						case 6:
							return '比赛延期';
						case 7:
							return '比赛取消';

					}

				}
			}
		},
		components: {},
		emits: ['handleProdItemClick'],
		props: {
			title: {
				type: String,
				default: '商品推荐'
			},
			showType: {
				type: String,
				default: 'normal'
			},
			productList: {
				type: Array,
				default: () => []
			},
			u_tagList: {
				type: Array,
				default: () => []
			},
			moreStatus: {
				type: String,
				default: 'nomore'
			}
		},
		data() {
			return {
				isData:new Date().getTime(),
				timeData:{},
				//status: 'nomore',
				loadingText: '加载中...',
				loadmoreText: '上拉加载更多',
				nomoreText: '已经到底了'
			}
		},
		methods: {
			handleProdItemClick(productId) {
				this.$emit('handleProdItemClick', productId);
				// uni.$u.route('/pages/product/product', {
				// 	id: productId
				// })
			},
			formatDate(date) {

				return dayjs(date).format("YYYY-MM-DD");
			},
			onDelete(index){
				this.productList.splice(index,1)
			},
			onChange(e) {
			
				this.timeData = e
			},
			swapItems(index){
				if(index < this.productList.length -1){
					   const currentObject = this.productList[index];
					      this.productList.splice(index, 1);
					           this.productList.splice(index + 1, 0, currentObject);
						 
				}
			}
		},

	}
</script>
<style lang="scss" scoped>
	.prod-block {
		margin-top: 0;

		.bloc-header {
			margin-top: 50rpx;
			margin-bottom: 20rpx;

			.bloc-title {
				margin-left: 20rpx;
				color: #333333;
			}
		}

		.prod-list {
			.prod-item {
				background: #ffffff;
				display: flex;
				border-bottom: $custom-border-style;
				padding: 20rpx;
				margin-bottom: 20rpx;
				border-radius: 15rpx;

				.prod-image {
					width: 300rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}

				.prod-img {
					width: 240rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}

				.item-info {
					flex: 1;
					margin-left: 20rpx;

					.info-text {

						padding-bottom: 10rpx;
					}


				}
			}
		}
	}
    .list1{	border-right: 7px solid #F91EB7;}
	.list2{	border-right: 7px solid #3274FF;}
	.list3{	border-right: 7px solid #F5981D;}
	.list4{	border-right: 7px solid #EB3D74;}
	.list5{	border-right: 7px solid #F5B129;}
	.list6{	border-right: 7px solid #22E87E;}
	.list7{	border-right: 7px solid #000;}
	.prod-list1 {
		background: #ffffff;
		border-radius: 15rpx;
		

		.btitle {
			display: inline-block;
			padding: 10rpx 20rpx;
		
			border-top-left-radius: 15rpx;
			border-bottom-right-radius: 30rpx;
		
			font-weight: bold;
		}
       .btitle1{
		   background-color: #FEC9EE;
		   color: #FA36BF;
	   }
	   .btitle2{
	   		   background-color: #CCDDFF;
	   		   color: #3274FF;
	   }
	   .btitle3{
	   		   background-color: #FDF0C8;
	   		   color: #F5981D;
	   }
	   .btitle4{
	   		   background-color: #FAD0DE;
	   		   color: #EB3D74;
	   }
	   .btitle5{
	   		   background-color: #FFF6D9;
	   		   color: #F5B129;
	   }
	   .btitle6{
	   		   background-color: #CAFAE0;
	   		   color: #22E87E;
	   }
	   .btitle7{
	   		   background-color: #000;
	   		   color: #fff;
	   }
		.prod-item1 {
			padding: 20rpx;
			border-bottom: $custom-border-style;
			display: flex;
			margin-bottom: 20rpx;

			.prod-image {
				width: 300rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}

			.prod-img {
				width: 240rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}

			.item-info {
				flex: 1;
				margin-left: 20rpx;

				.info-text {

					padding-bottom: 10rpx;
				}


			}
		}
	}

	.u-page__tag-item {
		margin-right: 20rpx;

	}

	.bmz {
		margin-right: 10rpx;
		background-color: #f40;
		font-size: 24rpx;
		padding: 5rpx 8rpx;
		color: #fff
	}

	.info_add {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		padding: 20rpx;
		background-color: #f0f6fe;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.prod-tion {
		position: relative;

		.statuse {
			position: absolute;
			top: 15rpx;
			left: -5px;
			width: 86rpx;
			height: 52rpx;
			color: #fff;
			font-size: 24rpx;
			background-size: contain;
			
			.test{
				display: inline-block;
				width: 100%;
				height: 100%;
				margin-left: 5%;
				margin-top: 5%;
			}
			
		}
		.status1{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z1.png');
		}
		.status2{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z2.png');
		}
		.status3{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z3.png');
		}
		.status4{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z4.png');
		}
		.status5{
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z5.png');
		}
		.status6{
			width: 120rpx;
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z6.png');
		
		}
		.status7{
			width: 120rpx;
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z7.png');
		
		}
		.status8{
			width: 120rpx;
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z8.png');
		
		}
	}

	.tradius {
		width: 8rpx;
		height: 8rpx;
		border-radius: 50%;
		margin-right: 16rpx;

	}

	.tradiusColor {
		background: #EB3D74;
	}

	.tradiusColorb {
		background: #2D71FF;
	}

	.tagList {
		font-size: 24rpx;
		
		padding: 10rpx 18rpx;
		margin-right: 10rpx;
		border-radius: 8rpx;
	}
	.blueBackground{
		background-color: #E1F9FF;
		color: #19C9F6;
	}
	.rBackground{
		background-color: #FFDCE7;
		color: #EB3D74;
	}
	.yBackground{
		background-color:#FFF6D9 ;
		color: #F4A70E;
	}
	//马拉松
	.tbg1{
		background-color: #FEC9EE;
		color: #F91EB7;
	}
	//线上
	.tbg2{
		background-color: #CCDDFF;
		color: #2D71FF;
	}
	//越野
	.tbg3{
		background-color: #FDF0C8;
		color: #F5961B;
	}
	//铁人
	.tbg4{
		background-color: #FAD0DE;
		color: #EB4278;
	}
	//欢乐跑
	.tbg4{
		background-color: #CAFAE0;
		color: #4DED97;
	}
	//其他
	.tbg4{
		background-color: #E8CAFA;
		color: #A722E8;
	}
	.onflex{
		display: flex;
		align-items: center;
	}
</style>