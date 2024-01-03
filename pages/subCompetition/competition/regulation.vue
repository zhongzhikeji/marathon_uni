<template>
	<view>
		<u-navbar  :safeAreaInsetTop="true" :placeholder='true' :fixed="false"  :autoBack="true"
			bgColor="transparent" title="阅读竞赛规程">
			
		</u-navbar>
		<view class="ml10 mr10 mt10">
			<u-notice-bar bgColor='#FFEEF3' color="#EB3D74" mode='link' text="添加客服微信联系方式，及时获取一手赛事信息" style="border-radius: 20px;"></u-notice-bar>
			<view class="bg-w mt10 radis">
				<view class="ml10 mr10 pt20 pb10">
					<view v-html="data"></view>
					 <view class="mt20">
						 <view class="flex">
							 <u-icon name="error-circle" color='#DCDCDC'></u-icon>
							 <view class="ml10">请在<text style="color: #EB3D74;">30分钟内</text>完成支付，否则订单自动取消</view>
						 </view>
						 <view class="flex flexStart mt10">
							 <u-icon name="error-circle" color='#DCDCDC'></u-icon>
							 <text class="ml10" style="color: #EB3D74;">由于比赛报名属于竞赛性质，非普通商品，具有时效性特征，一旦完成支付，不支持退款</text>
						 </view>
						 <view class="mt10">
							 <u-checkbox-group v-model="checked" placement="column"  @change="checkboxChange">
							            <u-checkbox
							                 :customStyle="{marginBottom: '8px',}"
							                 v-for="(item, index) in checkboxList1"
							                 :key="index"
							                 :label="item.name"
							                 :name="item.id"
											 activeColor='#EB3D74'
							             >
							             </u-checkbox>
							 </u-checkbox-group>
						 </view>
					 </view>
				</view>
			
			</view>
			
		</view>
	    <view class="footer">
			<view class="flex center  cloum alcenter pt20 pb10 ml10 mr10">
				<view v-if="countdown > 0">阅读倒计时：<text style="color:'#EB3D74'">{{countdown}}秒</text></view>
				<view style="width: 100%;" class="mt10">
					<u-button :color=" countdown > 0?'#D9D9D9':'#EB3D74'" text="我已阅读并同意以上规则" @click="onTime">
						
					</u-button>
					</view>
			</view>
		
			
		</view>
	</view>
</template>

<script>
	import * as AddressApi from '@/api/member/address.js';
	export default {
		data(){
			return{
				id:'',
				data:'',
				checked:[],
				 countdown: 3,
				    checkboxList1: [{
				                    name: '我同意缴费之后不支持退款',
				                
									id:1
				                },
				                {
				                    name: '我已关注公众',
				                    id:2
				                },
				              
				            ]
			}
		},
		onLoad(e) {
			this.id = e.spuId
			console.log(this.id)
			this.getList()
		},
		  mounted() {
		  
		    this.timer = setInterval(() => {
		      if (this.countdown > 0) {
		        this.countdown--;
		      } else {
		    
		        clearInterval(this.timer);
		      }
		    }, 1000);
		  },
		  beforeDestroy() {
		
		    clearInterval(this.timer);
		  },
		methods:{
			checkboxChange(n){
				   console.log('change', n);
				   this.checked = n
			},
			onTime(){
				if(this.checked.length ==2){
					this.$u.route(`/pages/subCompetition/competition/details?id=${this.id}&isSign=2`)
				}else{
					    uni.$u.toast('请确认相关选择')
				}
			},
			getList(){
			AddressApi.getMeetRule(this.id).then(res=>{
				console.log(res)
				this.data = res.data
			})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer{
		position: fixed;
		bottom:0;
		width: 100%;
		height: 248rpx;
		background-color: #fff;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}
</style>