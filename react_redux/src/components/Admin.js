import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
} from "../api/adminSlice";

function Admin() {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount, responseOfAdd] = useAddAccountMutation();
  const [deleteAccount, responseOfDelete] = useDeleteAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>

        {data &&
          data.map((v, i, arr) => (
            <p>
              {v.id} : {v.amount}{" "}
              <button onClick={() => deleteAccount(v.id)}>Delete</button>
            </p>
          ))}

        <button onClick={() => addAccount(101, data.length + 1)}>
          Add Account
        </button>
      </div>
    </div>
  );
}

export default Admin;
