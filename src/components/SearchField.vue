<template>
  <section>
    <input type="text" v-model="house" />
    <button @click="sendUserInput">search</button>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      house: ""
    };
  },
  methods: {
    sendUserInput: function() {
      console.log(this.house);
      this.$store.dispatch("getCharByHouse", this.house);
      console.log(this.$store.state.characters.data);
    }
  }
};
</script>

<style>
</style>