import axios from 'axios';
import React, { useState } from 'react';

import User from './User';
import { useAsync } from 'react-async';

const getUsers = async () => {
    console.log("여기");
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(`response `);
    return response.data;
   /*
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   //if(!response.ok) throw new Error(response.statusText);
   return response.json();
   */
}

function Users() {

    const [userId, setUserId] = useState(null);
    const { data, error, isPending, reload, run } = useAsync({ promiseFn: getUsers });

    console.log('isLoading ' + isPending);
    
    if(isPending) return <div>로딩중...</div>;
    if(error) return <div>에러발생</div>;
    if(!data) return <button onClick={reload}>불러오기</button>;
    
    return (
      <>
        <ul>
          {data.map((user) => (
            <li key={user.id} onClick={() => setUserId(user.id)}>
              {user.name} {user.username}
            </li>
          ))}
        </ul>
        
        <button onClick={run}>다시 불러오기</button>
        {userId && <User id={userId}></User>}

        
      </>
    );
}

export default Users;