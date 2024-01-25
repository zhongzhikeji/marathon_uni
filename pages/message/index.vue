<template>
	<view class="container">
			<view>
		        <u-navbar leftIcon=' ' :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
						bgColor="transparent">
						<view slot="left">
							<view class="search-wrap" @click="handleSearchClick">
								<u-search inputAlign='center' bgColor='#fff' placeholderColor='#CCCCCC'
									searchIconColor='#F9A4C3' placeholder="搜索资讯关键词" disabled
									:show-action="false"></u-search>

							</view>
						</view>
					</u-navbar>
			</view>

			<!--轮播图-->
	<view class="ml10 mr10 mt10 mb10">
			<yd-banner :preMargin="'0'" :nextMargin="'0'" :banner-list="bannerList" style="background-color: transparent;"></yd-banner>
	</view>
	<view>
		<view class="tabs">
			<u-tabs :list="list4" lineWidth="0" lineColor="" :activeStyle="{
	          color: '#303133',
	          fontWeight: 'bold',
	          transform: 'scale(1.05)'
	      }" :inactiveStyle="{
	          color: '#606266',
	          transform: 'scale(1)'
	      }" itemStyle="padding-left: 20px; padding-right: 20px; height: 34px;">
			</u-tabs>
			<view class="flex space  pl10 pr20 pb10 mt10">
				<view class="flex alcenter">
					<view class="pl10 pr10">
						<u--text size='14' suffixIcon="arrow-down" iconStyle="font-size: 14px" text="本月头条"></u--text>
					</view>
					<view class="pl10 pr10">
						<u-line direction="col" length="10px" color="#dddddd"></u-line>
					</view>
					<view class="pl10">
						<u--text suffixIcon="arrow-down" iconStyle="color:#000" text="热搜" size='14'
							color='#000'></u--text>
					</view>
	
				</view>
				<view>
					<yd-competition-tag :tagList='radios' @radioClick='radioClick'></yd-competition-tag>
				</view>
	
			</view>
		</view>
	</view>
		

		<view>
			<!-- 优惠券 -->
			<!-- 商品 -->
		
			<view class=" ml15 mr15 mt14" style="border-radius: 10px;">
				<view class="pd15 bg-w mb10" v-for="i in 4" style="border-radius: 20rpx;"
				@click="onDetails"
				>
					<view class="flex">
						<u--image radius='5' :showLoading="true" src="https://marathon.zznet.live/file/uploadPath/img/1.jpg"
							width="160px" height="100px" @click="click"></u--image>
						<view class="ml10">
							<u--text :lines="1" size="16px" color="#333333" :bold='true' text="我用十年青春,赴你最后之约"></u--text>
							<u--text :lines="3" size="14px" color="#c3c3c3"
								text="探访深圳数字人民币红包试点:5万人中签、商户测设备布放标识忙;深圳数字人民币红包试点:5万"></u--text>
						</view>

					</view>
					<view class="flex space mt10">
						<u--text mode="date" text="1612959739" color='#c3c3c3'></u--text>
						<view class="flex">
							<u--text prefixIcon="eye" iconStyle="font-size: 19px" text="344"
								margin='0 40rpx 0 0'></u--text>
							<u--text prefixIcon="star" iconStyle="font-size: 19px" text="156"></u--text>

						</view>

					</view>

				</view>
			</view>
		</view>


		<u-gap height="5px"></u-gap>
	</view>
</template>

<script>
import * as AreaApi from '@/api/system/area.js';

	export default {
		components: {},
		data() {
			return {
				radios: [{
						checked: true,
						icon: 'list-dot'
					},
					{
						checked: false,
						icon: 'https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/alist.png'
					},

				],
				tagList: [{
						text: '标签1'
					},
					{
						text: '标签2'
					}
				],
				list4: [{
					name: '热门推荐'
				}, {
					name: '国内',

				}, {
					name: '国外',
				}, {
					name: '人物专访'
				}, {
					name: '干活分'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}],
				bannerList: [
				],
				menuList: [{
						icon: 'gift',
						title: '热门推荐'
					},
					{
						icon: 'star',
						title: '收藏转发'
					},
					{
						icon: 'thumb-up',
						title: '点赞投币'
					},
					{
						icon: 'heart',
						title: '感谢支持'
					}
				],
				noticeList: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶'],
				productList: [{
						id: 1,
						image: 'https://marathon.zznet.live/file/uploadPath/img/1.jpg',
						title: '山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。',
						desc: '山不在于高，有了神仙就会有名气。水不在于深，有了龙就会有灵气。这是简陋的房子，只是我品德好就感觉不到简陋了。',
						price: '13.00'
					},
					{
						id: 2,
						image: 'https://marathon.zznet.live/file/uploadPath/img/1.jpg',
						title: '商品222',
						desc: '',
						price: '23.00'
					},
					{
						id: 3,
						image: 'https://marathon.zznet.live/file/uploadPath/img/1.jpg',
						title: '商品333',
						desc: '商品描述信息2',
						price: '33.00'
					},
					{
						id: 4,
						image: 'https://marathon.zznet.live/file/uploadPath/img/1.jpg',
						title: '商品444',
						desc: '商品描述信息4',
						price: '43.00'
					},
					{
						id: 5,
						image: 'https://marathon.zznet.live/file/uploadPath/img/1.jpg',
						title: '商品555',
						desc: '商品描述信息5',
						price: '53.00'
					}
				],
				moreStatus: 'nomore'
			}
		},
		onLoad() {
			 this.loadBannerData()
			// this.loadNoticeData()
		},
		methods: {
			handleSearchClick(e) {
				uni.$u.route('/pages/search/search')
			},
			radioClick(name) {

				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
				name == 0 ? this.showType = 'imglist' : this.showType = 'list'
			},
			onDetails(){
					uni.$u.route('/pages/message/details')
			},
			loadBannerData() {
			AreaApi.getBanner({
				position:1
			}).then(res=>{
			
				this.bannerList = res.data
			
				
			})
			},
			loadNoticeData() {
				getNoticeData().then(res => {
					this.noticeList = res.data
				})
			},
			handleSearchClick(e) {
				uni.$u.route('/pages/search/search')
			}
		},
		computed: {
			noticeTextList() {
				return this.noticeList.map(item => {
					if (item.title) {
						return item.title
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>


	.search-wrap {
		background: $custom-bg-color;
		padding: 20rpx;
	}

	.grid-title {
		line-height: 50rpx;
		font-size: 26rpx;
	}

	.mail_grid {
		background-color: #fff;
		padding: 20rpx 15rpx;
		margin: 0 20rpx;
		border-radius: 15rpx;

		.tag {
			background-color: #f84f91;
			font-size: 28rpx;
			border-radius: 30rpx;
			color: #fff;
			padding: 10rpx 20rpx;
			margin: 10rpx 0;
		}

		.i_img {
			border-radius: 10px;
			width: 100%;
			height: 180rpx;

		}
	}
</style>