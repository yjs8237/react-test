import React from 'react';

function Wrapper2(props) {
    console.log(props);
    return (
        <>
        {props.children}
        </>
    );
}

export default Wrapper2;