<template>
  <div class="types-item">
    <img :src="cellData.icon" >
    <span>{{cellData.title}}</span>
  </div>
</template>

<script>
    export default {
      name: "TypeItem",
      props: {
        cellData: Object,
    },
      methods:{
      }
    }
</script>

<style scoped>
  .types-item {
    background-color: #fff;
    float: left;
    width: 25%;
    padding-top: 14px;
  }
  .types-item img {
    display: block;
    width: 50px;
    margin: 0 auto 12px;
  }
  .types-item span {
    display: block;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #2f2f2f;
  }
</style>
