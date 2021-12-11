import {createStore} from 'redux';
import {dessertReducer} from './reducers';

export const store = createStore(dessertReducer);