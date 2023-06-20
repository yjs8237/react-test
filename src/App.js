import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import { useRef, useState } from "react";
import CreateUser from "./CreateUser";


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

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const nextId = useRef(4);

  const onCreate = () => {

    const user = {
      id: nextId.current,
      username: username,
      email: email
    };

    setUsers([
      ...users,
      user
    ]);

    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const onToggle = (userId) => {
    setUsers(users.map(
      user => user.id === userId ? { ...user, active: !user.active } : user
    ));
  };

  return (

    <Wrapper>
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}  />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      </>
      
      <InputSample/>
      <Counter />
      <div >
          <Hello name="react" color="red" isSpecial={true}/>
          <Hello isSpecial={true}/>
          <Hello isSpecial={false}/>
          <div></div>
      </div>
    </Wrapper>
  );
}

export default App;
