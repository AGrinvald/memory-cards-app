<template>
  <div class="championships">
    <div class="championships__title"><h2>Winners</h2></div>
    <div class="championships__body">
      <div v-if="winners.length === 0" class="championships__empty">
        There are no winners
      </div>
      <div v-if="winners.length > 0" class="championships__table">
        <div
          v-for="(item, index) in winners"
          :key="item.id"
          class="championships__row"
        >
          <div class="championships__col championships__col-shrink">
            {{ index + 1 }}
          </div>
          <div class="championships__col">{{ item.name }}</div>
          <div class="championships__col championships__col-shrink">
            {{ item.date.toLocaleString() }}
          </div>
          <div class="championships__col championships__col-shrink">
            {{ getTimeString(item.timer) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { formatTime } from '~/utils.js'

export default {
  computed: {
    ...mapState(['winners']),
  },
  methods: {
    getTimeString(time) {
      return formatTime(time)
    },
  },
}
</script>

<style lang="scss" scoped>
.championships {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: $font-weight-bold;

  &__title {
    text-align: center;
    padding-bottom: 30px;
  }

  &__body {
    flex-grow: 1;
    overflow: auto;
  }

  &__empty {
    text-align: center;
  }

  &__row {
    display: flex;
    height: 60px;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 1px solid $body-color;
    }
  }

  &__col {
    flex-grow: 1;
    padding: 0 15px;
  }

  &__col-shrink {
    flex-shrink: 1;
    flex-grow: 0;
  }
}
</style>
