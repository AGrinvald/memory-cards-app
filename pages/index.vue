<template>
  <div class="game">
    <div class="game__cards">
      <v-container class="game__container">
        <v-card-grid :disabled="!isGameStarted">
          <template #card="{ item }">
            <v-card :item="item"></v-card>
          </template>
        </v-card-grid>
      </v-container>
    </div>
    <div class="game__controls">
      <v-panel class="game__controls-panel">
        <template #left=""><v-timer></v-timer></template>
        <template #center="">
          <v-button v-if="!isGameStarted" @click="handleStartClick">
            Start
          </v-button>
          <v-button
            v-if="isGameStarted"
            color="danger"
            @click="handleStopClick"
          >
            Stop
          </v-button>
        </template>
      </v-panel>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { GAME_STARTED } from '~/constants'

import VCardGrid from '~/components/v-card-grid'
import VCard from '~/components/v-card'
import VButton from '~/components/v-button'
import VTimer from '~/components/v-timer'
import VPanel from '~/components/v-panel'

export default {
  interval: null,
  components: { VCardGrid, VCard, VButton, VTimer, VPanel },
  asyncData({ store }) {
    store.dispatch('game/initialize')
  },
  computed: {
    ...mapState('game', ['cards', 'status', 'timer']),
    isGameStarted() {
      return this.status === GAME_STARTED
    },
  },
  created() {
    this.unwatch = this.$store.watch(
      (state, getters) => getters['game/isAllCardsMatched'],
      (value) => {
        if (value) {
          this.addWinner({ name: 'Unknown', timer: this.timer })

          setTimeout(() => {
            this.finishGame()
          }, 800)
        }
      }
    )
  },
  beforeDestroy() {
    this.unwatch()
  },
  methods: {
    ...mapMutations(['addWinner']),
    ...mapMutations('game', [
      'setStatus',
      'resetTimer',
      'tickTimer',
      'resetCards',
      'shuffleCards',
    ]),
    handleStartClick() {
      this.shuffleCards()
      this.setStatus({ status: GAME_STARTED })

      this.interval = setInterval(() => {
        this.tickTimer()
      }, 1000)
    },
    handleStopClick() {
      this.finishGame()
    },
    finishGame() {
      clearInterval(this.interval)
      this.interval = null

      this.setStatus({ status: null })
      this.resetTimer()
      this.resetCards()
    },
  },
}
</script>

<style lang="scss" scoped>
.game {
  height: 100%;

  &__cards {
    height: calc(100% - 100px);
  }

  &__container {
    height: 100%;
  }

  &__controls {
    height: 100px;
    display: flex;
  }
}
</style>
