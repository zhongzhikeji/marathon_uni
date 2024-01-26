<template>
	<view>
		<form @submit="formSubmit" report-submit='true'>
			<view class='addAddress pad30'>
				<view class='list borRadius14'>
					<view class='item acea-row row-between-wrapper relative' @click="show =true">
						<view class='name'>证件类型</view>
						<view class="address flex alcenter">
							<view>
								<input disabled type='text' placeholder='请选择' placeholder-style="color:#ccc;"
									name='idType' :value="datasub.idType" placeholder-class='placeholder' />
							</view>



							<view class='iconfont icon-xiangyou abs_right'></view>
						</view>
					</view>
					<view class='item acea-row row-between-wrapper'>
						<view class='name'>证件号码</view>
						<input type='text' placeholder='请输入证件号码' placeholder-style="color:#ccc;" name='idCard'
							:value="datasub.idCard" placeholder-class='placeholder' maxlength="18" />
					</view>
					<view class='item acea-row row-between-wrapper relative' style="border-bottom: 1rpx solid #eee;"
						@click="show1 = true">
						<view class='name'>国家/地区</view>
						<view class="address flex alcenter">
							<input name='nationality' disabled="" type='text' placeholder='请选择'
								placeholder-style="color:#ccc;" :value="datasub.nationality"
								placeholder-class='placeholder' />


							<view class='iconfont icon-xiangyou abs_right'></view>
						</view>
					</view>
					<view class='item acea-row row-between-wrapper' style="border: none;">
						<view class='name'>姓名</view>
						<input type='text' placeholder='请输入姓名' placeholder-style="color:#ccc;" name='name'
							:value="datasub.name" placeholder-class='placeholder' maxlength="5" />
					</view>
					<view class='item acea-row row-between-wrapper'>
						<view class='name'>年龄</view>
						<input type='number' placeholder='请输入联系电话' placeholder-style="color:#ccc;" name="age"
							:value='datasub.age' placeholder-class='placeholder' maxlength="2" />
					</view>
					<view class='item acea-row row-between-wrapper'>
						<view class='name'>联系电话</view>
						<input type='number' placeholder='请输入联系电话' placeholder-style="color:#ccc;" name="phone"
							:value='datasub.phone' placeholder-class='placeholder' maxlength="11" />
					</view>
					<view class='item acea-row row-between-wrapper'>
						<view class='name'>邮箱</view>
						<input type='text' placeholder='请输入邮箱' placeholder-style="color:#ccc;" name="email"
							:value='datasub.email' placeholder-class='placeholder' />
					</view>
					<view class='item acea-row row-between-wrapper relative' style="border-bottom: 1rpx solid #eee;"
						@click="show2 = true">
						<view class='name'>性别</view>
						<view class="address flex alcenter">
							<input disabled type='text' placeholder='请选择' name='gender' placeholder-style="color:#ccc;"
								:value="datasub.gender" placeholder-class='placeholder' />


							<view class='iconfont icon-xiangyou abs_right'></view>
						</view>
					</view>
					<view class='item acea-row row-between-wrapper relative' style="border-bottom: 1rpx solid #eee;"
						@click="show3 = true">
						<view class='name'>出身日期</view>
						<view class="address flex alcenter">
							<input disabled="" type='text' placeholder='请选择' placeholder-style="color:#ccc;"
								name='birthday' :value="datasub.birthday" placeholder-class='placeholder' />


							<view class='iconfont icon-xiangyou abs_right'></view>
						</view>
					</view>


					<view class='item acea-row row-between-wrapper relative' style="border-bottom: 1rpx solid #eee;"
						@click="show4 = true">
						<view class='name'>服装尺码</view>
						<view class="address flex alcenter">
							<input disabled="" type='text' placeholder='请选择' name='clothingSize'
								placeholder-style="color:#ccc;" :value="datasub.clothingSize"
								placeholder-class='placeholder' />


							<view class='iconfont icon-xiangyou abs_right'></view>
						</view>
					</view>
					<view class='item acea-row row-between-wrapper relative' style="border-bottom: 1rpx solid #eee;"
						@click="show5 = true">
						<view class='name'>血型</view>
						<view class="address flex alcenter">
							<input disabled="" type='text' placeholder='请选择' placeholder-style="color:#ccc;"
								name='bloodType' :value="datasub.bloodType" placeholder-class='placeholder' />


							<view class='iconfont icon-xiangyou abs_right'></view>
						</view>
					</view>

					<view class='item acea-row row-between-wrapper relative'>
						<view class='name'>所在地区</view>
						<view class="address">
							<picker mode="multiSelector" @change="bindRegionChange"
								@columnchange="bindMultiPickerColumnChange" :range="multiArray">
								<view class='acea-row'>
									<view class="picker line1">{{region[0]}}，{{region[1]}}，{{region[2]}}</view>
									<view class='iconfont icon-xiangyou abs_right'></view>
								</view>
							</picker>
						</view>
					</view>

					<view class='item acea-row row-between-wrapper relative'>
						<view class='name'>详细地址</view>
						<input type='text' placeholder='请填写具体地址' placeholder-style="color:#ccc;" name='address'
							placeholder-class='placeholder' v-model='userAddress.address' maxlength="18" />
						<!-- <view class='iconfont icon-dizhi font-color abs_right' @tap="chooseLocation" /> -->
					</view>
					<view class='item acea-row row-between-wrapper'>
						<view class='name'>紧急联系人姓名</view>
						<input type='text' placeholder='请输入紧急联系人' placeholder-style="color:#ccc;"
							name="emergencyContactName" :value='datasub.emergencyContactName'
							placeholder-class='placeholder' maxlength="11" style="width: 230px;" />
					</view>
					<view class='item acea-row row-between-wrapper'>
						<view class='name'>紧急联系人电话</view>
						<input type='number' placeholder='请输入紧急联系电话' placeholder-style="color:#ccc;"
							name="emergencyContactPhone" :value='datasub.emergencyContactPhone'
							placeholder-class='placeholder' maxlength="11" style="width: 230px;" />
					</view>
				</view>
				<view class="mt15 mb15">选填项</view>
				<view class='list borRadius14'>
					<view v-for="(item,index) in datasub.extraInfos">

						<view class='item acea-row row-between-wrapper' v-show="item.fieldType == 'string'">
							<view class='name'>{{item.fieldName}}</view>

							<input type='text' placeholder-style="color:#ccc;"
								v-model="item.value" placeholder-class='placeholder' />
						</view>

						<view v-show="item.fieldType == 'image'" class="pt10 pb10">
							<text>{{item.fieldName}}</text>

							<view class="mt10">
								<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1"
									multiple :maxCount="3"  :previewFullImage="true">
								
									</u-upload>
							</view>

						</view>

					</view>

				</view>
				<!-- 	<view class='default acea-row row-middle borRadius14'>
					<checkbox-group @change='ChangeIsDefault'>
						<checkbox :checked="userAddress.defaultStatus" />设置为默认地址
					</checkbox-group>
				</view> -->

				<button class='keepBnt bg-eb' form-type="submit">我已核实以上信息，确认提交</button>
				<!-- #ifdef MP -->
				<!-- 		<view class="wechatAddress" v-if="!id" @click="getWxAddress">导入微信地址</view> -->
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<!-- <view class="wechatAddress" v-if="this.$wechat.isWeixin() && !id" @click="getAddress">导入微信地址</view> -->
				<!-- #endif -->
			</view>
		</form>
		<u-picker closeOnClickOverlay :show="show" :columns="columns" keyName='label' @cancel='cancel(1)'
			@confirm='confirm($event,1)' @close="close(1)"></u-picker>
		<u-picker closeOnClickOverlay :show="show1" :columns="columns1" keyName='label' @cancel='cancel(2)'
			@confirm='confirm($event,2)' @close="close(2)"></u-picker>
		<u-picker closeOnClickOverlay :show="show2" :columns="columns2" keyName='label' @cancel='cancel(3)'
			@confirm='confirm($event,3)' @close="close(3)"></u-picker>
		<u-datetime-picker closeOnClickOverlay :show="show3" mode="date" :minDate="minDate" @cancel='cancel(4)'
			@confirm='confirm($event,4)' @close="close(4)"></u-datetime-picker>
		<u-picker closeOnClickOverlay :show="show4" keyName='label' :columns="columns3" @cancel='cancel(5)'
			@confirm='confirm($event,5)' @close="close(5)"></u-picker>
		<u-picker closeOnClickOverlay :show="show5" keyName='label' :columns="columns4" @cancel='cancel(6)'
			@confirm='confirm($event,6)' @close="close(6)"></u-picker>

	</view>
