import React from 'react';
import { useTodoState } from './TodoContext';

function TodoHeader(props) {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    return (
        <div>
            <h1>2019년 7월 21일</h1>    
            <h2>{undoneTasks.length}개</h2>
        </div>
    );
}

export default TodoHeader;