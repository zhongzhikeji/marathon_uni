<template>
	<view>
		<view v-if="showType === 'front'">
			<u-gap height="180"></u-gap>
			<view class="prod-block" style="background-color: #fff;">
				<view class="bloc-header">
					<view class="flex alcenter">
						<text class="front-title">{{title}}</text>
						<text style="margin: 0 20rpx;">|</text>

					</view>
					<text class="see-more">查看更多 &gt;</text>

				</view>
				<u-scroll-list :indicator='false'>
					<view v-for="item in productList"  class="front_card">
						<image :src="item.image" class="front_img"></image>
						<view>
							<view class="info-text">
								<u--text :bold='true' :lines="2" size="12px" color="#333333"
									:text="item.title"></u--text>
							</view>

						</view>
					</view>
				</u-scroll-list>
				<view class="front-ul">
					<view class="wrapper">
						<view class="item">
							<text class="circle"></text>
							<u--text :lines="1" size="12px" color="#333333" text="报名就送浪漫粉参赛服!“牡丹江”奖牌"></u--text>
							<text class="date">6-28</text>
						</view>
						<view class="item">
							<text class="circle"></text>
							<u--text :lines="1" size="12px" color="#333333" text="报名就送浪漫粉参赛服!“牡丹江”奖牌"></u--text>
							<text class="date">6-28</text>
						</view>
						<view></view>
						<view></view>
					</view>

				</view>
			</view>
		</view>
		<view v-if="showType === 'recmon'">
			<u-gap height="180"></u-gap>
			<view class="prod-block" style="background-color: #fff;">
				<view class="bloc-header">
					<view>
						<text class="front-title">{{title}}</text>

					</view>
					<text class="see-more">查看更多 &gt;</text>

				</view>
				<u-scroll-list :indicator='false'>
					<view v-for="item in productList"  class="front_card">
						<image :src="item.image" class="front_img"></image>
						<view>
							<view class="info-text">
								<u--text :bold='true' :lines="2" size="14px" color="#333333"
									:text="item.title"></u--text>
								<u--text :bold='true' :lines="1" size="12px" color="#969698" :text="item.desc"
									style="margin:10rpx 0;"></u--text>
								<u--text :bold='true' :lines="1" size="12px" color="#969698"
									text="2023.02.21 08:00"></u--text>
							</view>

						</view>
					</view>
				</u-scroll-list>

			</view>
		</view>
		<view v-if="showType === 'half'">
			<view class="prod-block half" style="background-color: #fff;">
				<view class="bloc-header">
					<text class="bloc-title">{{title}}</text>
					<text class="more">查看全部 &gt;</text>
				</view>
				<u-scroll-list :indicator='false'>
					<view v-for="item in productList"  class="price_card">
						<image :src="item.image" class="prod_image"></image>
						<view class="item-info">
							<view class="info-text">
								<u--text :lines="2" size="14px" color="#333333" :text="item.title"></u--text>
								<!--    <u--text :lines="1" size="12px" color="#939393" :text="item.desc"></u--text> -->
							</view>
							<view class="price-and-cart">
								<yd-text-price color="red" size="12" intSize="18" :price="item.price"></yd-text-price>
								<u-icon name="shopping-cart" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
					</view>
				</u-scroll-list>

			</view>
		</view>
		<view v-if="showType === 'mail'">
			<view class=" half flex wrap pt10 space ml10 mr10">
				<view v-for="item in productList"  class="price_card " style="width: 47%;" @click="onClickDetails(item.id)">
					<image :src="item.picUrl" style="width: 100%;height: 300rpx;   border-top-left-radius:15rpx;
		   border-top-right-radius: 15rpx;"></image>
					<view class="item-info">
						<view class="info-text">
							<u--text :lines="2" size="14px" color="#333333" :text="item.name"></u--text>
						     <view class="flex mt10">
						     	<view class="u-page__tag-item " v-for="(tag,index) in item.tags" >
									<view :class="index ==0?'tagsColor':'tagsColorY'">{{tag}}</view>
						    
						     	</view>
						     </view>
						</view>
						<view class="price-and-cart">
							<yd-text-price color="#EB3D74" size="12" intSize="18" :price="fen2yuan(item.price)"></yd-text-price>
						
						</view>
					</view>
				</view>


			</view>
		</view>
	</view>
