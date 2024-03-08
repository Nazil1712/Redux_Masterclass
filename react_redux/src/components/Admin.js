import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';
import { useGetAccountsQuery } from '../api/adminSlice';

function Admin() {

  const {data, error, isLoading} = useGetAccountsQuery();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        
        {data && data.map((v,i,arr)=><p>{v.id} : {v.amount}</p>)}
        {/* <button onClick={()=>{dispatch(increment())}}>Increment +</button> */}
      </div>
    </div>
  );
}

export default Admin;