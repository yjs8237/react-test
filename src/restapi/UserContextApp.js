import React, { useState } from 'react';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';
import User from './User';
import TodoApp from '../TodoApp';

function UserContextApp(props) {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    const { loading, data, error } = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    }

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러발생</div>;
    if(!data) return <button onClick={fetchData}>불러오기</button>;
    
    return (
      <>
        <TodoApp></TodoApp>
        <ul>
          {data.map((user) => (
            <li key={user.id} onClick={() => setUserId(user.id)}>
              {user.name} {user.username}
            </li>
          ))}
        </ul>
        
        <button onClick={fetchData}>다시 불러오기</button>
        {userId && <User id={userId}></User>}

        
      </>
    );
}

export default UserContextApp;