<template>
  <div class="row">
    <Carousel></Carousel>
    <el-tabs type="border-card" class="mb20" value="web">
      <el-tab-pane label="网站卡片" name="web">
        <div class="row">
          <div class="col-sm-6 col-md-3 pb20" v-for="(web, index) in webCards" :key="index">
            <Card v-bind="web"></Card>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="文章列表" name="easy">
        <div v-for="(easy, index) in easyCards" :key="index">
          <EasyCard v-bind="easy"></EasyCard>
        </div>
      </el-tab-pane>
    </el-tabs>
    <Pagination class="fr" v-bind:total="3"></Pagination>
  </div>
</template>

<script>
  import Carousel from '../components/Carousel.vue'
  import Card from '../components/Card.vue'
  import Pagination from '../components/Pagination.vue'
  import EasyCard from '../components/EasyCard.vue'

  export default {
    data() {
      return {
        webCards: [
          {id: 1, name: "user1", description: "I'm user1"},
          {id: 2, name: "user2", description: "I'm user2"},
          {id: 3, name: "user2", description: "I'm user2"}
        ],
        easyCards: [
          {id: 1, img: "img/bg1.jpg", name: "Flex 布局", description: 'Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。(http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)'},
          {id: 2, img: "img/bg2.jpg", name: "Sticky footers设计", description: "sticky footer 完美实现css绝对底部 (http://www.w3cplus.com/css3/css-secrets/sticky-footers.html)"}
        ],
      }
    },
    methods: {
    },
    components: {
        Carousel,
        Card,
        Pagination,
        EasyCard
    }
  }
</script>

<style lang="scss">

</style>