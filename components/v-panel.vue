<template>
  <div class="panel">
    <div class="panel__col panel__text-right"><slot name="left"></slot></div>
    <div class="panel__col panel__text-center">
      <slot name="center"></slot>
    </div>
    <div class="panel__col">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.panel {
  height: 100%;
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  &__col {
    display: flex;
    flex-basis: calc(100% / 3);
    flex-shrink: 1;
    align-items: center;

    padding-left: 20px;
    padding-right: 20px;
  }

  &__text-right {
    justify-content: flex-end;
  }

  &__text-center {
    justify-content: center;
  }
}
</style>
