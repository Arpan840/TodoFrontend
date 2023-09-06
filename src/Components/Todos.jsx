import React, { useEffect } from 'react';
import { fetchAllTodos } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Todo } from './Todo';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchAllTodos());
    // eslint-disable-next-line
  });

  if (!todos.todos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {todos.todos.map(todo => (
        <Todo
        key={todo._id}
        todo={todo}
        >
         

        </Todo>
      ))}
    </div>
  );
};

export default Todos;
