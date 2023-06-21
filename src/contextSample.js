import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext({
    id: 1,
    name: "jisang"
});
 
function Child() {
    const memberContext = useContext(MyContext);
    return (
        <div>
            안녕하세요 {memberContext.name}
        </div>
    );
}

function Parent({ text }) {
    return (
        <Child text={text}/>
    );
}

function GrandParent({ text }) {
    return (
        <Parent />
    );
}

let member = {};
const OnChangeMember = () => {
    member = {
        id: 1,
        name: "test"
    };
};

function ContextSample({ text }) {
    return (
        <MyContext.Provider value={member}>
            <GrandParent></GrandParent>
            <button onClick={() => OnChangeMember}>변경</button>
        </MyContext.Provider>
    );
}

export default ContextSample;