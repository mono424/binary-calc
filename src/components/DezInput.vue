<template>
  <div class="dez-input">
    <input :value="value" @keyup="$emit('c-update', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'DezInput',
  props: {
    value: String
  }
}
</script>

<style lang="scss" scoped>
.dez-input {
  background: #2c3e50;
  border-radius: 35px;
  margin: 0 auto;
  width: 300px;
  border: 6px solid rgba(27, 27, 27, 0.25);
  box-shadow: 2px 4px 12px rgba(27, 27, 27, 0.25);

  input {
    background: transparent;
    border: none;
    outline: none;
    padding: 15px 16px;
    font-size: 24px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    font-weight: bold;
  }
}
</style>
