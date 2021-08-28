<template>
  <div class="v-container">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/containers';

.v-container {
  @extend .container;
}
</style>
