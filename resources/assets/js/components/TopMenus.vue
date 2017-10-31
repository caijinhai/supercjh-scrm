<template>
  <el-row class="theme-dark">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo container" mode="horizontal" @select="handleSelect">
      <el-col class="navbar-icon">
        <img src="img/mogu_blue.png" />
      </el-col>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2"></a>联系</el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  .navbar-icon {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>