import { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const [account, setAccount] = useState({ amount: 0 });
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };

  const incrementBonus = () => {
    setBonus({ points: bonus.points + 1 });
  };

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {account.amount}</h3>
      <h3>Total Bonus : {bonus.points}</h3>

      <Account
        increment={increment}
        decrement={decrement}
        incrementByAmount={incrementByAmount}
        account={account}
      ></Account>
      <Bonus
        incrementBonus={incrementBonus}
        bonus={bonus}
      ></Bonus>
    </div>
  );
}

export default App;
