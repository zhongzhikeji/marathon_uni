<template>
	<view>
		<view>
			<zeng-calen  :actDay="actDay" :chooseDay="chooseDay" @onDayClick='onDayClick'></zeng-calen>
		</view>
		<view class="ml15 mr15 mt20">
	    <u-checkbox-group
	            v-model="checkboxValue1"
	            placement="row"
	            @change="checkboxChange"
			  
			  size="14"
	        >
	            <u-checkbox
			
				labelSize='12'
	                :customStyle="{marginRight: '7px'}"
					:activeColor='item.color'
	                v-for="(item, index) in checkboxList1"
	                :key="index"
	                :label="item.name"
	                :name="item.name"
	            >
	            </u-checkbox>
	        </u-checkbox-group>
		</view>
		<view>
		  <view class="">
			  <view>
				  
			  </view>
		  </view>
		</view>
	</view>

	
</template>

<script>
	export default {
		data() {
			return {
				        checkboxValue1:['马拉松','越野','欢乐跑','铁三','线上','其他','只看我的'],
				            // 基本案列数据
				            checkboxList1: [{
				                    name: '马拉松',
				                    color: '#ED1389',
									checked:true
				                },
				                {
				                    name: '越野',
				                    color: '#09E370',
									checked:true
				                },
				                {
				                    name: '欢乐跑',
				                    color: '#FAE521'
				                },
								{
								    name: '铁三',
								    color: '#7528FC'
								},
								{
								    name: '线上',
								    color: '#4096E6'
								},
								{
								    name: '其他',
								    color: '#4F4F4F'
								},
								{
								    name: '只看我的',
								    color: '#eee'
								},
				            ],
				        
				actDay: [], //用户选择的日期
				chooseDay: [], //已被投标的数据
			}
		},

		methods: {
			// 展开日历
			onDayClick(data) {
				let choose = data.date //用户点中的数据
				if (this.actDay.includes(choose)) { //如果用户点击的日期已经存在
					// 移除元素下标
					const index = this.actDay.indexOf(choose);
					//删除用户点击的日期
					this.actDay.splice(index, 1)
				} else if (this.chooseDay.includes(choose)) { //判断是否已经被投标
					uni.showToast({
						title: "这个日期已经被投标了",
						icon: "none"
					})
				} else {
					//添加用户点击的日期
					this.actDay.push(choose)
					
				}
			},
			      checkboxChange(n) {
			            console.log('change', n);
			        }
		}
	}
</script>

<style lang="scss" >

</style>