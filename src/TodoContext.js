import { produce } from "immer";
import { createContext, useContext, useReducer, useRef } from "react";

import React from 'react';

const initialTodos = [
    {
        id: 1,
        text: '11',
        done: true
    },
    {
        id: 2,
        text: '22',
        done: false
    },
];

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE': {
            return state.concat(action.todo);
            /*
            return produce(state, draft => {
                state.push(action.todo);
            });
            */
        }
        case 'TOGGLE': {
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
            /*
            return produce(state, draft => {
                const index = draft.findIndex(todo => user.id === action.id);
                draft.users.splice(index, 1);
            });
            */
        }
        case 'REMOVE': {
            return state.filter(todo => todo.id !== action.id);
        }
        default: return state;
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();



export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(3);
    return (
        // state 와 dispatch context 를 나누면 dispatch 만 ㅅ사용하는 컴포넌트에서는 dispatch 만 사용하면 된다.
        // 불필요한 컴포넌트 리 렌더링을 방지할 수 있음

        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('cannot find context');
    }
    return context;
}
export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error('cannot find context');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error('cannot find context');
    }
    return context;
}