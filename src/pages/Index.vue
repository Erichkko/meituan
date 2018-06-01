<template>
  <div class="slider">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeData" :key="item.pic">
        <img :src="item.pic">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
      name: "Index",
      data() {
        return {
          swipeData: [
            {pic:require('../assets/images/swipe/1.png')},
            {pic:require('../assets/images/swipe/2.png')}
          ],
        }
      }
    }
</script>

<style lang="scss" scoped>
@import "../assets/css/index";
</style>
