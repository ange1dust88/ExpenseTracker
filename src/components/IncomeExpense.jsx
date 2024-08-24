
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState.jsx';


function IncomeExpense() {
    const { transactions } = useContext(GlobalContext);
    
    const amounts = transactions.map( transaction => transaction.amount);

    const incomesList = amounts.filter((amount) => amount > 0);
    const incomes = incomesList.reduce(
        (accumulator, currentValue) => accumulator +=currentValue,0
    ).toFixed(2);

    const expensesList = amounts.filter((amount) => amount < 0);
    const expenses= (expensesList.reduce(
        (accumulator, currentValue) => accumulator +=currentValue,0
    ) * -1).toFixed(2);


    return(
        <div className="mb-5 flex justify-around bg-white  pt-3 pb-3 pr-8 pl-8 border-gray-300 border drop-shadow-md">
            <div className="text-center border-r border-gray-300 pr-12">
                <p className="font-semibold">INCOME</p>
                <span className="text-green-500">{incomes}</span>

            </div>
            <div className="text-center">
                <p className="font-semibold">EXPENSE</p>
                <span className="text-red-500 " >{expenses}</span>
            </div>
        </div>
    );
}

export default IncomeExpense;