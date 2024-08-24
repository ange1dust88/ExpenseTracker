import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState.jsx';

const Balance = () =>{

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map( transaction =>  transaction.amount);
    const total = amounts.reduce(
        (accumulator, currentValue) => (accumulator + currentValue),
        0).toFixed(2);
    return(
        <div className="mb-3 font-semibold"> 
            <p>YOUR BALANCE</p>
            <span className="text-3xl font-bold">${total}</span>
        </div>
    );

}

export default Balance;