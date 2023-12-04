import React from "react";
import { useState } from "react";
import { decrement, increment } from "../redux/counterSlice";
import { useDispatch } from "react-redux";

function Counter2() {
    const dispatch = useDispatch()

  return (
    <div>
      <h1>This is Counter 2</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
export default Counter2;