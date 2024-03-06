import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementByAmount,
} from "../toolkit_reducers/rewardReducer";

function Reward() {
  const points = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment +
        </button>

        <input
          type="text"
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Increment By Amount"
        ></input>
        <button
          onClick={() => {
            dispatch(incrementByAmount(value));
          }}
        >
          Increment by {value} +
        </button>
      </div>
    </div>
  );
}

export default Reward;
