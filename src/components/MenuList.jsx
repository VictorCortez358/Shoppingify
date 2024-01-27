'use client';
import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined} from "@ant-design/icons";
import ItemTag from "./ItemTag"


const HeaderList = () => {
    return (
        <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="w-1/2 phone:w-full">
                <h1 className="text-xl text-gray-text font-bold font-quicksand phone:text-lg">
                    <span className="text-item_selected font-bold">Shoppingify</span>{" "}
                    allows you to take your shopping list wherever you go
                </h1>
            </div>
            <div className="w-1/2 mb-auto phone:hidden">
                <Input
                    size="large"
                    placeholder="Search item"
                    prefix={<SearchOutlined />}
                />
            </div>
        </div>
    );
};

const ItemsList = ({handleShowShoppingList}) => {

    const ItemsList = [
        {
            id: 1,
            name: "Vegetables",
        },
        {
            id: 2,
            name: "Fruits",
        },
        {
            id: 3,
            name: "Meat",
        },
        {
            id: 4,
            name: "Fish",
        },
        {
            id: 5,
            name: "Milk",
        },
        {
            id: 6,
            name: "Eggs",
        },
        {
            id: 7,
            name: "Bread",
        },
        {
            id: 8,
            name: "Cereals",
        },
    ]

    const [items, setItems] = useState(ItemsList)

    return(
        <div className="w-full flex flex-wrap items-center gap-6">
            {items.map((item) => (
                <ItemTag key={item.id} tag={item.name} handleShowShoppingList={handleShowShoppingList} />
            ))}
        </div>
    )
}

const MenuList = ({showShoppingList, handleShowShoppingList}) => {
    return (
        <div className={`w-list min-h-screen flex flex-col items-start py-4 px-14 gap-4 phone:${showShoppingList ? 'w-full' : 'hidden'} phone:px-5`}>
            <HeaderList />
            <p className="text-black text-base font-bold font-quicksand mb-2 mt-4 phone:text-sm">Fruit and vegetables</p>
            <ItemsList handleShowShoppingList={handleShowShoppingList} />
            <p className="text-black text-base font-bold font-quicksand mb-2 mt-4 phone:text-sm">Beverages</p>
            <ItemsList />
        </div>
    );
};

export default MenuList;
