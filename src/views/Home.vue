<template>
  <div class="home">
    <div class="info">
      <div class="info__username">Your Name</div>
      <div class="info__amount">{{ amount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      amount: 200,
    }
  }
};
</script>

<style lang="scss" scoped>
  .home {
    font-size: 1.6em;
  }

  .info {
    display: flex;
    
    &__username {}
  }
</style>