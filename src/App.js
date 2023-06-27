import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import { useCallback, useMemo, useRef, useState } from "react";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("counting...");
  return users.filter(user => user.active).length;
}
// 주석
function App() {
  const [users, setUsers] = useState([
    {
        id: 1,
        username: "jisang",
        email: "yjs8237@naver.com",
        active: true,
    },
    {
        id: 2,
        username: "jisang2",
        email: "yjs8237@naver.com2",
        active: false,
    },
    {
        id: 3,
        username: "jisang3",
        email: "yjs8237@naver.com3",
        active: false,
    },
]);

  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs]);

  const nextId = useRef(4);

  const onCreate = useCallback(e => {
    const user = {
      id: nextId.current,
      username: username,
      email: email
    };
    setUsers(users => [...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(userId => {
    setUsers(users => users.filter(user => user.id !== userId));
  }, []);

  const onToggle = useCallback((userId) => {
    setUsers(users => users.map(
      user => user.id === userId ? { ...user, active: !user.active } : user
    ));
  }, []);
  
  {/* 불필요한 렌더링을 막기위해 특정 값이 바뀔때만 함수 호출 하도록 */}
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}  />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성 사용자 수 : {count}</div>
      </>
      
      <InputSample />
      <Counter />
      <div>
          <Hello name="react" color="red" isSpecial={true}/>
          <Hello isSpecial={true}/>
          <Hello isSpecial={false}/>
          <div></div>
      </div>
    </Wrapper>
  );
}

export default App;
