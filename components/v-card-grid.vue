<template>
  <div class="v-card-grid">
    <div
      :class="{
        'v-card-grid__cards': true,
        'v-card-grid__cards--disabled': disabled,
      }"
      :style="{ width: `${gridWidth}px`, height: `${gridHeight}px` }"
    >
      <div
        v-for="(item, index) in cards"
        :key="item.id"
        class="v-card-grid__card"
        :style="{ width: cardSize, height: cardSize }"
        @click="handleCardClick(index)"
      >
        <slot name="card" :item="item"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  timeout: null,
  props: {
    disabled: { type: Boolean, default: false },
    size: { type: Number, default: 6 },
  },
  data() {
    return {
      gridWidth: 0,
      gridHeight: 0,
    }
  },
  computed: {
    ...mapState('game', ['cards', 'status']),
    ...mapGetters('game', ['openedCards']),
    cardSize() {
      return `${100 / this.size}%`
    },
  },
  beforeMount() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'game/openCard' && this.openedCards.length === 2) {
        const matched = this.checkMatch(
          this.openedCards[0],
          this.openedCards[1]
        )
        this.removeTimeout()
        if (matched) {
          this.matchCards({ cards: this.openedCards })
        } else {
          this.closeCardsWithTimeout(800)
        }
      }
    })
  },
  mounted() {
    window.addEventListener('resize', this.calculateGridSize)
    this.calculateGridSize()
  },
  beforeDestroy() {
    this.unsubscribe()
    window.removeEventListener('resize', this.calculateGridSize)
  },
  methods: {
    ...mapMutations('game', ['openCard', 'closeCards', 'matchCards']),
    calculateGridSize() {
      const rect = this.$el.getBoundingClientRect()
      const { height, width } = rect
      const size = height < width ? height : width

      this.gridWidth = size
      this.gridHeight = size
    },
    handleCardClick(index) {
      if (this.disabled) {
        return
      }

      if (this.openedCards.length === 2) {
        return
      }

      if (this.cards[index].isOpened) {
        return
      }

      this.removeTimeout()
      this.closeCardsWithTimeout(5000)

      this.openCard({ index })
    },
    checkMatch(first, second) {
      return first.image === second.image
    },
    closeCardsWithTimeout(period) {
      this.timeout = setTimeout(() => {
        this.closeCards({ cards: this.openedCards })
      }, period)
    },
    removeTimeout() {
      if (this.timeout === null) {
        return
      }

      clearTimeout(this.timeout)
      this.timeout = null
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card-grid {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__cards {
    position: relative;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;

    &--disabled::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      pointer-events: none;
    }
  }

  &__card {
    padding: 10px;
  }
}
</style>
