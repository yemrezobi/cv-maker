import { combineReducers, createStore } from 'redux';
import sections from './reducers/sections';

const reducer = combineReducers({
    sections
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {reducer, store};
