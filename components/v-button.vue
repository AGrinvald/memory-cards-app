<template>
  <button
    :class="{
      'v-button': true,
      'v-button--primary': color === 'primary',
      'v-button--danger': color === 'danger',
    }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
.v-button {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  max-height: 40px;
  max-width: 180px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $dark;
  border: none;
  border-radius: $border-radius;
  text-decoration: none;
  font-weight: $font-weight-bold;
  cursor: pointer;

  &--primary {
    color: $body-color;
  }

  &--danger {
    color: $danger;
  }
}
</style>
