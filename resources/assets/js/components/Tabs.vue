<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="用户名片">
        <Card></Card>
      </el-tab-pane>
      <el-tab-pane label="素材管理">
      </el-tab-pane>
      <el-tab-pane label="文章管理">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  data() {
    return {
      userCards: [
        {id: 1, name: "user1", description: "I'm user1"},
        {id: 2, name: "user2", description: "I'm user2"},
        {id: 2, name: "user2", description: "I'm user2"}
      ],
      contentCards: [
        {id: 1, name: "user1", description: "I'm user1"},
        {id: 2, name: "user2", description: "I'm user2"},
        {id: 2, name: "user2", description: "I'm user2"}
      ],
      easyCards: [
        {id: 1, name: "user1", description: "I'm user1"},
        {id: 2, name: "user2", description: "I'm user2"},
        {id: 2, name: "user2", description: "I'm user2"}
      ]
    }
  },
  components: {
    Card
  }
}

</script>