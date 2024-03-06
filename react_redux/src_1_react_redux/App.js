import { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);

  return (
    <div className="App">
      <h4>App</h4>

      {/* Nested Ternery Operator Statement! */}
      {account.pending ? (
        <h3>Loading.....</h3>
      ) : (account.error ? (
        <h3 className="error">Error!!!!!, {account.error}</h3>
      ) : (
        <h3>Current Amount : {amount}</h3>
      ))}

      <h3>Total Bonus : {points}</h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
