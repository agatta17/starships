<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: 'Spinner',
}
</script>

<style lang="scss">
.lds-dual-ring {
  width: 80px;
  height: 80px;
  margin: 40px auto;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid $light;
    border-color: $light transparent $light transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
