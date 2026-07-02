//defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
//state
const initialCounterState = {
    count: 0
};
const initialUserState = {
    users: [ {name: 'John'}],
};

//action=object-type , payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
        payload: 1
    };
};
const decrementCounter = () => {
    return {
        type: DECREMENT,
        payload: 1
    };
};
const addUser = () => {
    return {
        type: ADD_USER,
        payload: {name: 'Jane'}
    };
};