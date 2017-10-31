<template>
  <div class="warp">
    <TopMenus></TopMenus>
    <div class="container main">
        <router-view></router-view>
    </div>    
    <BottomFooter></BottomFooter>  
  </div>
</template>

<script>
import TopMenus from './components/TopMenus.vue'
import BottomFooter from './components/BottomFooter.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        TopMenus,
        BottomFooter
    }
}
</script>

<style lang="scss">
    .warp {
        display: flex;
        flex-flow: column;
        min-height: 100vh;
        
        .main {
            flex: 1;
        }
    }

</style>