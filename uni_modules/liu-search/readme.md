### liu-search适用于uni-app项目的搜索模版
### 本组件目前兼容微信小程序、H5
### 本组件是简单好用的搜索模版，自带历史搜索、热门搜索，历史搜索自带缓存，源码简单易修改
# --- 扫码预览、关注我们 ---

## 扫码关注公众号，查看更多插件信息，预览插件效果！ 

![](https://uni.ckapi.pro/uniapp/publicize.png)

### 使用方式
``` html
<liu-search :hotList="hotList" @input="input" @change="change"></liu-search>
```
``` javascript
export default {
	data() {
		return {
			hotList: ['白酒', '苹果醋', '红酒', '笔记本', '洗衣液', '平板电脑', '电视机'],//热门搜索
			blurList: ['我的', '我要红包', '我要开红包', '我的红包', '我的世界'],//模糊搜索内容
		};
	},
	methods: {
		//搜索回调
		change(e) {
			console.log('搜索回调信息：' + e)
		},
		//input事件
		input(e){
			console.log('搜索框输入的内容：' + e)
		}
	}
}
```

### 属性说明
| 名称                         | 类型           | 默认值                  | 描述             |
| ----------------------------|--------------- | ---------------------- | ---------------|
| hotList                     | Array          | []                     | 热门搜索数据
| blurList                    | Array          | []                     | 模糊搜索内容
| placeholder                 | String         | '请输入'                | 输入框placeholder
| storageKey                  | String         | 'liu-search-name-list' | 搜索历史缓存key值(多个页面使用时需要传)
| @change                     | Function       |                        | 搜索回调事件
| @input                      | Function       |                        | 搜索框input回调事件



