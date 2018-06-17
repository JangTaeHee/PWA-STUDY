const setMessage = (state, anotherMsg) => {
    return state.message = anotherMsg;
};
const addTodoItem = (state, item) => {
    state.todoItems.push(item)
    localStorage.setItem(item,item);  // 브라우저 local 저장소에 data 저장
};
const removeTodoItem = (state, obj) => {
  state.todoItems.splice(obj.index, 1);
  localStorage.removeItem(obj.item);
};
const removeAllImtes = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export {
    setMessage,
    addTodoItem,
    removeTodoItem,
    removeAllImtes
};