<template>
  <div class="starships container">
    <div class="starships__controls">
      <Search />
      <Pagination />
    </div>
    <ol class="starships__list" v-if="starshipsList.length">
      <StarshipCard v-for="starship in starshipsList" :key="starship.model" :starship="starship" />
    </ol>
    <Spinner v-else-if="isLoading" />
    <h1 v-else>Корабли не найдены</h1>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'StarshipsList',
  components: {
    Search,
    Spinner,
    StarshipCard: () => import('@/components/StarshipCard.vue'),
    Pagination: () => import('@/components/Pagination.vue'),
  },
  computed: {
    starshipsList() {
      return this.$store.state.starships.starshipsList;
    },
    isLoading() {
      return this.$store.state.starships.isLoading;
    }
  },
  async mounted() {
    this.$store.dispatch('fetchStarshipsList')
  }
}
</script>

<style lang="scss">
.starships {
  &__controls {
    display: flex;
    justify-content: space-between;
  }

  &__list {
    font-style: italic; 
    font-family: Georgia, Times, serif; 
    font-size: 24px; 
  }
}
</style>