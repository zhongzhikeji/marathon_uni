<template>
  <view class="container " style="padding-bottom: 180rpx;">
    <u-navbar @leftClick="leftClick" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent"
      :title="content.title">

    </u-navbar>
    <view class="ml10 mr10">
      <view class="img">
        <u--image radius='10' :showLoading="true" :src="content.picUrl" width="100%" height="376rpx"
          @click="click"></u--image>
        <view class="statuse"
          :class="{status1: content.meetStatus == 0,status2: content.meetStatus == 1,status3: content.meetStatus == 2,status4: content.meetStatus == 3,status5: content.meetStatus == 4,status6: content.meetStatus == 5,status7: content.meetStatus == 6,status8: content.meetStatus == 7}">
          <text class="test">{{statusText(content)}}</text>

        </view>
      </view>
      <view class="pl10 pr10 bg-w mt10 mb10 pb10 pt10 radis">
        <view class=" space">
          <view class="flex cloum pl5 pr5">
            <view>

              <text class="ft16 ftw600 ">{{content.title}}</text>
            </view>
            <view class="flex alcenter mb5 mt5">
              <u-icon name="clock" color="#EB3D74" size="15"></u-icon>
              <text class="ml5">时间：{{formatDate(content.minStartTime,"YYYY-MM-DD HH:mm")}}</text>
            </view>
            <view class="flex alcenter">
              <u-icon name="map" color="#2D71FF" size="15"></u-icon>
              <text class="ml5">地点：{{content.detailAddress}}</text>
            </view>

          </view>
        </view>
      </view>
      <view class="flex mt10 space">
        <view class="bsBg ">
          <view class="pl20 pt10 ft16 ftw600">比赛天气</view>
          <view class="flex cloum center alcenter mt10">
            <text>多云</text>
            <text style="color: #EB3D74;" class="mt5 mb5">2C°- 3C°</text>
            <text>微风</text>
          </view>
        </view>
        <view>
          <view class="sdbg">
            <view class="pl20 pt10" @click="$u.route(`/pages/subCompetition/competition/trackChart?spuId=${content.id}`)">
              <view>赛道图</view>
              <view>查看明细场地路线</view>
            </view>

          </view>
          <view class="cxbg pb10" @click="$u.route('/pages/subCompetition/competition/query')">
            <view class="pl20 pt10 ">
              <view>查询</view>
              <view class="ft12">查询报名状态,比赛号成绩</view>
            </view>

          </view>
        </view>
      </view>
      <view class="flex  pt10 pb10 bg-w mt10 mb10" style="border-radius: 10rpx;">
        <view class="outTime">
          <view class="step">1</view>
          <view class="ft14" style="color: #EB3D74;">开始报名</view>
          <view class="ft12 mt5 text-center">
            {{formatDate(content.minJoinStartTime,'YYYY-MM-DD')}}至{{formatDate(content.maxJoinStartTime,'MM-DD')}}
          </view>
        </view>
        <view class="outTime">
          <view class="stepn">2</view>
          <view class="ft14">报名截止</view>
          <view class="ft12 mt5 text-center">
            {{formatDate(content.minJoinEndTime,"YYYY-MM-DD")}}至{{formatDate(content.maxJoinEndTime,'MM-DD')}}
          </view>
        </view>
        <view class="outTime">
          <view class="stepn">3</view>
          <view class="ft14">抽签结果</view>
          <view class="ft12 mt5 text-center">
            {{formatDate(content.drawStartTime,"YYYY-MM-DD")}}至{{formatDate(content.drawEndTime,'MM-DD')}}
          </view>
        </view>
        <view class="outTime">
          <view class="stepn">4</view>
          <view class="ft14">开始比赛</view>
          <view class="ft12 mt5 text-center">
            {{formatDate(content.minStartTime,"YYYY-MM-DD")}}至{{formatDate(content.maxStartTime,'MM-DD')}}
          </view>
        </view>
        <view class="outTime">
          <view class="stepn">5</view>
          <view class="ft14">比赛结束</view>
          <view class="ft12 mt5 text-center">
            {{formatDate(content.minEndTime,"YYYY-MM-DD")}}至{{formatDate(content.maxEndTime,'MM-DD')}}
          </view>
        </view>
      </view>
      <view class="tuanbao" v-show="content.enableGroup">
        <view class="flex">
          <view class="bradis">团</view>
          <view>
            <view class="ft16 mb5 ">团报优惠</view>
            <view class="cl-placeholder">10人组团报名可优惠20元</view>
          </view>
        </view>
        <view class="btn">
          团报
        </view>
      </view>
      <view class="tuanbao">
        <view class="flex">
          <view class="bradis" style="color: #2D71FF;">码</view>
          <view>
            <view class="ft16 mb5 ">邀请码报名</view>
            <view class="cl-placeholder">使用加密邀请码免费报名</view>
          </view>
        </view>
        <view class="btn">
          邀请码
        </view>
      </view>
      <view class="group_item">
        <u-cell-group :border='false'>

          <u-cell icon='https://marathon.zznet.live/file/uploadPath/image/competition/zysx.png' size="large"
            title="注意事项" value="查看" isLink @click="$u.route(`/pages/competition/lookout?spuId=${id}`)"></u-cell>
          <u-cell icon='https://marathon.zznet.live/file/uploadPath/image/competition/jsgz.png' size="large"
            title="竞赛规程" value="查看" isLink @click="$u.route(`/pages/competition/regulation?spuId=${id}`)"></u-cell>
          <u-cell :border='false' icon='https://marathon.zznet.live/file/uploadPath/image/competition/hdzx.png'
            size="large" title="活动资讯" value="查看更多" isLink
            @click.stop="$u.route(`/pages/competition/eventsMsg?spuId=${id}`)">

          </u-cell>
        </u-cell-group>
        <view>
          <view class="flex  ml10 mr10 pb10">
            <view>
              <u--image v-if="content.relatedArticles" radius='7' :src="content.relatedArticles.picUrl" width="66"
                height="66" @click="click"></u--image>
            </view>
            <view class="ml10">

              <view class="mb10">
                <u--text v-if="content.relatedArticles" :lines="1" :text="content.relatedArticles.title"
                  :bold='true'></u--text>
              </view>
              <u--text v-if="content.relatedArticles" color='#CCCCCC' size='12' :lines="2"
                :text="content.relatedArticles.introduction"></u--text>
            </view>
          </view>
          <view class="flex space ml10 mr10 pb10">
            <view>2022-02-21 14:00</view>
            <view class="flex space">
              <view class="flex mr10">
                <u-icon name="eye"></u-icon>
                <view>7845</view>
              </view>
              <view class="flex">
                <u-icon name="heart"></u-icon>
                <view>562</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>





    <!-- 	<view class="banner mt10">
			<view class="flex ml25 pb10 pt10 ">
				<view class="">
					<u--image :showLoading="true" v-if="content.relatedArticles && content.relatedArticles.articlesPicUrl" :src="content.relatedArticles.articlesPicUrl" width="105px" height="65px"></u--image>
					<view class="ft12 mt2"></view>
				</view>
				<view class=" mr30 ml15">
					<view class="ft14 ftw600" v-if="content.relatedArticles && content.relatedArticles.articlesTitle">{{content.relatedArticles.articlesTitle}}</view>
					<u--text size='12' :lines="3"
						:text="content.relatedArticles.articlesContent" v-if="content.relatedArticles && content.relatedArticles.articlesContent"></u--text>
				</view>
			</view>
		</view> -->
    <view v-html="content.description">


    </view>
    <view class="footer">
      <view class="flex pt10 pb10 ml10 mr10 alcenter around">
        <view class="flex cloum ft12">
          <text>距离</text>
          <text>比赛</text>
        </view>
        <!-- <text class="title"></text> -->
        <u-count-down :time="iscount" format="DD:HH:mm:ss" autoStart millisecond @change="onChange">
          <view class="time flex">
            <view class="flex alcenter">
              <text class="time__item">{{ timeData.days }}</text>
              <text>天</text>
            </view>
            <view class="flex alcenter">
              <text class="time__item">{{ timeData.hours>10?timeData.hours:'0'+timeData.hours}}</text>
              <text>时</text>
            </view>
            <view class="flex alcenter">
              <text class="time__item">{{ timeData.minutes }}</text>
              <text>分</text>
            </view>
            <view class="flex alcenter">
              <text class="time__item">{{ timeData.seconds }}</text>
              <text>秒</text>
            </view>


          </view>
        </u-count-down>
        <view>
          <u-button throttleTime='800' @click="onhandled" style="font-size: 20px;" size='large' type="primary"
            :customStyle='btnStyle'>去报名</u-button>
        </view>

      </view>

    </view>
    <u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open">
      <view class="ml15 mr15 mt15 mb15">
        <view v-show='isSign == 2'>
          <view class="ft18 ftw600 flex alcenter">
            <text class="titleColor"></text>
            <view class="ml10">选择参赛类目</view>
          </view>
          <view :key="index" :class="{
					        'bgColor': currentIndex === index,
					        'isbgColor': currentIndex !== index
					      }" @click="istab(index,keys)" class="pl10  pb20  leimu" v-for="(keys,index) in content.skuList">
            <view class="flex" style="flex-direction: row-reverse;">
              <view class="tag">抽签中</view>
            </view>


            <view class="ft16 ftw600">{{keys.name}}</view>

            <view class="flex space alcenter">
              <view>
                <view class="ft12 mt8" style="color:#7F7F7F">
                  报名时间：{{formatDate(keys.joinStartTime,'YYYY-MM-DD')}} --
                  {{formatDate(keys.joinEndTime,'YYYY-MM-DD')}}
                </view>
                <view class="ft12 mt5" style="color:#7F7F7F">报名方式：抽签</view>
              </view>
              <view style="color: #EB3D74;margin-right: 20rpx;font-weight: bold;">￥{{fen2yuan(keys.price)}}</view>
            </view>

            <view class="ft12 mt5 pt5 pb5 pl5 pr5 mr5"
              style="color:#ED419F;background-color: #FFEEF3;border-radius: 10rpx;" v-html="keys.description"></view>
          </view>

          <view class="flex cloum mt20">
            <view class="flex ft12">
              <u-icon name='info-circle' color="#DCDCDC" :bold='true'></u-icon>
              <text class="ml10 ">缴费之后不支持退款</text>
            </view>
            <view class="flex ft12 mt8">
              <u-icon name='info-circle' color="#DCDCDC" :bold='true'></u-icon>
              <text class="ml10 ">我已关注公众</text>
            </view>
          </view>
          <view class="mt25">
            <u-button @click="onDraw()" color='#EB3D74' style="font-size: 18px;color:#000;font-weight: bold;"
              size='large'>下一步</u-button>
          </view>
        </view>
        <view v-show='isSign == 3'>
          <view class="ft18 ftw600 flex alcenter">
            <text class="titleColor mr10"></text>
            <view>选择参赛选手</view>
          </view>

          <view style="height: 400px;">
            <mescroll-uni @init="mescrollInit" @down="downCallback" @up="upCallback" :down='downOption' :up='upOption'
              :fixed='false'>
              <view v-for="(item,index) in infoList" :key='item.id'>
                <view :class="isSelected(item)?'bgColor':'isbgColor'" @click="onTrant(item)"
                  class="pl10 pt10 pb20 flex alcenter space">
                  <view class="flex alcenter">
                    <view :class="isSelected(item)?'b_radis':'b_isradis'" class="mr10"></view>
                    <view class="flex cloum">
                      <view class="ft16 ftw600">{{item.name}}</view>
                      <view class="ft12 mt8" style="color:#AEAEAE">
                        {{item.idCard}}
                      </view>

                    </view>

                  </view>


                  <view class="mr20" style="color: #EB3D74;">
                    <view v-show="content.skuList[currentIndex].gender != item.gender && content.skuList[currentIndex].gender<3">性别不符合报名条件</view>
                    <view
                      v-show="content.skuList[currentIndex].minAge >= item.age || content.skuList[currentIndex].maxAge <=item.age">
                      年龄不符合报名条件</view>

										 <view v-for=" i in item.memberInfoConfigList">
                      <view v-show="!i.checked">{{i.description}}</view>

                    </view>


                    <u-button text="上传" color="#D2D2D7"
                      v-if='(content.skuList[currentIndex].minAge >= item.age || content.skuList[currentIndex].maxAge <=item.age) && content.skuList[currentIndex].gender != item.gender'></u-button>
                    <u-button text="上传" color="#EB3D74"
                      @click="$u.route(`/page_home/user/entrant/addInfo?id=${item.id}&skuId=${infoId}`)"
                      v-else></u-button>
                  </view>
                </view>

              </view>
            </mescroll-uni>

          </view>
          <view class="flex center" @click="$u.route('/page_home/user/entrant/index')">
            <view class="text-center addinfo">+新增参赛人</view>
          </view>


          <view class="mt30">
            <view class="flex alcenter space">
              <view class="flex  alcenter mr10">
                <view v-if="selected.length >= 1">
                  <view v-if="selected.length === 1" class="ftw600">
                    {{ selected[0].name }}
                  </view>
                  <view v-else class="ftw600">
                    {{ selected[0].name }}等
                  </view>

                </view>
                <view class="ft14 ml10" style="color: #D2D2D7;">已选{{selected.length}}人</view>

              </view>
              {{selected.length}}
              <u-button :customStyle='foterStyle' color='#D2D2D7' v-if="selected.length == 0"
                style="font-size: 18px;color:#fff;font-weight: bold;" size='large'>下一步</u-button>
              <u-button @click="onOrder" :customStyle='foterStyle' color='#EB3D74' v-if="selected.length >= 1"
                style="font-size: 18px;color:#fff;font-weight: bold;" size='large'>下一步</u-button>
            </view>

          </view>
        </view>
      </view>
    </u-popup>
    <u-popup :show="isAttend" :round="10" mode="bottom" @close="queryClose" @open="queryOpen">
      <view class="ml15 mr15 mt15 mb20">
        <view class="flex space mb20 alcenter">
          <view class="ft16 ftw600">参赛号码</view>
          <view class="flex">
            <view class="queryBtn ">查询其他人</view>
            <u-icon name="close-circle" size="25" @click="queryClose"></u-icon>
          </view>

        </view>
        <view class="pt10">
          <view class="bg-b cl-w pt15 pb15 text-center ftw600">2023厦门日出女子马拉松</view>
          <view class="mt15 mb10">
            <view class="cl-b ft24 ftw600 text-center">A1018</view>
            <view class="cl-b ft18 ftw600 text-center mt14">胡桃</view>
          </view>
          <view class="bg-b cl-w pt24 pb24 "></view>
        </view>
        <view class="flex space alcenter pt10 pb15">
          <view class="ft12">此参赛号图片仅供互联网传播使用</view>
          <u-icon name="share-fill" size="30" color='#000'></u-icon>
        </view>
        <view class="ft16 ftw600">报名后必须关注公众号，避免错过最新通知公告</view>
        <view class="flex ft12 mt20">
          <u-icon name='info-circle' color="#000" :bold='true'></u-icon>
          <text class="ml5 ftw600">赛前领物通知请见公众号后续通知文章</text>
        </view>
        <view class="flex alcenter space pt20 ">
          <view class="item">
            <view class="cl-w ftw600 ft20">赛事助手</view>
            <view class="ft12 mt5">参赛助手</view>
          </view>
          <view class="item">
            <view class="cl-w ftw600 ft20">赛事日历</view>
            <view class="ft12 mt5">全国赛事一网打尽</view>
          </view>
          <view class="item">
            <view class="cl-w ftw600 ft20">装备优选</view>
            <view class="ft12 mt5">轻松赚回报名费</view>
          </view>
        </view>
        <view class="points mt20">
          <view class="flex alcenter pt10 pb10 ml10 mr10 space">
            <view class="flex">
              <u--image src='https://marathon.zznet.live/file/uploadPath/img/jifen.png' width="85rpx"
                height="85rpx"></u--image>
              <view class="ml10">
                <view class="ft14 cl-w ftw600">积分到账 +20</view>
                <view class="ft14 cl-w">支付成功获得抽奖积分</view>
              </view>
            </view>

            <view>
              <u-button shape="circle" style="font-weight: bold;">去抽奖</u-button>
            </view>
          </view>

        </view>
        <view class="flex around mt20">
          <u-icon labelPos='bottom' label="联系客服" size="40"
            name="https://marathon.zznet.live/file/uploadPath/img/kefu.png"></u-icon>
          <u-icon labelPos='bottom' label="福利社群" size="40"
            name="https://marathon.zznet.live/file/uploadPath/img/fuli.png"></u-icon>
          <u-icon labelPos='bottom' label="常见问题" size="40"
            name="https://marathon.zznet.live/file/uploadPath/img/fankui.png"></u-icon>
        </view>
        <view class="text-center mt20 ft14">证照信息</view>
      </view>
    </u-popup>

  </view>
