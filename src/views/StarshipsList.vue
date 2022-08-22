<template>
  <div class="starships container">
    <Search />

    <ul v-if="starshipsList.length && !isLoading">
      <StarshipCard 
        v-for="starship in starshipsList" 
        :key="starship.model" 
        :starship="starship"
      />
    </ul>

    <Spinner v-else-if="isLoading" />

    <h1 v-else>Starships not found</h1>

    <Pagination v-if="showPagination" />
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
    },

    showPagination() {
      return this.$store.getters.showPagination;
    }
  },
}
</script>

<style lang="scss">
.starships {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>