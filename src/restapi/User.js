import axios from 'axios';
import React from 'react';
import useAsync from './UseAsync';
import { getUser } from './apiCall';



function User({ id }) {
    const [state, refetch] = useAsync(() => getUser(id), [id]);
    const {loading, error, data} = state;
    if(loading) return <div>로딩중./..</div>;
    if(error) return <div>에러발생</div>;
    if(!data) return <button onClick={refetch}>불러오기</button>;

    return (
      <>
        <ul>
          {data.name} {data.username}
        </ul>
        <button onClick={refetch}>다시 불러오기</button>
      </>
    );
}

export default User;