</template>

<script>
	import {
		editAddress
	} from '@/api/user.js';
	import * as AddressApi from '@/api/member/address.js';
	import * as AreaApi from '@/api/system/area.js';
	import dayjs from '@/plugin/dayjs/dayjs.min.js';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	import home from '@/components/home';
	let app = getApp();
	export default {
		components: {
			home
		},
		data() {
			return {
				id: 0, // 地址 id
				district: [], // 地区，树形结构
				fileList1: [],
				userAddress: {
					defaultStatus: false
				}, // 地址详情
				region: ['省', '市', '区'], // userAddress 对应的省市区
				multiArray: [], // 当前的省、市、区
				multiIndex: [0, 0, 0], // 当前选中的省 index、市 index、区 index
				cityId: 0, // 区的编号~ 变量名暂时没改过来
				show: false,
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				minDate: 1261440000,

				datasub: {
					idType: '',
					idCard: '',
					nationality: '',
					gender: null,
					birthday: null,
					phone: '',
					age: null,
					name: '',
					email: '',
					emergencyContactName: '',
					emergencyContactPhone: '',
					clothingSize: '',
					bloodType: '',
					skuId: '',
					extraInfos: [{
						description: '',
						dictionary: '',
						fieldName: '',
						fieldType: '',
						sort: null,
						value: null
					}]
				},
				columns: [],
				columns1: [],
				columns2: [],
				columns3: [],
				columns4: [],
				skuId: ''



			};
		},
		computed: mapGetters(['isLogin']),
		watch: {
			isLogin: {
				handler: function(newV, oldV) {
					if (newV) {
						this.getUserAddress();
						this.getCityList();
					}
				},
				deep: true
			}
		},
		onLoad(options) {
			if (!this.isLogin) {
				toLogin();
				return
			}
			if (options.skuId) {
				this.skuId = options.skuId
			}
			this.columns.push(JSON.parse(localStorage.getItem('meet_id_type')))
			this.columns1.push(JSON.parse(localStorage.getItem('member_country')))

			this.columns2.push(JSON.parse(localStorage.getItem('member_gender_type')))
			this.columns3.push(JSON.parse(localStorage.getItem('meet_clothing_size')))
			this.columns4.push(JSON.parse(localStorage.getItem('member_blood_type')))
			this.preOrderNo = options.preOrderNo || 0;
			this.id = options.id || 0;
			uni.setNavigationBarTitle({
				title: options.id ? '修改参赛选手' : '新增参赛选手'
			})

			// 获取地址详情
			this.getUserAddress();

			// 检测城市数据是否存在缓存，有的话从缓存取，没有的话请求接口
			if (this.$Cache.has('cityList')) {
				this.district = this.$Cache.getItem('cityList')
				this.initialize();
			} else {
				this.getCityList();
			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				console.log(lists)
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url,lists[i].name)
					const resultUrl = JSON.parse(result).data
			
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: resultUrl
					}))
					fileListLen++
				}
			     
			},
			uploadFilePromise(url,pathName) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'https://app.runplus.cc/app-api/infra/file/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
					   	formData: {
					   	path: pathName
					   	},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data)
							}, 500)
						}
					});
				})
			},
			cancel(num) {
				if (num == 1) {
					this.show = false
				} else if (num == 2) {
					this.show1 = false
				} else if (num == 3) {
					this.show2 = false
				} else if (num == 4) {
					this.show3 = false
				} else if (num == 5) {
					this.show4 = false
				} else if (num == 6) {
					this.show5 = false
				}

			},
			confirm(e, num) {
				if (num == 1) {

					this.datasub.idType = e.value[0].value
					this.show = false
				} else if (num == 2) {
					this.datasub.nationality = e.value[0].value
					this.show1 = false
				} else if (num == 3) {
					this.datasub.gender = e.value[0].label
					console.log(e)
					this.show2 = false
				} else if (num == 4) {
					console.log(e.value)
					// this.datasub.birthday = Number(e.value) 

					this.datasub.birthday = this.formatDate(e.value)
					this.show3 = false
				} else if (num == 5) {
					this.datasub.clothingSize = e.value[0].value
					this.show4 = false
				} else if (num == 6) {
					this.datasub.bloodType = e.value[0].value
					this.show5 = false
				}

			},

			close(num) {
				if (num == 1) {
					this.show = false
				} else if (num == 2) {
					this.show1 = false
				} else if (num == 3) {
					this.show2 = false
				} else if (num == 4) {
					this.show3 = false
				} else if (num == 5) {
					this.show4 = false
				} else if (num == 6) {
					this.show5 = false
				}



			},

			/**
			 * 获得地址
			 */
			getUserAddress: function() {
				if (!this.id) {
					return false;
				}
				AddressApi.getEditAddress(this.id, this.skuId).then(res => {


					res.data.gender = res.data.gender == 1 ? '男' : '女'
					if(res.data.extraInfos){
						res.data.extraInfos.forEach(item=>{
							if(item.fieldType == 'image' && item.value != null){
								
								this.fileList1 = item.value
							}
						})
					}
				
					
					this.datasub = res.data
					this.$set(this, 'userAddress', res.data);
					this.$set(this, 'region', res.data.areaName.split(' '));
					this.city_id = res.data.areaId
				
					console.log(res, 778)
				});
			},
			/**
			 * 提交用户添加地址
			 */
			formSubmit: function(e) {
				console.log(e, 789)
           console.log(this.fileList1)

				// 	// 参数校验
				const value = e.detail.value;
				if(this.datasub.extraInfos){
					this.datasub.extraInfos.forEach(item=>{
						if(item.fieldType == 'image'){
							item.value = []
							item.value = this.fileList1
						}
					})
				}
		
				value.extraInfos = this.datasub.extraInfos
				value.gender = value.gender == '男' ? 1 : 2
				value.id = this.id;
				value.skuId = this.skuId
				value.areaId = this.city_id;
				value.defaultStatus = this.userAddress.defaultStatus;
				if (!value.idType) {
					return this.$util.Tips({
						title: '请选择证件类型'
					});
				}
				if (!value.idCard) {
					return this.$util.Tips({
						title: '请输入证件号码'
					});
				}
				if (!value.nationality) {
					return this.$util.Tips({
						title: '请选择国家'
					});
				}
				if (!value.name) {
					return this.$util.Tips({
						title: '请输入姓名'
					});
				}
				if (!value.email) {
					return this.$util.Tips({
						title: '请输入邮箱'
					});
				}
				if (!value.gender) {
					return this.$util.Tips({
						title: '请选择性别'
					});
				}
				if (!value.birthday) {
					return this.$util.Tips({
						title: '请选择出生日期'
					});
				}
				if (!value.phone) {
					return this.$util.Tips({
						title: '请填写联系电话'
					});
				}
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(value.phone)) {
					return this.$util.Tips({
						title: '请输入正确的手机号码'
					});
				}
				if (!value.emergencyContactName) {
					return this.$util.Tips({
						title: '请输入紧急人姓名'
					});
				}
				if (!value.emergencyContactPhone) {
					return this.$util.Tips({
						title: '请输入紧急人电话'
					});
				}
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(value.emergencyContactPhone)) {
					return this.$util.Tips({
						title: '请输入正确的手机号码'
					});
				}
				if (!value.clothingSize) {
					return this.$util.Tips({
						title: '请选择服装尺码'
					});
				}
				if (!value.bloodType) {
					return this.$util.Tips({
						title: '请选择血型'
					});
				}
				if (this.region === '省-市-区') {
					return this.$util.Tips({
						title: '请选择所在地区'
					});
				}
				if (!value.address) {
					return this.$util.Tips({
						title: '请填写详细地址'
					});
				}


				// 提交保存
				uni.showLoading({
					title: '保存中',
					mask: true
				})
				const saveOrUpdateAddress = this.id > 0 ? AddressApi.updateInfo : AddressApi.createComAddress;
				saveOrUpdateAddress(value).then(res => {
					if (this.id) {
						this.$util.Tips({
							title: '修改成功',
							icon: 'success'
						});
					} else {
						this.$util.Tips({
							title: '添加成功',
							icon: 'success'
						});
					}
					setTimeout(() => {
						if (this.preOrderNo > 0) {
							uni.redirectTo({
								url: '/pages_home/entrant/index'  
							})
						} else {
							// #ifdef H5
							return history.back();
							// #endif
							// #ifndef H5
							return uni.navigateBack({
								delta: 1,
							})
							// #endif
						}
					}, 1000);
				}).catch(err => {
					return this.$util.Tips({
						title: err
					});
				})
			},
			// TODO 芋艿：需要改下
			ChangeIsDefault: function(e) {
				this.$set(this.userAddress, 'defaultStatus', !this.userAddress.defaultStatus);
			},

			/**
			 * 获取地址数据
			 */
			getCityList: function() {
				AreaApi.getAreaTree().then(res => {
					this.district = res.data;
					let oneDay = 24 * 3600 * 1000;
					this.$Cache.setItem({
						name: 'cityList',
						value: res.data,
						expires: oneDay * 7
					}); //设置七天过期时间
					this.initialize();
				})
			},
			/**
			 * 初始化当前的 multiArray
			 */
			initialize: function() {
				const province = [];
				const city = [];
				const area = [];
				if (this.district.length) {
					// 省
					this.district.forEach(item => {
						province.push(item.name);
					});
					// 市
					const cityChildren = this.district[0].children || [];
					cityChildren.forEach(item => {
						city.push(item.name);
					});
					// 区
					const areaChildren = cityChildren.length ? (cityChildren[0].children || []) : [];
					areaChildren.forEach(item => {
						area.push(item.name);
					});
					this.multiArray = [province, city, area]
				}
			},
			/**
			 * 提交省市区的选择
			 */
			bindRegionChange: function(e) {
				const multiIndex = this.multiIndex;
				const multiArray = this.multiArray;
				const value = e.detail.value;
				const province = this.district[multiIndex[0]] || {
					children: []
				};
				const city = province.children[multiIndex[1]] || {
					children: []
				};
				const area = city.children[multiIndex[2]] || {
					id: 0
				};
				this.region = [multiArray[0][value[0]], multiArray[1][value[1]], multiArray[2][value[2]]]
				this.cityId = area.id
			},
			/**
			 * 选择省市区的滚动
			 */
			bindMultiPickerColumnChange: function(e) {
				const column = e.detail.column; // multiArray 的下标
				const value = e.detail.value; // multiArray 的值，即选中的第几个
				const multiArray = this.multiArray;
				const multiIndex = this.multiIndex;
				multiIndex[column] = value;
				switch (column) {
					case 0: // 选择【省】
						const currentCity = this.district[value] || {
							child: []
						};
						const areaList = currentCity.children[0] || {
							child: []
						};
						multiArray[1] = currentCity.children.map((item) => {
							return item.name;
						});
						multiArray[2] = areaList.children.map((item) => {
							return item.name;
						});
						break;
					case 1: // 选择【市】
						const cityList = this.district[multiIndex[0]].children[multiIndex[1]].children || [];
						multiArray[2] = cityList.map(item => {
							return item.name;
						});
						break;
					case 2: // 选择【区】
						break;
				}
				// #ifdef MP || APP-PLUS
				this.$set(this.multiArray, 0, multiArray[0]);
				this.$set(this.multiArray, 1, multiArray[1]);
				this.$set(this.multiArray, 2, multiArray[2]);
				// #endif
				// #ifdef H5
				this.multiArray = multiArray;
				// #endif
				this.multiIndex = multiIndex
			},
			/**
			 * 通过地图，选择到具体的地址
			 * TODO 芋艿：需要测试下；
			 */
			chooseLocation: function() {
				uni.chooseLocation({
					success: (res) => {
						this.$set(this.userAddress, 'address', res.address.replace(
							/.+?(省|市|自治区|自治州|县|区)/g, ''));
					}
				})
			},
			formatDate(date) {

				return dayjs(date).format("YYYY-MM-DD");
			}

		}
	}
