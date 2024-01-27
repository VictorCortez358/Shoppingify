'use client';
import MenuList from "@/components/MenuList";
import ShoppingList from "@/components/ShoppingList";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [showShoppingList, setShowShoppingList] = useState(true);
  const [showItemInformation, setShowItemInformation] = useState(false);

  const handleShowShoppingList = () => {
    setShowShoppingList(!showShoppingList);
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-sidebar phone:w-sidebar_phone">
        <Sidebar handleShowShoppingList={handleShowShoppingList} />
      </div>
      <div className="w-full flex flex-row phone:w-content">
        <MenuList showShoppingList={showShoppingList} handleShowShoppingList={handleShowShoppingList} />
        <ShoppingList showShoppingList={showShoppingList} />
      </div>
    </div>
  );
}

