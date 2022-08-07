import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transcations } = useContext(GlobalContext);

  return (
    <>
      <h3> History</h3>
      <ul className="list">
        {transcations.map((transcation) => (
          <li className="minus">
            {transcation.text} <span> -400</span> <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
