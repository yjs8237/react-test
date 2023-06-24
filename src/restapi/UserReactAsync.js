import axios from 'axios';
import React from 'react';
import { useAsync } from 'react-async';
import { getUser } from './apiCall';




function UserReactAsync({ id }) {
    
    const { data , error, isLoading, reload } = useAsync({promiseFn: getUser, id: id});

    if(isLoading) return <div>로딩중./..</div>;
    if(error) return <div>에러발생</div>;
    if(!data) return <button onClick={reload}>불러오기</button>;

    return (
      <>
        <ul>
          {data.name} {data.username}
        </ul>
        <button onClick={reload}>다시 불러오기</button>
      </>
    );
}

export default UserReactAsync;