'use client';
import MenuList from "@/components/MenuList";
import ShoppingList from "@/components/ShoppingList";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
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
        <MenuList showShoppingList={showShoppingList} handleShowShoppingList={handleShowShoppingList} handleShowItemInformation={handleShowItemInformation} />
        <ShoppingList showShoppingList={showShoppingList} handleShowShoppingList={handleShowShoppingList} showItemInformation={showItemInformation}/>
      </div>
    </div>
  );
}

