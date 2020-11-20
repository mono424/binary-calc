<template>
  <div class="selector">
    <div v-for="item in items" :key="item.key" @click="$emit('select', item.key)" :class="{item:1, selected: selected === item.key}">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  props: {
    selected: Object,
    items: Array
  }
}
</script>

<style lang="scss" scoped>
.selector {
  display: flex;
  padding: 20px;
  align-items: center;
  height: 80px;
  
  .item {
    flex-grow: 0;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 16px;
    box-shadow: 2px 4px 12px rgba(27, 27, 27, 0.25);
    margin: 0 10px;
    cursor: pointer;
    transition: ease-in 0.2s;

    &.selected {
      background: #2c3e50fd;
      box-shadow: 2px 4px 12px rgba(27, 27, 27, 0.4);
      color: white;
      border-radius: 30px;
      padding: 15px 30px;
    }
  }
}
</style>
