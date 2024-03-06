import { incrementBonus } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Bonus() {
  const points = useSelector((state)=>state.account.amount)
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={()=>dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
