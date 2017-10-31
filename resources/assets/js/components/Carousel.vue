<template>
  <div class="block">
    <el-carousel height="300px" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in carousels" :key="index">
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        carousels : [
          {id: 1, name: 'bg1', src: 'img/bg1.jpg'},
          {id: 2, name: 'bg2', src: 'img/bg2.jpg'},
          {id: 3, name: 'bg3', src: 'img/bg3.jpg'},
          {id: 4, name: 'bg4', src: 'img/bg4.jpg'},
          {id: 5, name: 'bg5', src: 'img/bg5.jpg'}
        ]
      }
    },
    mounted() {
    },
    methods: {
    }
  }

</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>