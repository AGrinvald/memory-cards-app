<template>
  <li class="v-nav-item">
    <nuxt-link :to="to" class="v-nav-item__link"><slot></slot></nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped>
.v-nav-item {
  &__link {
    color: white;
    text-decoration: none;
  }
}
</style>
