import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/taskActions';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onAddClicked = () => {
    if (text) {
      const newTask = { id: Date.now(), description: text, isDone: false };
      dispatch(addTask(newTask));
      setText('');
    }
  };
  return (
    <div className="input-group mb-2">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="form-control"
      />
      <button className="btn btn-primary" onClick={onAddClicked}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
