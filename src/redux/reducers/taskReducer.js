import * as actionTypes from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_TASK:
      return [...state, action.payload]
    case actionTypes.DELETE_TASK:
      const filteredTasks = [...state]
      filteredTasks.splice(action.payload, 1);
      return filteredTasks;
    case actionTypes.EDIT_TASK:
      const newTasks = [...state]
      // newTasks[action.payload.id]
      console.log('hi',action.payload[1])
      newTasks.splice(action.payload.id, 0, action.payload.text);
      return newTasks;
    default:
      return state;
  }
}