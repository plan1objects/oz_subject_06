import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';


const ExpenseList = ({expenses, initialExpense, handleDelete, hadleEdit, clearItems}) => {
        return (
            <>
                <ul className='list'>
                    {initialExpense.map(expense => {
                        return(
                            <ExpenseItem key={expense.id} expense={expense}
                            handleDelete={handleDelete} hadleEdit={hadleEdit} />
                        )
                    })}
                </ul>
                {expenses.length > 0 ?
                <button className='btn'
                onClick={clearItems}>
                    목록지우기
                    <MdDelete className='btn-icon' />
                </button> : null }
            </>
        );
}



export default ExpenseList;