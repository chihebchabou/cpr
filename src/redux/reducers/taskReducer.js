import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from '../actions/types';

const initialState = {
  todos: [
    { id: 1, description: 'task1', isDone: true },
    { id: 2, description: 'task2', isDone: false },
  ],
  current: null,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: payload,
      };
    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
