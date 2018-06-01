<template>
  <div class="page-content">



  <div class="slider">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeData" :key="item.pic">
        <img :src="item.pic">
      </mt-swipe-item>
    </mt-swipe>
  </div>
    <div class="types">
      <types-item  v-for="(item,index) in types" :cellData='item' :key="index" @click.native="itemClick(index)">
      </types-item>
    </div>
    <div class="shops">
      <shop-item v-for="(item,index) in shopList" :item="item" :key="index"></shop-item>
    </div>
  </div>
</template>

<script>
  import TypeItem from '../components/TypeItem'
  import ShopItem from '../components/ShopItem'
    export default {
      name: "Index",
      components:{
       'types-item': TypeItem,
       'shop-item': ShopItem
      }
      ,
      data() {
        return {
          swipeData: [
            {pic:require('../assets/images/swipe/1.png')},
            {pic:require('../assets/images/swipe/2.png')}
          ],
          types:[
            {
              icon: require('../assets/images/types/ms.png'),
              title: '美食'
            },
            {
              icon: require('../assets/images/types/mtcs.png'),
              title: '美团超市'
            },
            {
              icon: require('../assets/images/types/sxgs.png'),
              title: '生鲜果蔬'
            },
            {
              icon: require('../assets/images/types/tdyp.png'),
              title: '甜点饮品'
            },
            {
              icon: require('../assets/images/types/mtzs.png'),
              title: '美团专送'
            },
            {
              icon: require('../assets/images/types/zcyx.png'),
              title: '正餐优选'
            },
            {
              icon: require('../assets/images/types/kcxc.png'),
              title: '快餐小吃'
            },
            {
              icon: require('../assets/images/types/hbps.png'),
              title: '汉堡披萨'
            }
          ],
          shopList: [
            {
              "id": 1000,//id
              "type":1,//1代表新店、2代表品牌店、0代表都不是
              "name": "你的名字",//店名
              "delivery_type": 1,//1代表美团专送，0代表不是
              "pic_url": "http://p0.meituan.net/0.84.63/xianfu/54c60749841a6612df373dc259e8da73108176.jpg",//图片地址
              "avg_delivery_time": 30,//平均送达时间
              "delivery_distance": 2032,//平均送达距离(单位为米，超过一千米要转化成千米)
              "min_price": 20,//起送价
              "delivery_price": 3,//配送费
              "wm_poi_score": 4.7,//评分
              "month_sale_num": 33,//月售
              "shop_discount": {
                "code":0,//是否能领代金券
                "dis_money":[2,4]//返回的代金券(多张)
              },
              "shop_return_price": {
                "code":0,//是否返券
                "min_price":20,//返券起始价格
                "dis_money":4//商家返券数
              },
              "shop_return_invoice": {
                "code":0,//是否开发票
                "min_price":0,//开票起始价格
              },
            },
            {
              "id": 1001,//id
              "type":0,//1代表新店、2代表品牌店、0代表都不是
              "name": "叫了个炸鸡(鼓楼店)",//店名
              "delivery_type": 1,//1代表美团专送，0代表不是
              "pic_url": "http://p0.meituan.net/0.84.63/xianfu/00b9386a556a39010186a609ce9289e370566.jpg",//图片地址
              "avg_delivery_time": 30,//平均送达时间
              "delivery_distance": 2502,//平均送达距离(单位为米，超过一千米要转化成千米)
              "min_price": 20,//起送价
              "delivery_price": 3,//配送费
              "wm_poi_score": 4.2,//评分
              "month_sale_num": 3857,//月售
              "shop_discount": {
                "code":1,//是否能领代金券
                "dis_money":[1,5,10]//返回的代金券(多张)
              },
              "shop_return_price": {
                "code":0,//是否返券
                "min_price":20,//返券起始价格
                "dis_money":1//商家返券数
              },
              "shop_return_invoice": {
                "code":0,//是否开发票
                "min_price":0,//开票起始价格
              },
            },
            {
              "id": 1002,//id
              "type":2,//1代表新店、2代表品牌店、0代表都不是
              "name": "望湘园(南京国际广场店)",//店名
              "delivery_type": 0,//1代表美团专送，0代表不是
              "pic_url": "http://p1.meituan.net/0.84.63/xianfu/2d91e93c70f91696907f040392c4835f13918.jpg",//图片地址
              "avg_delivery_time": 30,//平均送达时间
              "delivery_distance": 889,//平均送达距离(单位为米，超过一千米要转化成千米)
              "min_price": 20,//起送价
              "delivery_price": 3.5,//配送费
              "wm_poi_score": 4.7,//评分
              "month_sale_num": 1435,//月售
              "shop_discount": {
                "code":0,//是否能领代金券
                "dis_money":[2,4]//返回的代金券(多张)
              },
              "shop_return_price": {
                "code":0,//是否返券
                "min_price":20,//返券起始价格
                "dis_money":4//商家返券数
              },
              "shop_return_invoice": {
                "code":1,//是否开发票
                "min_price":0,//开票起始价格
              },
            }
          ]

        }
      },
      methods:{
        itemClick(index){
          console.log('index == '+index);
        }
      }
    }
</script>

<style lang="scss" scoped>
@import "../assets/css/index";
</style>
