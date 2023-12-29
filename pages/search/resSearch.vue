<template>
	<view class="container">
		<u-navbar bgColor='#f5f5f5' title="搜索结果" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
			:autoBack="true">
		</u-navbar>
		<view class=" pl10 pr10 pb10">
			<u-search bgColor='#fff' :actionStyle="{color:'#EB3D74'}" searchIconColor='#EB3D74' :showAction="true" actionText="搜索" :animation="false"  placeholder="马拉松"></u-search>
		</view>
		<view class="pt20 pb20 bg-w">
			<u-line></u-line>
		</view>
        <view>
			
		</view>
	

		<view class="ml15 mr15 mt15 ">
			<yd-product-more :showType="showType" :product-list="productList" :more-status="moreStatus"
				:u_tagList='tagList'></yd-product-more>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				radios: [{
						checked: true,
						icon: 'list-dot'
					},
					{
						checked: false,
						icon: 'https://marathon.zznet.live/file/uploadPath/img/alist.png'
					},

				],
				showType: 'imglist',
				moreStatus: 'nomore',
				tagList: [{
						text: '标签1'
					},
					{
						text: '标签2'
					}
				],
				productList: [{
						id: 1,
						image: 'https://cdn.uviewui.com/uview/album/1.jpg',
						title: '山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。',
						desc: '山不在于高，有了神仙就会有名气。水不在于深，有了龙就会有灵气。这是简陋的房子，只是我品德好就感觉不到简陋了。',
						price: '13.00'
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
				]
			}
		}
	}
</script>

<style>
</style>