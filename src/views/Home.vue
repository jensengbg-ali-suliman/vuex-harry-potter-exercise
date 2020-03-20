<template>
  <div class="home">
    <SearchField />
    <p v-for="char in characters" :key="char.id">{{ char.name}}</p>
  </div>
</template>

<script>
import SearchField from "../components/SearchField.vue";
export default {
  name: "Home",
  components: {
    SearchField
  },
  computed: {
    characters() {
      return this.$store.state.characters.data;
    }
  }
};
</script>
