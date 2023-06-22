import React from 'react';
import { TodoProvider, useTodoState } from './TodoContext';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

function TodoApp(props) {
    return (
      <>
        <TodoProvider>
          <TodoHeader></TodoHeader>
          <TodoList />
        </TodoProvider>
      </>
    );
}

export default TodoApp;