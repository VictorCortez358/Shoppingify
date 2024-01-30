'use client';
import HistoryItemInformation from "@/components/HistoryItemInformation";
import ShoppingList from "@/components/ShoppingList";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";


export default function History() {
    const [showShoppingList, setShowShoppingList] = useState(true);
    const [showItemInformation, setShowItemInformation] = useState(true);

    const handleShowShoppingList = () => {
        setShowShoppingList(!showShoppingList);
        setShowItemInformation(true);
    }

    const handleShowItemInformation = () => {
        setShowShoppingList(false);
        setShowItemInformation(!showItemInformation);
    }
    return (
        <div className="flex min-h-screen font-quicksand ">
            <div className="w-sidebar phone:w-sidebar_phone">
                <Sidebar handleShowShoppingList={handleShowShoppingList} />
            </div>
            <div className="w-full flex flex-row phone:w-content">
                <HistoryItemInformation showShoppingList={showShoppingList} handleShowShoppingList={handleShowShoppingList} />
                <ShoppingList showShoppingList={showShoppingList} handleShowShoppingList={handleShowShoppingList} showItemInformation={showItemInformation} />
            </div>
        </div>
    );
}
