<template>
  <div class="pagination">
    <a class="pagination__button" 
      :class="{'pagination__button_disable': !previousPageUrl}"
      @click="fetchStarshipsList(previousPageUrl, pageNumber--)">
      <div class="pagination__arrow pagination__arrow_left"></div>
    </a>
    <div class="pagination__page-number">{{pageNumber}}</div>
    <a class="pagination__button" 
      :class="{'pagination__button_disable': !nextPageUrl}"
      @click="fetchStarshipsList(nextPageUrl, pageNumber++)">
      <div class="pagination__arrow pagination__arrow_right"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      pageNumber: 1,
    }
  },
  computed: {
    nextPageUrl() {
      return this.$store.state.starships.nextPageUrl;
    },
    previousPageUrl() {
      return this.$store.state.starships.previousPageUrl;
    }
  },
  methods: {
    fetchStarshipsList(url) {
      this.$store.dispatch('fetchStarshipsList', url)
    },
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;

  &__page-number {
    margin-right: 12px;
  }

  &__button {
    width: 32px;
    height: 32px;
    border: 1px solid $dark;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;

    &_disable {
      pointer-events: none;
    }
  }

  &__arrow {
    width: 7px;
    height: 7px;
    border-top: 2px solid $dark;
    border-right: 2px solid $dark;

      &_right {
        transform: rotate(45deg);
        margin-right: 4px;
      }

      &_left {
        transform: rotate(-135deg);
        margin-left: 4px;
      }
  }
}
</style>
