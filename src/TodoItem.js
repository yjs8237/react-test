import React, { useCallback } from 'react';
import { useTodoDispatch } from './TodoContext';

function TodoItem({id, text, done}) {
    const dispatch = useTodoDispatch();
    const onToggle = useCallback(() => {
        dispatch({
            type: 'TOGGLE',
            id: id
        });
    }, [dispatch, id]);
    
    const onRemove = useCallback(() => {
        dispatch({
            type: 'REMOVE',
            id: id
        });
    }, [dispatch, id]);

    return (
        <>
            <div>
                <p style={{color: done ? 'blue' : 'red'}}>{id}</p>
                <p>{text}</p>
                <p>{done}</p>
                <button onClick={onToggle}>완료토글</button>
                <button onClick={onRemove}>삭제</button>
            </div>
        </>
    );
}

export default React.memo(TodoItem);