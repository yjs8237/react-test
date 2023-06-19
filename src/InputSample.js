import React, { useState } from 'react';

function InputSample(props) {
    const [data, setData] = useState({});
    const onChange = (e) => {
        if(data.id === undefined) {
            data.id = 1;
        } else {
            data.id = 1;
        }
        if(data.value === undefined) {
            data.value = "";
        }
        data.value = e.target.value;
        console.log(data.id);
        let newData = data;
        setData((prevState) => ({
            ...prevState,
            id: 2
        }));
    }
    const onReset = () => {
        data.id = 0;
        let newData = data;
        console.log(newData.id);
        setData((prevState) => ({
            ...prevState,
            id: 3,
            value: ""
        }));
    }
    return (
        <div>
            <input onChange={onChange} value={data.value === undefined ? "" : data.value}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>value : {data.id}</b>
            </div>
        </div>
    );
}

export default InputSample;