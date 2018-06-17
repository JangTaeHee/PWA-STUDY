const storage = {
    fetch(){
        const arr = [];
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(localStorage.key(i));
        }
        return arr;
    }
}

const state = {
    message: 'Hello Vuex',
    todoItems: storage.fetch()
};

const getters = {
    getMessage(state){
        return state.message;
    }
};

const mutations = {
    setMessage(state, anotherMsg){
        return state.message = anotherMsg;
    },
    addTodoItem(state, item){
        state.todoItems.push(item)
        localStorage.setItem(item,item);  // 브라우저 local 저장소에 data 저장
    },
    removeTodoItem(state, obj){
      state.todoItems.splice(obj.index, 1);
      localStorage.removeItem(obj.item);
    },
    removeAllImtes(state){
      localStorage.clear();
      state.todoItems = [];
    }
};

export default{
    state,
    getters,
    mutations
}