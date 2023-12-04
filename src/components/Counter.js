import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostsIdQuery } from "../redux/postSlice";

function Counter() {
 const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()  

    console.log(useGetAllPostsQuery())
    const { data, error, isLoading } = useGetPostsIdQuery(5);
    //get post by id

  return (
    <div>
        {JSON.stringify(data)}
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by Amount
      </button>
    </div>
  );
}

export default Counter;
