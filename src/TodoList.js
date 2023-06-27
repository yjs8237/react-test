import React from 'react';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

function TodoList(props) {
    const todos = useTodoState();
    
    return (
        <>
        {todos.map(
            todo =>
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            )}
        </>
    );
}

export default TodoList;