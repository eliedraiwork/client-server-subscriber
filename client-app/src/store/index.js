//  Use redux to manage the store
//  Globalized state
import  { createStore } from 'redux';

let store = createStore(reducer);


//  ACTIONS

//  Fetch country currency
const fetchCountriesValue = () => {
    return {

    };
};

//  Post the data
const subscribe = () => {
    return {};
}

//  Next step
const next = () => {
    return {}
}

//  Previous step
const previous = () => {
    return {}
}

//===============================

//  REDUCER -> modify store according to actions
const manageState = (state, action) {
    
}

let store = createStore( manageState );
store.subscribe( ()=> console.log(store.getState()) );
//===============================

//  DISPATCH
store.dispatch(next);
//===============================