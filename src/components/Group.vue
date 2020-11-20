<template>
  <div class="group">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Group',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.group {
  margin: 20px;
  border: 1px solid rgb(211, 211, 211);
  position: relative;
  border-radius: 12px;
  padding: 20px 0;
  
  h2 {
    position: absolute;
    margin: 0;
    top: -12px;
    left: 20px;
    font-size: 14px;
    background: rgb(211, 211, 211);
    padding: 2px 22px;
    border-radius: 12px;
    display: inline-block;
  }
}
</style>
