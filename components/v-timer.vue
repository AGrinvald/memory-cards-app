<template>
  <div class="v-timer">{{ timeString }}</div>
</template>

<script>
import { mapState } from 'vuex'
import { formatTime } from '~/utils.js'

export default {
  computed: {
    ...mapState('game', ['timer']),
    timeString() {
      return formatTime(this.timer)
    },
  },
  methods: {
    formatTime(value) {
      return value < 10 ? `0${value}` : value
    },
  },
}
</script>

<style lang="scss" scoped>
.v-timer {
  display: flex;
  font-family: $font-family-monospace;
  color: $primary;
  font-size: $h3-font-size;
  font-weight: $font-weight-normal;
}
</style>