</template>

<script>
  import * as Api from '@/api/competition/list.js';
  import * as AddressApi from '@/api/member/address.js';
  import * as Util from '@/utils/util.js';
  import dayjs from '@/plugin/dayjs/dayjs.min.js';
  import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
  export default {
    mixins: [MescrollMixin], // 使用mixin
    data() {
      return {
        src: 'https://cdn.uviewui.com/uview/album/1.jpg',

        downOption: {
          use: false
        },
        isClass: true,
        isSign: '1',
        show: false,
        isAttend: false,
        iscount: '',
        timeData: {},
        btnStyle: {
          width: '230rpx',
          background: '#EB3D74',
          border: 'none'

        },
        draw: {
          spuId: ''
        },
        upOption: {
          onScroll: true,
          page: {
            size: 5
          }
        },
        infoList: [],
        id: '',
        selected: [],
        content: {

        },
        infoId: '',
        currentIndex: 0,
        foterStyle: {
          width: '348rpx'
        },


      }
    },
    computed: {
      statusText() {
        return (item) => {
          switch (item.meetStatus) {

            case 0:
              return '未开始';
            case 1:
              return '预报名';
            case 2:
              return '报名中';
            case 3:
              return '抽签中';
            case 4:
              return '比赛中';
            case 5:
              return '比赛结束';
            case 6:
              return '比赛延期';
            case 7:
              return '比赛取消';

          }

        }
      }
    },
    onLoad(e) {
      this.id = e.id
      if (e.isSign) {
        this.show = true
        this.isSign = e.isSign
      }
      this.getList()
      // this.getInfoList()
    },

    methods: {

      getList() {

        Api.getDetails(this.id).then(res => {
          let data = new Date().getTime()
          this.iscount = res.data.minStartTime - data
          this.content = res.data
        })
      },
      //后去参赛人员
      getInfoList() {

      },
      fen2yuan(price) {
        return Util.fen2yuan(price)
      },
      onhandled() {
        this.$u.route(`/pages/subCompetition/competition/regulation?spuId=${this.id}`)

      },
      onDraw() {
        this.isSign = 3
        if (this.currentIndex == 0) {
          this.infoId = this.content.skuList[0].id
          // this.draw.spuId = this.content.skuList[0].spuId
        }

        this.reloadList()

      },
      onOrder() {

        let memberIds = []
        this.selected.forEach(item => {
          memberIds.push(item.id)
        })
        console.log(memberIds)
        let obj = {
          spuId: this.id,
          skuId: this.infoId,
          ids: memberIds
        }
        Api.checkMember(obj).then((res) => {
            this.$u.route(`/pages/subCompetition/competition/order?memberIds=${memberIds}&skuId=${this.infoId}`)
          },
          (err) => {
            // console.log(err)
            uni.$u.toast(err)
          }
        )
        // if (this.selected.length > 0) {
        // 	this.$u.route(`/pages/subCompetition/competition/order?memberIds=${memberIds}&skuId=${this.infoId}`)
        // } else {
        // 	uni.$u.toast('请选择参赛人员')
        // }

      },
      open() {
        // console.log('open');
      },
      onChange(e) {

        this.timeData = e
      },
      close() {
        this.show = false
        setTimeout(() => {
          this.isSign = 1
        }, 500)
      },
      queryOpen() {
        // console.log('open');
      },
      queryClose() {
        this.isAttend = false

      },
      istab(index, item) {
        this.currentIndex = index;
        this.draw = item.spuId
        this.infoId = item.id
        console.log(this.infoId)
      },
      isSelected(item) {

        return this.selected.includes(item);
      },
      reloadList() {
        this.mescroll.resetUpScroll();
      },
      onTrant(item) {

        const index = this.selected.indexOf(item);

        if (this.content.skuList[this.currentIndex].minAge >= item.age || this.content.skuList[this.currentIndex]
          .maxAge <= item.age) {
          uni.$u.toast('年龄不符合报名条件')
        }
        // 如果不是不限制性别 或者 性别非情侣 的比赛
        else if(this.content.skuList[this.currentIndex].gender<3){
          if(this.content.skuList[this.currentIndex].gender != item.gender ){
            console.log('系统性别要求:'+this.content.skuList[this.currentIndex].gender+'参赛选手性别:'+item.gender)
            uni.$u.toast('性别不符合报名条件')
          }
        }

        else {

          if (index === -1) {
            this.selected.push(item);
          } else {
            this.selected.splice(index, 1);
          }
        }





      },
      query() {
        this.isAttend = true
      },
      onhandnext() {
        this.isSign = 2
        console.log(this.isSign)
      },
      upCallback(page) {

        let pageNum = page.num; // 页码, 默认从1开始

        let pageSize = page.size; // 页长, 默认每页10条
        let id = this.infoId
        console.log(this.infoId)
        AddressApi.getcomList(pageNum, pageSize, id).then(res => {
          console.log(res)
          let curPageData = res.data.list;
          let curPageLen = curPageData.length;
          let totalPage = res.total
          if (page.num == 1) this.infoList = [];
          this.infoList = this.infoList.concat(curPageData);

          this.mescroll.endByPage(curPageLen, totalPage);
          // this.infoList = res.data
        }).catch(err => {
          console.log(err)
        });
      },
      formatDate(date, time) {
        // "YYYY-MM-DD HH:mm:ss"
        return dayjs(date).format(time);
      },
      leftClick() {
        uni.switchTab({
          url: '/pages/competition/index'
        })
      }
    }
  }
