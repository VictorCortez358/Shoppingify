import React from 'react';
import HistoryItem from './HistoryItem';

const HistoryMenu = ({showShoppingList}) => {
    return (
        <div className={`w-list min-h-screen flex flex-col items-start py-4 px-14 gap-4 phone:${showShoppingList ? 'w-full' : 'hidden'} phone:px-4`}>
            <h1 className="text-2xl font-bold mb-6 phone:text-xl phone:mb-4">Shopping history</h1>
            <p className='text-black text-xs font-quicksand font-bold'>August 2020</p>
            <HistoryItem  />
        </div>  
    );
}

export default HistoryMenu;
