<template>
  <div class="page-content">
    <ul class="tab-bar">
      <router-link tag="li" to="index" exact><i class="icon-index" t></i><span>首页</span></router-link>
      <router-link tag="li" to="order"><i class="icon-order"></i><span>订单</span></router-link>
      <router-link tag="li" to="mine"><i class="icon-mine"></i><span>我</span></router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style lang="scss" scoped>
@import "../assets/css/tabbar.scss";
i{
  @extend i;
  background: url('../assets/images/tabbarBg.png') no-repeat;
}

</style>
