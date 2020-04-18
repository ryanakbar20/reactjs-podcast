const redux = require('redux');
const creatStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17,
    name: 'ryan'
}

//Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_AGE' : return {
            ...state,
            age: state.age + 1
        }
        case 'CHANGE_VALUE' : return {
            ...state,
            value: state.value + action.newValue
        }
        case 'CHANGE_NAME' : return {
            ...state,
            name: state.name + ' ' + action.newName
        }
        default : return state;
    }
}
//Store
const store = creatStore(rootReducer);
console.log(store.getState());

//subscribetion
store.subscribe(() => {
    console.log('subscribe', store.getState())
});

//Dispatcing Action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
store.dispatch({type: 'CHANGE_NAME', newName: 'akbar'})
console.log(store.getState());