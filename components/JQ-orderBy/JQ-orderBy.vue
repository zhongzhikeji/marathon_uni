<template>
	<view class="JQ-orderBy  flex space">
		<view class="flex pt5 pb5" v-for="(item,index) in sortList" @click="change(index)" :key="index">
			<text :style="{paddingRight: '10rpx',fontSize:size*2+'rpx',color:textColor}">{{item.text}}</text>
			<view class="flex_col_bet">
				<!-- #ifdef H5 -->
				<svg t="1693467068237" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="5600" width="8" height="8"
					v-for="(ite,ind) in item.value" :style="ind==1? 'transform: rotate(180deg)':''"
					v-if="sortType=='one'?(sortIndex==index?ind==sortArrIndex:ind==sortDefArrIndex):true">
					<path d="M512 187.24L699.501 512 887 836.76H137L324.5 512z" p-id="5601"
						:fill="sortIndex==index&&ind==sortArrIndex?sortStyle[0]:sortStyle[1]">
					</path>
				</svg>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || MP -->

				<image v-for="(ite,ind) in item.value"
					:style="{transform: ind==1? 'rotate(180deg)':'',width:size+'rpx',height:size+'rpx'}"
					v-if="sortType=='one'?(sortIndex==index?ind==sortArrIndex:ind==sortDefArrIndex):true"
					:src="sortIndex==index&&ind==sortArrIndex?'https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/triangle-light.png':'https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/triangle.png'"
					mode=""></image>
				<!-- #endif -->

			</view>
		    <view class="ml30" style="color: #DFDFDF;">|</view>
		</view>
		<view class="flex alcenter">
			<view class="mr5">筛选</view>
			<u-icon  size="12" name="https://marathon.zznet.live/file/uploadPath/image/competition/list.png"></u-icon>
		</view>
	</view>
</template>

<script>
	/**
	 * JQ-orderBy 条件选择-排序
	 * @description 条件选择，升序降序
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=14392
	 * @property {Number|String} sortDefIndex 默认选择的条件列表下标
	 * @property {Array} sortList 条件列表，举例：[{text: '按照价格排序',value: ['acs', 'desc'],}, {text: '按照编号排序',value: ['acs', 'desc'],}]      value设置单项选择后的输出结果
	 * @@param {type}  = [value]
	 * @property {Number|String} sortDefArrIndex 默认排序类型：0 升序，1降序
	 * @property {String} sortType 样式选择：默认两个箭头样式，'one'显示一个箭头
	 * @property {Array} sortStyle 箭头颜色：[0]高亮色 「仅H5支持」
	 * @property {Number|String} size 字体和箭头大小
	 * @property {String} textColor 字体颜色
	 * @event {Function} switchSort  选中发生变化触发
	 * @parameter 返回当前选择条件列表下标
	 * @parameter 返回当前条件下的排序value
	 */
	export default {
		name: "JQ-orderBy",
		props: {
			sortDefIndex: {
				type: [Number, String],
				default: 0
			},
			sortList: {
				type: Array,
				default () {
					return [{
						text: '距离最近',
						value: ['asc', 'desc'],
						field:'distance'
					}, {
						text: '时间最近',
						value: ['asc', 'desc'],
						field:'time'
					}]
				}
			},
			sortDefArrIndex: {
				type: [Number, String],
				default: 0
			},
			sortType: {
				type: String,
				default: ''
			},
			sortStyle: {
				type: Array,
				default () {
					return ['#06EFA3', '#A6A6A6']
				}
			},
			size: {
				type: [Number, String],
				default: 12
			},
			textColor: {
				type: String,
				default: '#000'
			}

		},
		data() {
			return {
				sortArrIndex: this.sortDefArrIndex,
				sortIndex: this.sortDefIndex
			};
		},
		created() {},
		methods: {
			change(index) {
				if (this.sortIndex == index) {
					this.sortArrIndex = (this.sortArrIndex ? 0 : 1)
				} else {
					this.sortIndex = index
					this.sortArrIndex = this.sortDefArrIndex
				}
				// (返回当前选择条件列表下标,返回当前条件下的排序value)
				this.$emit('switchSort', index, this.sortList[index].value[this.sortArrIndex],this.sortList[index].field)
			}
		}
	}
</script>

<style lang="scss">
	.JQ-orderBy {
		width: 100%;

		.flex {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.flex_col_bet {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
</style>
