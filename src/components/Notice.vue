<template>
  <div class="notice">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Notice',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.notice {
  margin: 20px;
  padding: 7px 12px;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgb(255, 255, 160);
  border-radius: 8px;
  
  h3 {
    font-size: 12px;
    padding: 0 10px;
  }
}
</style>
