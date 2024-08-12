import { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

export default function SplitingClaculator({ userId, name, handleNewBillF }) {
  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [youPay, setYouPay] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (bill <= 0) return;
    if (bill < expense) return;
    handleNewBillF(userId, youPay ? bill - expense : -1 * expense);
    setBill(0);
    setExpense(0);
  }

  function handleChangePayer(name) {
    name === "You" ? setYouPay(true) : setYouPay(false);
  }

  return (
    <div>
      <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="label">Split bill with {name}</h2>
        <FormInput
          inputT="number"
          inputV={bill}
          onChangeF={setBill}
          placeholderV={0}
        >
          <p>
            <span>🧑‍🤝‍👩</span>Bill value
          </p>
        </FormInput>
        <FormInput
          inputT="number"
          inputV={expense}
          onChangeF={setExpense}
          placeholderV={0}
        >
          <p>
            <span>🧑‍🤝‍👩</span>Your epense
          </p>
        </FormInput>
        <p>
          <span>🧑‍🤝‍👩</span>
          {name}'s expense:
        </p>
        <p>{bill > 0 && bill - expense}</p>
        <FormSelect
          options={[
            { id: true, value: "You" },
            { id: false, value: name },
          ]}
          onChangeF={handleChangePayer}
        >
          <p>
            <span>🧑‍🤝‍👩</span>Who is paying the bill?
          </p>
        </FormSelect>
        <button className="button">Splt bill</button>
      </form>
    </div>
  );
}
