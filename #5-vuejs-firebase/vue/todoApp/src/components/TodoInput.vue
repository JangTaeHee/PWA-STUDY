<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
      <span class="addContainer" @click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>

    <ModalInput v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <h3 slot="header">경고!</h3>
        <div slot="body">할 일을 입력하세요.</div>
    </ModalInput>
  </div>
</template>

<script>
import ModalInput from './common/ModalInput'
import {mapMutations} from 'vuex'

export default {
    data(){
        return {
            newTodoItem : '',
            showModal : false
        }
    },
    methods: {
        ...mapMutations(['addTodoItem']),
        addTodo(){
            if(this.newTodoItem !== ''){
                const value = this.newTodoItem.trim();
                this.addTodoItem(value);
                this.clearInputBox();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInputBox(){
            this.newTodoItem = '';
        }
    },
    components: {
        ModalInput
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
