import { useState } from "react";
import { increment, decrement, incrementByAmount, getUserAccount, decrementByAmount} from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Account({store}) {
  const [value, setValue] = useState(0);
  const [decValue, setDecValue] = useState(0);
  const amount = useSelector((state)=>state.account.amount)
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={()=> dispatch(increment())}>Increment +</button>
        <button onClick={()=> dispatch(decrement())}>Decrement -</button>

        {/* Increment by amt */}
        <input type="text" onChange={(e) => setValue(+e.target.value)} placeholder="Increment by Amount"></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>

        {/* Decrement by amt */}
        <input type="text" onChange={(e) => setDecValue(+e.target.value)} placeholder="Decrement by Amount"></input>
        <button onClick={() => dispatch(decrementByAmount(decValue))}>
          Decrement By {decValue} +
        </button>


        {/* Initialize User */}
        <button onClick={() => dispatch(getUserAccount(178))}>
          Init User
        </button>
      </div>
    </div>
  );
}

export default Account;
