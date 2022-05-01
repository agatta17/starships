<template>
  <div class="starship container">
    <img class="starship__img" src="../assets/starship.jpeg" />
    <template v-if="starshipData.name && !isLoading">
      <h1>{{starshipData.name}}</h1>
      <template v-for="attribute in displayAttributes">
        <p class="starship__attribute" :key="attribute.key" :data-tooltip="attribute.description">
          <span class="starship__attribute-title">{{`${attribute.title}: `}}</span>
          <span class="starship__attribute-value">{{starshipData[attribute.key]}}</span>
        </p>
      </template>
      <template v-for="list in displayLists">
        <p class="starship__attribute" :key="list.key" :data-tooltip="list.description" v-if="starshipData[list.key]">
          <span class="starship__attribute-title">{{`${list.title}: `}}</span>
          <span class="starship__attribute-value">{{starshipData[list.key]}}</span>
        </p>
      </template>
    </template>
    <Spinner v-else-if="isLoading" />
    <h1 v-else>Starship not found</h1>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'StarshipPage',
  components: {
    Spinner,
  },
  data() {
    return {
      displayAttributes: [
        {
          key: 'name',
          title: 'Name',
          description: 'The name of this starship. The common name, such as "Death Star".'
        },
        {
          key: 'model',
          title: 'Model',
          description: 'The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".'
        },
        {
          key: 'starship_class',
          title: 'Class',
          description: 'The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"'
        },
        {
          key: 'manufacturer',
          title: 'Manufacturer',
          description: 'The manufacturer of this starship. Comma separated if more than one.'
        },
        {
          key: 'cost_in_credits',
          title: 'Cost in galactic credits',
          description: 'The cost of this starship new, in galactic credits.'
        },
        {
          key: 'length',
          title: 'Length',
          description: 'The length of this starship in meters.'
        },
        {
          key: 'crew',
          title: 'Crew',
          description: 'The number of personnel needed to run or pilot this starship.'
        },
        {
          key: 'passengers',
          title: 'The number of passengers',
          description: ' The number of non-essential people this starship can transport.'
        },
        {
          key: 'max_atmosphering_speed',
          title: 'Max atmosphering speed',
          description: 'The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.'
        },
        {
          key: 'hyperdrive_rating',
          title: 'Hyperdrive rating',
          description: ' The class of this starships hyperdrive.'
        },
        {
          key: 'MGLT',
          title: 'The number of Megalights in hour',
          description: 'The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit ' 
            + 'of distance and has never been defined before within the Star Wars universe. This figure is only really useful for '
            + 'measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.'
        },
        {
          key: 'cargo_capacity',
          title: 'Cargo capacity',
          description: ' The maximum number of kilograms that this starship can transport.'
        },
        {
          key: 'consumables',
          title: 'Consumables',
          description: 'The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.'
        },
      ],
      displayLists: [
        {
          key: 'films',
          title: 'Films',
          description: 'A list of films that this starship has appeared in.',
        },
        {
          key: 'pilots',
          title: 'Pilots',
          description: 'A list of people that this starship has been piloted by.',
        }
      ]
    }
  },
  computed: {
    starshipData() {
      return this.$store.state.starships.starshipData;
    },
    isLoading() {
      return this.$store.state.starships.isLoading;
    }
  },
}
</script>

<style lang="scss" scoped>
.starship {
  font-size: 14px;

  &__img {
    width: 100%;
  }

  &__attribute {
    &-title {
      font-size: 16px;
      font-style: italic;
    }
  }
}
</style>