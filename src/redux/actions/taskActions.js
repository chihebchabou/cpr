import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from './types';

// Add task
export const addTask = payload => {
  return { type: ADD_TASK, payload };
};

// Update task
export const updateTask = payload => {
  return { type: UPDATE_TASK, payload };
};

// Delete task
export const deleteTask = payload => {
  return { type: DELETE_TASK, payload };
};

// Set current task
export const setCurrentTask = payload => {
  return { type: SET_CURRENT_TASK, payload };
};

// Toggle completed task
export const toggleCompletedTask = payload => {
  return { type: TOGGLE_COMPLETED_TASK, payload };
};
