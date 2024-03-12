import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  const [id, setId] = useState(0);
  const [amount, setAmount] = useState(0);

  const { data, error, isLoading , isSuccess} = useGetAccountsQuery();
  const [addAccount, responseOfAdd] = useAddAccountMutation();
  const [deleteAccount, responseOfDelete] = useDeleteAccountMutation();
  const [updateAccount, responseOfUpdate] = useUpdateAccountMutation();


  const handleInputId = (e)=>{
    const value = parseInt(e.target.value,10);
    if(!isNaN(value)) {
      setId(value)
    }
  }


  const handleInputAmount = (e) =>{
    const value = parseInt(e.target.value,10);
    if(!isNaN(value)) {
      setAmount(value)
    }
  }


  const handleAddAccount = () =>{
    const value = toString(id);
      addAccount(amount,value)
    }

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>

        {isLoading? <p>Loading.......</p>:null}
        { !isLoading && data &&
          data.map((v, i, arr) => (
            <p>
              {v.id} : {v.amount}{" "}
              <button onClick={() => deleteAccount(v.id)}>Delete</button>
              <button onClick={()=>updateAccount({id:v.id,amount:777})}>Update</button>
            </p>
          ))}

        <input placeholder="Add Account ID" onChange={handleInputId}></input>
        <input placeholder="Add Account Amount" onChange={handleInputAmount}></input>
        <button onClick={handleAddAccount}>
          Add Account
        </button>
      </div>
    </div>
  );
}

export default Admin;
