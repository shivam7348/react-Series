import {  React, memo } from "react";

function ChildA() {
    console.log("Child Component");
  return (
<>

</>  )
}

export default memo(ChildA)
