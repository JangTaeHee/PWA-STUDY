<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearAll">
          Clear All
        </span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    methods: {
        ...mapMutations([
          'removeAllImtes'
        ]),
        clearAll(){
            this.removeAllImtes();
        }
    }
}
</script>

<style>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
		/* 추가 */
		display: block;
  }
</style>
