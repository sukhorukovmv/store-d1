import { createStore } from 'redux';

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}

let store = createStore(todos, ['Use Redux']);

store.dispatch({
    type: 'ADD_TODO', 
    text: "HELLO WORLD!"
})


console.log(store.getState());