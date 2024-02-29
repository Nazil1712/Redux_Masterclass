import { useState } from "react";
import { increment, decrement, incrementByAmount } from "../actions";

function Account({store}) {
  const [value, setValue] = useState(0);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${store.getState().account.amount}</h3>
        <button onClick={()=> store.dispatch(increment())}>Increment +</button>
        <button onClick={()=> store.dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => store.dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;
