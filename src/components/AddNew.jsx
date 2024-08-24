import { useState } from "react";
import {GlobalContext} from '../context/GlobalState.jsx';
import { useContext } from 'react';

function AddNew() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: text,
            amount: +amount
        }
        setText("");
        setAmount(0);
        addTransaction(newTransaction);
    }
    return(
        <>
            <h2 className='text-lg font-bold border-b border-gray-300 mb-4 pb-2'>Add new transaction</h2>
            <form onSubmit={onSubmit}>
                <div className="w-full mb-2">
                    <p className="mb-2 font-semibold">Text</p>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." className="p-1 w-full border-gray-300 border drop-shadow-md"/>
                </div>
                <div className="w-full mb-2">
                    <p className="font-semibold">Amount</p>
                    <p className="font-semibold mb-2" >(negative - expense, positive - income)</p>
                    <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} placeholder="Enter amount..." className="p-1 w-full border-gray-300 border drop-shadow-md"/>
                </div>
                <button className="text-white p-1 w-full bg-purple-500 border-gray-300 border drop-shadow-md hover:bg-purple-600 transition-all duration-300" >Add transaction</button>
            </form>
        </>
    );

}

export default AddNew;