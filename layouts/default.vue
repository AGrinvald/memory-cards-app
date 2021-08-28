<template>
  <div class="app">
    <v-header class="header"></v-header>
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import VHeader from '~/components/v-header'

export default {
  components: {
    VHeader,
  },
}
</script>

<style lang="scss">
html {
  font-family: $font-weight-base;
}

body {
  background-color: $body-bg;
  color: $body-color;
  height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  height: 100px;
}

.main {
  height: calc(100vh - 100px);
}

.footer {
  height: 60px;
}
</style>
