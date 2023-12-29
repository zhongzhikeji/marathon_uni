<template>
	<view class="assistant">
		     <u-navbar
		          bgColor='#f5f5f5'
		            title="查询"
					:safeAreaInsetTop="true" :placeholder='true' :fixed="false"
					:autoBack="true"
		          
		        >
				  </u-navbar>
				  <view class="flex center mt20">
					<u--image :showLoading="true" src="https://marathon.zznet.live/file/uploadPath/image/home/zsbg.png" width="177px" height="149px" ></u--image>
				  </view>
			  <view class="otab">
				<u-tabs :list="list" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
				          color: '#EB3D74',
				          fontWeight: 'bold',
						  fontSize:'16px',
				          transform: 'scale(1.05)',
						 
				      }"  :inactiveStyle="{
				          color: '#8F91A1',
				          transform: 'scale(1)'
				      }" itemStyle="padding-left: 20px; padding-right: 20px; height: 50px;" :scrollable='false' @click="click">
				</u-tabs>
				<view class="bg-w pt20 pb20" v-show="isshow ==0">
					 <view class="ml20 mr20" >
						   <u--input
						     placeholder="请输入身份证号查询"
						     border="surround"
						     v-model="value"
						     @change="change"
							
						   ></u--input>
					 </view>
					 <view class="ml15 mr15 pt40">
						 <u-button type="primary" @click="query" color='#EB3D74'>查询</u-button>
					 </view>
				</view>
				<view class="bg-w pt20 pb20" v-show="isshow ==1">
					 <view class="ml20 mr20">
						   <u--input
						     placeholder="请输入成绩号查询"
						     border="surround"
						     v-model="value"
						     @change="change"
						   ></u--input>
					 </view>
					 <view class="ml15 mr15 pt40">
						 <u-button type="primary" @click="query" color='#EB3D74'>查询</u-button>
					 </view>
				</view>
			  </view>

	
	
	
	</view>
</template>

<script>
	export default {
		data(){
			return{
				 value: '',
				 isshow:0,
				lineBg :'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
				list: [{
						name: '报名状态查询'
					},
					{
						name: '成绩查询'
					}
				],
			}
		},
		methods:{
			query(){
				this.$u.route('/pages/home/assistant/result',{
					name:'lisa'
				})
			},
			   change(e) {
			          console.log('change', e);
			        },
					click(item){
						if(item.index ==0){
							this.isshow =0
						
						}else if(item.index==1){
							this.isshow = 1
						
						}
					}
		}
	}
</script>

<style lang="scss" scoped>
	.assistant{
  .otab{
	  background-color: #fff;
	  position: absolute;
	  margin-left: 20rpx;
	  width: 96%;
	  top: 150px;
  }
	
	}
	
</style>