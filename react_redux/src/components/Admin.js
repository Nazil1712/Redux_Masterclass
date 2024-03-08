import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';
import { useAddAccountMutation, useGetAccountsQuery } from '../api/adminSlice';

function Admin() {

  const {data, error, isLoading} = useGetAccountsQuery();
  const [addAccount,response] = useAddAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        
        {data && data.map((v,i,arr)=><p>{v.id} : {v.amount}</p>)}

        <button onClick={()=>addAccount(101,data.length+1)}>Add Account</button>
      </div>
    </div>
  );
}

export default Admin;