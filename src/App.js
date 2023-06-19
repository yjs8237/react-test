import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";


// 주석
function App() {
  return (

    <Wrapper>
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
