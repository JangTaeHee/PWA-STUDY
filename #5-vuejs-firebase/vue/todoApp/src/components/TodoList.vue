<template>
  <div>
      <transition-group name="list" tag="ul">
          <li v-for="(item, index) in this.$store.state.todoItems" :key="item" class="shadow">
              <i class="fas fa-check checkBtn"></i>
              {{item}}
              <span class="removeBtn" @click="removeTodo(item, index)"><i class="fas fa-trash-alt"></i></span>
          </li>
      </transition-group>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    methods: {
        ...mapMutations(['removeTodoItem']),
        removeTodo(item, index){
            const obj = {
                item,
                index
            }
            this.removeTodoItem(obj);
        }
    }
}
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }


  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-move {
    transition: transform 1s;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
