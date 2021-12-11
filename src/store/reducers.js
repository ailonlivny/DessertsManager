import {v4 as uuidv4} from 'uuid';
import {actionTypes} from './actionTypes';

export const dessertReducer = function (state = [], action) {
    switch (action.type) {
      case actionTypes.ADD:
        return [...state, {...action.payload, key: uuidv4()}];
        case actionTypes.UPDATE:
          return [...state.filter(dessert => dessert.dessertName !== action.payload.dessertName), {...action.payload, key: uuidv4()}];
      case actionTypes.DELETE:
        return state.filter(dessert => dessert.dessertName !== action.payload.dessertName);
      case actionTypes.DELETE_ALL:
        return [];
      default:
        return state;
    }
};