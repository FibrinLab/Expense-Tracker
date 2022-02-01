import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Name: </label>
                <input type='text' />
            </div>
            <div className='new-expense__control'>
                <label>Amount: </label>
                <input type='number' />
            </div>
            <div className='new-expense__control'>
                <label>Date: </label>
                <input type='date' />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button>Submit</button>
        </div>
    </form>
}

export default ExpenseForm;
