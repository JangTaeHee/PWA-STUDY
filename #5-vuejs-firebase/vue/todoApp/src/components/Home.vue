<template>
  <div>
      <input v-model="inputValue">
      <ul>
          <li v-for="item in items" :key="item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            inputValue: 'test',
            items: ['A', 'B', 'C']
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
