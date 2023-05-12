import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const { todos } = useSelector(state => state.taskReducer);
  console.log(todos);
  return (
    <ul className="list-group mt-3">
      {todos.map(todo => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskList;
