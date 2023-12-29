<template>
	<view class="container">
		<view class="ml15 mr15">
		
			<view class="ft16 ftw600 pt12 mb10">2023 厦门日出女子跑-鼓浪屿</view>
			<view class="ft12 mb16">2022-02-21 14：00</view>
			<view>
				<u--image :showLoading="true" src="https://cdn.uviewui.com/uview/album/1.jpg" width="100%"
					height="286rpx" @click="click"></u--image>
			</view>
			<view class="mt14">
			 <u--text :lines="3" text="王海燕、林高级、八行书、王一迪、好的哈、德维尔、纷纷为、王海燕、林高级、八行书、王一迪、好的哈、德维尔、纷......王海燕、林高级、八行书、王一迪、好的哈、德维尔、纷纷为、王海燕、林高级、八行书、王一迪、好的哈、德维"></u--text>
			</view>
         
			
			<view class="footer">
				<view class="flex  alcenter">
					<view class="ipt">
						<u--input inputAlign='center' placeholder="发表评论" border="surround" v-model="value" @change="change"></u--input>
					</view>
					<view class="icons">
						<u-icon name="star" size='25'></u-icon>
						<u-icon name="share-square" size="25" style="margin-left: 34rpx;"></u-icon>
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
				value: ''
			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		position: fixed;
		bottom: 20rpx;
		.icons{
		  margin-left: 113rpx;
		  display: flex;
		}
	.ipt {
		width: 352rpx;
		height: 88rpx;
	}
	}


</style>