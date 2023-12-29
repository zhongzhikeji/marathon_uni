<script>
	import { HTTP_REQUEST_URL } from './config/app';
	import Auth from './libs/wechat.js';
	import Routine from './libs/routine.js';
	import {getDicts} from '@/api/system/dict.js'
	export default {
		globalData: {
			spid: 0,
			code: 0,
			isLogin: false,
			userInfo: {},
			MyMenus: [],
			windowHeight: 0,
			id: 0
		},
		onLaunch: async function(option) {

		let that = this;
		const res = await getDicts('meet_clothing_size')
		const res1 = await getDicts('member_blood_type')
		const res2 = await getDicts('meet_id_type')
		const res3 = await getDicts('member_gender_type')
		const res4 = await getDicts('member_country')
	   
		localStorage.setItem('meet_clothing_size',JSON.stringify(res.data))
		localStorage.setItem('member_blood_type',JSON.stringify(res1.data))
		localStorage.setItem('meet_id_type',JSON.stringify(res2.data))
		localStorage.setItem('member_gender_type',JSON.stringify(res3.data))
		localStorage.setItem('member_country',JSON.stringify(res4.data))
      // TODO 芋艿: 分销
			if (option.query.hasOwnProperty('scene')) {
				switch(option.scene){
					case 1047: // 扫描小程序码
					case 1048: // 长按图片识别小程序码
					case 1049: // 手机相册选取小程序码
					case 1001: // 直接进入小程序
					let value = this.$util.getUrlParams(decodeURIComponent(option.query.scene));
					let values = value.split(',');
					if(values.length === 2){
						let v1 = values[0].split(":");
						if (v1[0] === 'pid') {
							that.globalData.spid = v1[1];
						} else{
							that.globalData.id = v1[1];
						}
						let v2 = values[1].split(":");
						if (v2[0] === 'pid') {
							that.globalData.spid = v2[1];
						}else{
							that.globalData.id = v2[1];
						}
					}else{
						that.globalData.spid = values[0].split(":")[1];
					}
					break;
				}
			}
			
		
      
		
}
	}
</script>
<style>
	
</style>
<style lang="scss">
/** 引入全局基本样式 */

/* 引入 uView 基础样式 */
@import '@/uni_modules/uview-ui/index.scss';
	@import url("@/plugin/animate/animate.min.css");
	@import 'static/css/base.css';
	@import 'static/iconfont/iconfont.css';
	@import 'static/css/guildford.css';
	@import 'static/css/style.scss';
/*每个页面公共scss */
@import 'app.scss';
@import "./static/css/common.css";
</style>
