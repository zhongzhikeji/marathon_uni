<template>
	<view class="allClass">
	<cc-defineCateList :data="data" @tapselect="cateItemClick" :parentList='list' @product='onProduct'></cc-defineCateList>
	<view class="footer" v-show="attr.cartAttr">
		<u-button color=" #EB3D74"  text="加入购车" @click="joinCart"></u-button>
	</view>
	<!-- SKU 弹窗 -->
	<productWindow :attr="attr" :isShow='1' :iSplus='1' @ChangeAttr="ChangeAttr" @ChangeCartNum="ChangeCartNum"
		@iptCartNum="iptCartNum" @close="closeAttr" />
	</view>
</template>

<script>
import * as Api from '@/api/product/category.js';
import productWindow from '@/components/productWindow';
import * as ProductUtil from '@/utils/product.js';
import * as TradeCartApi from '@/api/trade/cart.js';
    export default {

        data() {
            return {
                // 列表数组 navtitle:标题 shop:展示列表
                data: [],
				list:[],
				attr: { // productWindow 组件，使用该属性
					cartAttr: false, // 是否打开属性的选择弹出
					properties: [],
					productSelect: {} // 选中的 SKU
				},
				skuMap: [], // 商品 SKU Map
				attrValue: '',

            }
        },
		components: {
			productWindow
		
		},
        mounted() {
          this.getList()
		  
        },
        methods: {
            getList(){
				Api.getParentList().then(res=>{
				this.list = res.data
				this.getListProducts()
			 
				})
			},
			getListProducts(id){
				Api.getChildListAndProducts(id||this.list[0].id).then(res=>{
					 this.data = res.data
				
				})
			},
            cateItemClick(item) {
               this.getListProducts(item.id)
             console.log(item)
            },
			ChangeAttr(newSkuKey, propertyIndex, valueIndex) {
			
				// SKU
				let sku = this.skuMap[newSkuKey];
				
				if (!sku) {
					return;
				}
				
				this.$set(this.attr.productSelect, "id", sku.id);
				this.$set(this.attr.productSelect, "picUrl", sku.picUrl);
				this.$set(this.attr.productSelect, "price", sku.price);
				this.$set(this.attr.productSelect, "stock", sku.stock);
				this.$set(this.attr.productSelect, "cart_num", 1);
				// SKU 关联属性
				this.$set(this.attr.properties[propertyIndex], 'index',
					this.attr.properties[propertyIndex].values[valueIndex].name);
				this.$set(this, "attrValue", newSkuKey);
			},
			ChangeCartNum(changeValue) {
				// 获取当前 sku
				let sku = this.attr.productSelect;
				if (!sku) {
					return;
				}
				// 设置数量
				let stock = sku.stock || 0;
				if (changeValue) {
					sku.cart_num++;
					if (sku.cart_num > stock) {
						this.$set(this.attr.productSelect, "cart_num", stock);
					}
				} else {
					sku.cart_num--;
					if (sku.cart_num < 1) {
						this.$set(this.attr.productSelect, "cart_num", 1);
					}
				}
			},
			iptCartNum(number) {
				this.$set(this.attr.productSelect, 'cart_num', number ? number : 1);
			},
			closeAttr: function() {
				this.$set(this.attr, "cartAttr", false);
			},
			openAttr: function() {
				this.$set(this.attr, 'cartAttr', true);
			},
			selectDefaultSku: function(name) {
				
				const properties = this.attr.properties;
				// 获得选中的属性值的名字，例如说 "黑色,大"，则 skuKey = ["黑色", "大"]
				let skuKey = undefined;
				for (let key in this.skuMap) {
					if (this.skuMap[key].stock > 0) {
						skuKey = key.split(",");
						break;
					}
				}
				if (!skuKey) { // 如果找不到，则选中第一个
					skuKey = Object.keys(this.skuMap)[0].split(",");
				}
				// 使用 index 属性表示当前选中的，值为属性值的名字
				for (let i = 0; i < properties.length; i++) {
					this.$set(properties[i], "index", skuKey[i]);
				}
			
				let sku = this.skuMap[skuKey.join(",")];
				if (!sku) {
					return
				}
			
				this.$set(this.attr.productSelect, "spuName", name);
				this.$set(this.attr.productSelect, "id", sku.id);
				this.$set(this.attr.productSelect, "picUrl", sku.picUrl);
				this.$set(this.attr.productSelect, "price", sku.price);
				this.$set(this.attr.productSelect, "stock", sku.stock);
				this.$set(this.attr.productSelect, "cart_num", 1);
				this.$set(this, "attrValue", skuKey.join(","));
			},
			onProduct(item){
			
				let skus = item.skus;
				this.$set(this.attr, 'properties', ProductUtil.convertProductPropertyList(skus));
				this.$set(this, 'skuMap', ProductUtil.convertProductSkuMap(skus));
			 // 选中默认 sku
			 this.selectDefaultSku(item.spuName);
				console.log(this.attr.productSelect)
			  if (!this.attr.cartAttr) {
			  	this.openAttr();
			  	return
			  }
		
		
			},
			joinCart(){
				// 库存不足
				let sku = this.attr.productSelect;
				if (sku.stock === 0) {
					return that.$util.Tips({
						title: "产品库存不足，请选择其它"
					});
				}
				// 添加购物车
				TradeCartApi.addCart({
					count: sku.cart_num,
					skuId: sku.id,
				}).then(res => {
					// 关闭 attr 组件
					this.attr.cartAttr = false;
					// 提示成功
					this.$util.Tips({
						title: "添加购物车成功",
						success: () => {
							// this.getCartCount(true);
						}
					});
				}).catch(res => {
					this.$util.Tips({
						title: res
					});
				});
			}

        }
    }
</script>

<style lang="scss" scoped>
	.allClass{
		
		.footer{
			z-index: 778;
			width: 100%;
			position: absolute;
			bottom: 0;
		}
		.u-button{
			border-radius:20rpx;
		}
	}

</style>