</template>

<script>
	import * as Util from '@/utils/util.js';
	/**
	 * 商品列表
	 */
	export default {
		name: 'yd-product-box',
		components: {},
		props: {
			showType: {
				type: String,
				default: 'normal'
			},
			title: {
				type: String,
				default: '商品推荐'
			},
			productList: {
				type: Array,
				default: () => []
			},
		},
		computed: {},
		methods: {
			// handleProdItemClick(productId) {
			// 	uni.$u.route('/pages/product/product', {
			// 		id: productId
			// 	})
			// },
			onClickDetails(productId){
				uni.$u.route('/pages/subCompetition/mail/product', {
					id: productId
				})
			},
			fen2yuan(price) {
				return Util.fen2yuan(price)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.prod-block {
		margin-top: -160px;
		margin-left: 35rpx;
		margin-right: 35rpx;
		padding-bottom: 20rpx;

		.bloc-header {
			@include flex-space-between;
			padding: 20rpx 20rpx;

			.bloc-title {
				color: $custom-bg-color;
				font-size: 34rpx;
				font-weight: bold;
			}

			.see-more {
				font-size: 24rpx;
				color: #bfbfbf;
			}
		}

		&.half {
			margin-top: 0;

			.bloc-header {
				margin-top: 50rpx;
				margin-bottom: 20rpx;

				.bloc-title {
					color: #333333;
				}

				.more {
					font-size: 24rpx;
					color: #bfbfbf
				}
			}
		}


	}

	.price_card {
	margin: 20rpx 10rpx;
    box-shadow: 0px 4px 3px 2px #E5E5E5;

		border-radius: 15rpx;

		.item-info {
			padding: 0 10rpx;

		}

		.prod_image {
			width: 300rpx;
			height: 300rpx;

		}

		.price-and-cart {
			@include flex-space-between;
			padding: 10rpx 6rpx;
		}
	}

	.front_card {
		.front_img {
			margin: 0 15rpx;
			width: 270rpx;
			height: 170rpx;
			border-radius: 10rpx;
		}

		.info-text {
			margin: 0 20rpx;
			font-size: 24rpx;
			font-weight: bold;
		}
	}

	.front-title {

		font-size: 34rpx;
		font-weight: bold;
		color: #000
	}

	.front-ul {
		margin: 0 20rpx;
		height: 300rpx;
		background-color: #fef9fc;

		border-radius: 20rpx;

		.wrapper {
			height: 100%;

			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20rpx;

				.circle {
					width: 10rpx;
					/* 圆点的宽度 */
					height: 10rpx;
					/* 圆点的高度 */
					background-color: #000;
					/* 圆点的颜色 */
					border-radius: 50%;
					/* 将元素变成圆形 */
					margin: 0 20rpx;
				}

				.date {
					margin-right: 20rpx;
				}

				text {
					font-size: 28rpx;
				}
			}

		}
	}
	.u-page__tag-item {
		margin-right: 20rpx;

	}
	.tagsColor{
		font-size: 24rpx;
		background: #FFF2F6;
		border-radius: 6rpx 6rpx 6rpx 6rpx;
		padding: 5rpx 8rpx;
		border: 1rpx solid #EB3D74;
		color: #EB3D74;
	}
	.tagsColorY{
		font-size: 24rpx;
	background: #FFF1E2;
		border-radius: 6rpx 6rpx 6rpx 6rpx;
		padding: 5rpx 8rpx;
		border: 1rpx solid #F5881A;
		color: #F5881A;
	}
</style>
