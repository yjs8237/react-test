import React from "react";

function Hello(props) {
    return props.isSpecial ? (
        <div style={{color: props.color}}>{props.name}</div>
    ) : null;
}

Hello.defaultProps = {
    name: "1"
}

export default Hello;