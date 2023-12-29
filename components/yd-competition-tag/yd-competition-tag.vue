<template>
	<view class="flex" >
		<view  v-for="(item, index) in tagList" :key="index" >
			<u-tag  :class="item.text?'ml10':''"  :shape="shape" :text="item.text?item.text:''" :plain="!item.checked"  :name="index"
				@click="radioClick"
				size='medium'
				type="info"
				:icon="item.icon?item.icon:''"
				>
			</u-tag>
		</view>
	</view>

</template>

<script>
	export default{
		name: 'yd-competition-tag',
		props: {
		  tagList: {
		    type: Array,
		    default: () => []
		  },
		  shape:{
			  type:String,
			  default:'square'
		  }
		},
		methods:{
			radioClick(name) {
				  this.$emit('radioClick', name,)
			
			},
		}
	}
	
	  
</script>

<style>
</style>