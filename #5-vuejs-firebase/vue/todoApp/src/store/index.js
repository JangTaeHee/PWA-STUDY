import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutation' 
import todoItems from './modules/todoItems'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(localStorage.key(i));
        }
        return arr;
    }
}

export default new Vuex.Store({
    modules : {
        todoItems
    },
    // state:{
    //     message: 'Hello Vuex',
    //     todoItems: storage.fetch()
    // },
    // getters:
    //     // getMessage(state){
    //     //     return state.message;
    //     // }
    //     getters
    // ,
    // mutations:
    //     // setMessage(state, anotherMsg){
    //     //     return state.message = anotherMsg;
    //     // },
    //     // addTodoItem(state, item){
    //     //     state.todoItems.push(item)
    //     //     localStorage.setItem(item,item);  // 브라우저 local 저장소에 data 저장
    //     // },
    //     // removeTodoItem(state, obj){
    //     //   state.todoItems.splice(obj.index, 1);
    //     //   localStorage.removeItem(obj.item);
    //     // },
    //     // removeAllImtes(state){
    //     //   localStorage.clear();
    //     //   state.todoItems = [];
    //     // }
    //     mutations
    // ,
    actions:{

    }
});