</script>

<style lang="scss">
  .img {
    width: 100%;
    height: 376rpx;
    position: relative;
  }

  .btn {
    background: linear-gradient(90deg, rgba(247, 145, 184, 1) 50%, rgba(255, 255, 255, 1) 100%);
    padding: 16rpx;
    border-radius: 20rpx;

    .time {
      color: #F4317E;
      font-size: 28rpx;
    }
  }

  .weather {
    background-color: #FFF5EB;
    border-radius: 20rpx;
    padding: 20rpx 100rpx 20rpx 20rpx;

  }

  .group_item {
    background-color: #fff;
    border-radius: 10rpx;

  }

  .banner {
    background-color: #FAFAFA;

  }

  .footer {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;

    .title {
      width: 40rpx;

      display: inline-block;
    }
  }

  .bgColor {
    background-color: #FFF6F9;
    margin-top: 30rpx;
    border: 1px solid #EB3D74;
    border-radius: 15rpx;

    .tag {


      font-size: 24rpx;
      display: inline-block;

      padding: 10rpx 25rpx;
      background-color: #FFF6D9;
      color: #F79D35;
      border-bottom-left-radius: 30rpx;
      border-top-right-radius: 10rpx;
    }
  }

  .isbgColor {
    background-color: #fff;
    margin-top: 30rpx;
    border: 1px solid #EDEDED;
    border-radius: 15rpx;

    .tag {
      font-size: 24rpx;
      display: inline-block;
      padding: 10rpx 25rpx;
      background-color: #FFF6D9;
      color: #F79D35;
      border-bottom-left-radius: 30rpx;
      border-top-right-radius: 10rpx;
    }
  }

  .add {
    background-color: #D9D9D9;
  }

  .queryBtn {
    border-radius: 50rpx;
    padding: 10rpx 20rpx;
    border: 1px solid #000;
    margin-right: 60rpx;
  }

  .points {
    background-color: #F7A17A;
    border-radius: 20rpx;
  }

  .item {
    background-color: #F79E2A;
    border-radius: 20rpx;
    padding: 20rpx 30rpx 20rpx 20rpx;
  }

  .outTime {
    margin: 0 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24rpx;

    .step {
      width: 60rpx;
      height: 60rpx;
      background-color: #EB3D74;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      line-height: 60rpx;
      margin-bottom: 10rpx;
    }

    .stepn {
      width: 60rpx;
      height: 60rpx;
      background-color: #E9E9E9;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      line-height: 60rpx;
      margin-bottom: 10rpx;
    }
  }

  .rbox {
    border-left: 1px dashed #f40;
    height: 0px;
    width: 20rpx;


  }

  .statuse {
    position: absolute;
    top: 20rpx;
    left: -5px;
    width: 86rpx;
    height: 52rpx;
    color: #fff;
    font-size: 24rpx;
    background-size: contain;

    .test {
      display: inline-block;
      width: 100%;
      height: 100%;
      margin-left: 5%;
      margin-top: 5%;
    }

  }

  .time__item {
    background-color: #EB3D74;
    // padding: 30rpx 15rpx;
    color: #fff;
    font-size: 40rpx;
    font-weight: bold;
    padding: 12rpx;
  }

  .status1 {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z1.png');
  }

  .status2 {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z2.png');
  }

  .status3 {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z3.png');
  }

  .status4 {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z4.png');
  }

  .status5 {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z5.png');
  }

  .status6 {
    width: 120rpx;
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z6.png');

  }

  .status7 {
    width: 120rpx;
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z7.png');

  }

  .status8 {
    width: 120rpx;
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/z8.png');

  }

  .bsBg {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/tq.png');
    background-size: 100% 100%;
    width: 344rpx;

  }

  .sdbg {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/sdt.png');
    background-size: 100% 100%;
    width: 340rpx;
    height: 120rpx;
  }

  .cxbg {
    background-image: url('https://marathon.zznet.live/file/uploadPath/image/competition/cx.png');
    background-size: 100% 100%;
    width: 340rpx;
    height: 120rpx;
  }

  .tuanbao {
    background: #FFFFFF;
    border-radius: 8rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35rpx 20rpx;
    margin: 20rpx 0;

    .bradis {
      width: 84rpx;
      height: 84rpx;
      line-height: 84rpx;
      background-color: #FFE8EF;
      color: #F23BB5;
      border-radius: 50%;
      text-align: center;
      font-size: 36rpx;
      font-weight: bold;
      margin-right: 20rpx;
    }

    .btn {
      padding: 20rpx 40rpx;
      background: #EB3D74;
      box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(180, 5, 60, 0.42);
      border-radius: 12rpx;
      color: #fff;
      text-align: center;
    }

  }

  .titleColor {
    width: 10rpx;
    height: 30rpx;
    background-color: #EB3D74;
    display: inline-block;
  }

  .b_radis {
    width: 40rpx;
    height: 40rpx;
    background-color: #EB3D74;
    border-radius: 50%;
  }

  .b_isradis {
    width: 40rpx;
    height: 40rpx;
    background: #FFFFFF;
    border: 1rpx solid #C9C9C9;
    border-radius: 50%;
  }

  .addinfo {
    width: 272rpx;
    height: 104rpx;
    line-height: 104rpx;
    background: rgba(255, 255, 255, 0);
    border-radius: 16rpx 16rpx 16rpx 16rpx;
    border: 1rpx solid #EB3D74;
    color: #EB3D74;
  }
</style>
