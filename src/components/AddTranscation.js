import React, { useState } from 'react';

const AddTranscation = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text"> Text</label>
          <input
            type="text"
            placeholder="Enter text ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button className="btn"> Add transcation</button>
      </form>
    </>
  );
};

export default AddTranscation;
