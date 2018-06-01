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
  </div>
</template>

<script>
  import TypeItem from '../components/TypeItem'
    export default {
      name: "Index",
      components:{
       'types-item': TypeItem
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
