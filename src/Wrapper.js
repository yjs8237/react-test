import React from "react";
import Wrapper2 from "./Wrapper2";

function Wrapper(props) {
  const style = {
    padding: "16px",
  };
  return (
    <>
      <Wrapper2>
        <p>111</p>
        <div>하나더111</div>
        {props.children}
      </Wrapper2>
    </>
  );
}

export default Wrapper;
