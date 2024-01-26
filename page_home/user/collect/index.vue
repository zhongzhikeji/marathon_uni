<template>
	<view>
		<view class="bg-w pt20">
			<view class="flex center">
				<u-tabs :list="list" @click="click"
					itemStyle="padding-left: 30px; padding-right: 30px; height:44px"></u-tabs>
			</view>
		</view>
		<view class="ml10 mr10 mt20" v-show="isshow ==0">
		<yd-product-more :showType="showType" :product-list="productList" :more-status="moreStatus"
			:u_tagList='tagList' @handleProdItemClick='onchangeItem'></yd-product-more>
		</view>
		<view class="ml10 mr10 mt20" v-show="isshow ==1">
	<yd-product-more :showType="showType" :product-list="productList" :more-status="moreStatus"
		:u_tagList='tagList' @handleProdItemClick='onchangeItem'></yd-product-more>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
			list: [{
					name: '赛事'
				},
				{
					name: '商品'
				}
			],
			isshow:0,
			
			showType:'collctList',
			productList: [{
					id: 1,
					image: 'https://cdn.uviewui.com/uview/album/1.jpg',
					title: '山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。',
					desc: '2022-02-21 14:00',
					price: '厦门环岛'
				},
				{
					id: 2,
					image: 'https://cdn.uviewui.com/uview/album/2.jpg',
					title: '商品222',
					desc: '山不在于高，有了神仙就会有名气。水不在于深',
					price: '23.00'
				},
				{
					id: 3,
					image: 'https://cdn.uviewui.com/uview/album/3.jpg',
					title: '商品333',
					desc: '商品描述信息2',
					price: '33.00'
				},
				{
					id: 4,
					image: 'https://cdn.uviewui.com/uview/album/4.jpg',
					title: '商品444',
					desc: '商品描述信息4',
					price: '43.00'
				},
				{
					id: 5,
					image: 'https://cdn.uviewui.com/uview/album/5.jpg',
					title: '商品555',
					desc: '商品描述信息5',
					price: '53.00'
				}
			],
			moreStatus: 'nomore',
			tagList: [{
					text: '标签1'
				},
				{
					text: '标签2'
				}
			],
			}
		},
		methods:{
			onchangeItem(item){
				console.log(item)
			
			},
			click(item){
				if(item.index ==0){
					this.isshow =0
					this.showType = 'collctList'
				}else{
					this.isshow = 1
					this.showType = 'priceList'
				}
			}
		}
	}
</script>

<style>
</style>