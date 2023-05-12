import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTask,
  setCurrentTask,
  toggleCompletedTask,
} from '../../redux/actions/taskActions';

const Task = ({ todo }) => {
  const dispatch = useDispatch();

  const onClick = e => {
    if (e.target.id === 'complete') {
      dispatch(toggleCompletedTask(todo.id));
    }
    if (e.target.id === 'edit') {
      dispatch(setCurrentTask(todo));
    }
    if (e.target.id === 'delete') {
      dispatch(deleteTask(todo.id));
    }
  };
  return (
    <li
      className={`list-group-item ${
        todo.isDone && 'list-group-item-success'
      } d-flex align-item-center justify-content-between`}
    >
      <div className={todo.isDone ? 'completed' : ''}>{todo.description}</div>
      <div className="btn-group" role="group">
        <i
          id="complete"
          className="fa fa-check text-secondary"
          onClick={onClick}
        ></i>
        <i
          id="edit"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          className="fas fa-pen text-dark"
          onClick={onClick}
        ></i>
        <i
          id="delete"
          className="fa fa-trash text-danger"
          onClick={onClick}
        ></i>
      </div>
    </li>
  );
};

export default Task;
