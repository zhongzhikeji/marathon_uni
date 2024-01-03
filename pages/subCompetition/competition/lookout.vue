<template>
	<view>
		<view v-html="data"></view>
	</view>
</template>

<script>
	import * as AddressApi from '@/api/member/address.js';
	export default {
		data(){
			return{
				id:'',
				data:''
			}
		},
		onLoad(e) {
			this.id = e.spuId
			console.log(this.id)
			this.getList()
		},
		methods:{
			getList(){
			AddressApi.getPrecautions(this.id).then(res=>{
				console.log(res)
				this.data = res.data
			})
			}
		}
	}
</script>

<style>
</style>