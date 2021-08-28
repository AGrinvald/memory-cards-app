<template>
  <nuxt-link to="/" class="v-brand">
    <h1 class="v-brand__title">Memory app</h1>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss">
.v-brand {
  display: flex;
  align-items: center;
  font-family: $font-family-brand;
  color: $primary;
  text-decoration: none;
  text-transform: uppercase;

  &__title {
    font-size: $h1-font-size;
    font-weight: $font-weight-normal;
  }
}
</style>
