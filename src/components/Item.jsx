import { GlobalContext } from '../context/GlobalState.jsx';
import { useContext } from 'react';

function Item({ transaction }) {    
    const { deleteTransaction } = useContext(GlobalContext);
    const val = transaction.amount;
    
    return (
        <li className="item relative bg-white border-gray-300 border drop-shadow-md flex justify-between items-center">
            <span className="p-1">{transaction.text}</span>
            <span className={`pl-2 p-1 border-r-4 ${val < 0 ? 'border-red-600' : 'border-green-600'}`}>
                {val < 0 ? `-${Math.abs(val)}` : `+${val}`}
            </span>
            <button 
                onClick={() => deleteTransaction(transaction.id)} 
                className="slide-button bg-red-600 text-white font-bold pl-1 pr-1">
                x
            </button>
            
            <style>{`
                .slide-button {
                    position: absolute;
                    left: -18px;
                    top: 5px;
                    bottom: 5px;
                    opacity: 0;
                    transition: all 0.3s ease-in-out;
                }

                .item:hover .slide-button {
                    opacity: 1;
                }
            `}</style>
        </li>
    );
}

export default Item;
