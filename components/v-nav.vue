<template>
  <ul class="v-nav">
    <slot></slot>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.v-nav {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