</script>

<style scoped lang="scss">
	.addAddress {
		padding-top: 20rpx;
	}

	.addAddress .list {
		background-color: #fff;
		padding: 0 24rpx;
	}

	.addAddress .list .item {
		border-top: 1rpx solid #eee;
		height: 90rpx;
		line-height: 90rpx;
	}

	.addAddress .list .item .name {
		// width: 195rpx;
		font-size: 30rpx;
		color: #333;
	}

	.addAddress .list .item .address {

		// margin-left: 40rpx;
	}

	.addAddress .list .item input {
		width: 475rpx;
		font-size: 30rpx;
		font-weight: 400;
	}

	.addAddress .list .item .placeholder {
		color: #ccc;
	}

	.addAddress .list .item picker .picker {
		width: 500rpx;
		font-size: 30rpx;
	}

	.addAddress .default {
		padding: 0 30rpx;
		height: 90rpx;
		background-color: #fff;
		margin-top: 23rpx;
	}

	.addAddress .default checkbox {
		margin-right: 15rpx;
	}

	.addAddress .keepBnt {
		width: 690rpx;
		height: 86rpx;
		border-radius: 50rpx;
		text-align: center;
		line-height: 86rpx;
		margin: 80rpx auto 24rpx auto;
		font-size: 32rpx;
		color: #fff;
	}

	.addAddress .wechatAddress {
		width: 690rpx;
		height: 86rpx;
		border-radius: 50rpx;
		text-align: center;
		line-height: 86rpx;
		margin: 0 auto;
		font-size: 32rpx;
		color: #E93323;
		border: 1px solid #E93323;
	}

	.relative {
		position: relative;
	}

	.icon-dizhi {
		font-size: 44rpx;
		z-index: 100;
	}

	.abs_right {
		position: absolute;
		right: 0;
	}
</style>