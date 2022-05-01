<template>
  <li>
    <router-link :to="`/starship?starship=${starship.url}`" class="starship">
      <template v-for="attribute in displayAttributes">
        <div class="starship__attribute" :key="attribute.key" :data-tooltip="attribute.description">
          <span class="starship__attribute-title">{{`${attribute.title}: `}}</span>
          <span class="starship__attribute-value">{{starship[attribute.key]}}</span>
        </div>
      </template>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'StarshipCard',
  props: {
    starship: Object
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
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.starship {
  display: block;
  padding: 8px; 
  font-style: normal; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px; 
  border-left: 1px solid #999;
  color: $primary;
  text-decoration: none;

  &__attribute:first-of-type {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 8px;
  }
}
</style>