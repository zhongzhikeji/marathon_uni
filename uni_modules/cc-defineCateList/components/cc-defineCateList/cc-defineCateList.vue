<template>

	<view>
		<view class="cateBox">
			<!-- 左侧列表 -->
			
			<scroll-view class="cate-left" scroll-y="true" >
				<view class="cate-left-list" v-for="(item,index) in parentList" :key="index" @click="tapselect(item,index)">
					<!-- activeItem为选中状态 -->
					<view class="cate-left-item " :class="{activeItem:currentTab==index}">
						<label></label><text>{{item.name}}</text>
					</view>
				</view>
			</scroll-view>

			<!-- 右侧列表 -->
			<scroll-view class="cate-right" scroll-y="true" >
				<view v-for="(item,index) in data" :key="index" :id="'cate-'+index">
					<view class="cate-right-title">
						
						<text>{{item.name}}</text>
					</view>
					<view class="cate-right-list">
						<view class="flex" v-for="(child,childindex) in item.products" :key="childindex"
							@click="itemClick(child)">
							<u--image :showLoading="true" :src="child.spuPicUrl" width="101px" height="101px"  ></u--image>
							
							<view class="flex cloum space flex1 ">
								<view>	<u--text :lines="1" :text="child.spuName"></u--text></view>
							
								
									<view class="flex">
										<view  v-for="(tag,index) in child.tags" class="ml5">
											<view :class="index ==0?'tagsColor':'tagsColorY'">{{tag}}</view>
												    
										</view>
									</view>
								
									<view class="flex alcenter space">
										<view>￥{{fen2yuan(child.price)}}</view>
										<view class="add " @click="itemList(child)">
											<view>+</view>
										</view>
									</view>
							</view>
						
						</view>
					</view>
				</view>
				
				<view style="height: 100px;"></view>
			</scroll-view>
		</view>



	</view>

</template>

<script>
	import * as Util from '@/utils/util.js';
	export default {
	
		props: {

			data: {
				type: Array,
				default () {
					return []
				}
			},
	parentList: {
				type: Array,
				default () {
					return []
				}
			}

		},
		data() {
			return {
				currentTab: 0,
				mainCur: 0,
				verticalNavTop: 0,
				list: [{}],

			}
		},
		mounted() {
		
		},
		methods: {
			itemClick(item) {

				this.$emit('click', item)

			},
			itemList(item){
					this.$emit('product', item)
			},
			fen2yuan(price) {
				return Util.fen2yuan(price)
			},
			//点击左侧按钮
			tapselect(item,index) {
				this.currentTab = index;
			     this.$emit('tapselect', item,)
			},
	
		}


	}
</script>

<style>
	.cateBox {
		position: absolute;
		top: 10rpx;
		bottom: 0;
		background: #fff;
		width: 100%;
		display: flex;
	}

	.cate-left {
		width: 200rpx;
		background: #f4f4f4;
		height: 100%;
	}

	.cate-left-item {
		background: #f4f4f4;
		height: 50px;
		display: flex;
		align-items: center;
	}

	.cate-left-item.activeItem {
		background: #fff;
		color: #EB3D74;
	}

	.cate-left-item label {
		width: 4rpx;
		height: 20px;
		float: left;
		background: #f4f4f4;
	}

	.cate-left-item.activeItem label {
		background: #EB3D74;
	}

	.cate-left-item text {
		width: 196rpx;
		font-size: 28rpx;
		display: block;
		text-align: center;
	}

	/* 右侧*/
	.cate-right {
		flex: 1;
	}

	.cate-right-title {
		
		font-size: 28rpx;
		margin-top: 20rpx;
		line-height: 80rpx;
		position: relative;
	}

	.cate-right-title .line {
		position: absolute;
		height: 2rpx;
		width: 300rpx;
		background: orange;
		top: 39rpx;
		left: 50%;
		margin-left: -150rpx;
	}

	.cate-right-title text {
		background: #fff;
		padding: 0 10px;
		position: relative;
		color: #999;
	}

	.cate-right-list {
		height: auto;
		overflow: hidden;
	}



	.cate-right-list image {
		width: 202rpx;
		height: 202rpx;
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
	.add{
		width: 34rpx;
		height: 34rpx;
		background: #EB3D74;
		border-radius: 50%;
		box-shadow: 0rpx 0rpx 12rpx 2rpx rgba(235,61,116,0.33);
		margin-right: 20rpx;
	}
	.add view{
	text-align: center;
	line-height: 34rpx;
	color: #fff;
	}
</style>