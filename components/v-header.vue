<template>
  <header class="v-header">
    <v-panel>
      <template #left="">
        <nuxt-link to="/championships">
          <v-icon-trophy></v-icon-trophy>
        </nuxt-link>
      </template>
      <template #center=""><v-brand></v-brand></template>
      <template #right=""><v-icon-github></v-icon-github></template>
    </v-panel>
  </header>
</template>

<script>
import VBrand from '~/components/v-brand.vue'
import VPanel from '~/components/v-panel'
import VIconGithub from '~/components/icons/v-icon-github'
import VIconTrophy from '~/components/icons/v-icon-trophy'

export default {
  components: {
    VBrand,
    VPanel,
    VIconGithub,
    VIconTrophy,
  },
}
</script>

<style lang="scss" scoped>
.v-header {
  display: flex;
  &__panel {
    padding-top: 30px;
  }
}
</style>
