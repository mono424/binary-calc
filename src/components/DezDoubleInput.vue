<template>
  <div class="dez-double-input">
    <input ref="input1" :value="value[0]" @keyup="$emit('c-update', [$refs.input1.value, $refs.input2.value])" />
    <span>.</span>
    <input ref="input2" class="right" :value="value[1]" @keyup="$emit('c-update', [$refs.input1.value, $refs.input2.value])" />
  </div>
</template>

<script>
export default {
  name: 'DezInput',
  props: {
    value: Array
  }
}
</script>

<style lang="scss" scoped>
.dez-double-input {
  display: flex;
  justify-content: center;
  align-items: baseline;
  background: #2c3e50;
  border-radius: 35px;
  margin: 0 auto;
  width: 600px;
  border: 6px solid rgba(27, 27, 27, 0.25);
  box-shadow: 2px 4px 12px rgba(27, 27, 27, 0.25);

  input {
    width: 250px;
    display: block;
    background: transparent;
    border: none;
    outline: none;
    padding: 15px 16px;
    font-size: 24px;
    color: white;
    letter-spacing: 1px;
    text-align: right;
    font-weight: bold;

    &.right {
      text-align: left;
    }
  }

  span {
    display: block;
    color: white;
    font-size: 32px;
    font-weight: bold;
  }
}
</style>
