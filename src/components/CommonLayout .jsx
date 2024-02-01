import React from 'react';
import { RootProvider } from './RootContext';
import Sidebar from './Sidebar';
import ShoppingList from './ShoppingList';


const CommonLayout = ({children}) => {
    return (
        <RootProvider>
            <div className="flex min-h-screen font-quicksand ">
                <div className="w-sidebar phone:w-sidebar_phone">
                    <Sidebar />
                </div>
                <div className="w-full flex flex-row phone:w-content">
                    {children}
                    <ShoppingList />
                </div>
            </div>

        </RootProvider>
    );
}

export default CommonLayout;
