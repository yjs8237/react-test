import React, {useCallback, useMemo, useReducer, useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import { produce } from 'immer';

function countActiveUsers(users) {
    console.log("counting...");
    return users.filter(user => user.active).length;
}

const initialState = {
  users: [],
  inputs: {
    username: "",
    email: "",
  },
};

function reducer(state, action) {
    switch(action.type) {
        case 'RESET_INPUT': {
            return produce(state, (draft) => {
                const inputs = draft.inputs;
                inputs.username = "";
                inputs.email = "";
            });
        }
        case 'CHANGE_INPUT': {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        }
        case 'CREATE_USER': {
            return produce(state, draft => {
                const innerInputs = draft.inputs;
                innerInputs.username = "";
                innerInputs.email = "";
                draft.users.push(action.user);
            });
            /*
            return {
                inputs: initialState.inputs,
                //users: state.users.concat(action.user)
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            }
            */
        }
        case 'TOGGLE_USER': {
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            });
            /*
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === action.id
                    ? { ...user, active: !user.active }
                    : user
                )
            }
            */
        }
        case 'REMOVE_USER': {
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index, 1);
            });
            /*
            return {
                ...state,
                users: state.users.filter(user => 
                    user.id !== action.id
                    )
            }
            */
        }
        default: return state;
    }
}

function ReducerApp(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(1);
    const { users } = state;
    const { username, email } = state.inputs;

    const count = useMemo(() => countActiveUsers(users), [users]);
    
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name: name,
            value: value
        });
    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username: username,
                email: email
            }
        });
        
        nextId.current += 1;
    }, [username, email]);

    const onToggle = useCallback((userId) => {
        console.log(userId);
        dispatch({
            type: 'TOGGLE_USER',
            id: userId
        });
    }, []);
    const onRemove = useCallback((userId) => {
        dispatch({
            type: 'REMOVE_USER',
            id: userId
        });
    }, []);
    return (
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onToggle={onToggle} onRemove={onRemove}  />
        <div>활성 사용자 수 : {count}</div>
      </>
    );
}

export default ReducerApp;