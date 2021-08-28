<template>
  <div class="v-card">
    <div
      :class="{ 'v-card__inner': true, 'v-card__inner--opened': item.isOpened }"
    >
      <div class="v-card__front"></div>
      <div class="v-card__back">
        <img
          :src="item.image"
          :class="{
            'v-card__back-img': true,
            'v-card__back-img--matched': item.isMatched,
          }"
          alt="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 100%;
  cursor: pointer;
  perspective: 1000px;

  &--matched::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: $border-radius;
    background-color: black;
    opacity: 0.3;
    z-index: 1;
  }

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &--opened {
      transform: rotateY(180deg);
    }
  }

  &__front,
  &__back {
    position: absolute;
    border-radius: $border-radius;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  &__front {
    background-color: $info;
  }

  &__back-img {
    display: block;
    height: 100%;
    width: auto;
    transition: filter 1.3s;

    &--matched {
      filter: saturate(0);
    }
  }

  &__back {
    background-color: $secondary;
    transform: rotateY(180deg);
  }
}
</style>
