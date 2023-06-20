import React, { useState , useRef } from 'react';
import * as common from './common.js'


function InputSample(props) {
    const [data, setData] = useState({});
    
    const [inputs, setInputs] = useState({
        name_in: '',
        nickName: '', 
    });

    const nameInputTag = useRef();

    const {name_in, nickName} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,  // name 변수 처리되어 key 값을 name 변수 값에 맞는 데이터를 변경 한다.
        });
        console.log("name " + name + " value " + value);
    };

    const onReset = () => {
        setInputs({
            name_in: '',
            nickName: "",
        });
        nameInputTag.current.focus();
    };

    return (
        <div>
            <input 
            name="name_in" 
            placeholder='이름' 
            onChange={onChange} 
            value={name_in}
            ref={nameInputTag}
            ></input>
            <input name="nickName" placeholder='닉네임' onChange={onChange} value={nickName} ></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>value : {data.id}</b>
                {inputs.name_in} ({inputs.nickName})
            </div>
        </div>
    );
}

export default InputSample;