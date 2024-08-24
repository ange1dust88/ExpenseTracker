import Item from './Item.jsx';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState.jsx';
const History = () => {

    const { transactions } = useContext(GlobalContext);
    return(
        <div>
            <h2 className='text-lg font-bold border-b border-gray-300 mb-4 pb-2'>History</h2>
            <ul className='flex flex-col gap-1.5 mb-5'>
                { transactions.map( transaction => (
                    <Item key = {transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    );

}

export default History;