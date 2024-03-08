import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement, incrementByAmount, fetchUserById } from '../slices/accountSlice';

function Account() {
  const [value, setValue] = useState(0);
  const [userId,setUserId] = useState(1);

  const dispatch = useDispatch();
  const amount = useSelector((state)=>state.account.amount);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={()=>{dispatch(increment())}}>Increment +</button>
        <button onClick={()=>dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)} placeholder='increment By Amount'></input>
        <button onClick={() => {dispatch(incrementByAmount(value))}}>
          Increment By {value} +
        </button>


        {/* Init User By Id */}
        <input type="text" onChange={(e) => setUserId(+e.target.value)} placeholder='User Id'></input>
        <button onClick={() => {dispatch(fetchUserById(userId))}}>
          Get User
        </button>
      </div>
    </div>
  );
}

export default Account;