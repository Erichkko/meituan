<template>
    <div>
      <router-view ></router-view>
      <tabbar></tabbar>
    </div>
</template>

<script>
  import Tabbar from './Tabbar'
    export default {
      name: "Home",
      components:{
        'tabbar':Tabbar
      },
      computed:{
        onRoutes(){
          return this.$route.path.replace('/','');
        }
      },
    }
</script>

<style scoped>

</style>
