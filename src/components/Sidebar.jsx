"use client";
import React, { useEffect } from "react";
import { Tooltip } from "antd";
import Image from "next/image";
import MenuList from "../../public/menu_list.svg";
import Replay from "../../public/replay.svg";
import Grapichs from "../../public/graphics.svg";
import Logo from "../../public/logo.svg";
import ShoppingCart from "../../public/shopping_cart.svg";
import { useRouter } from "next/navigation";
import { useRootContext } from "./RootContext";


const Sidebar = () => {
    const router = useRouter();
    const { selectedItem, setSelectedItem, handleItemClick, isItemSelected, handleShowShoppingList, options } = useRootContext();

    useEffect(() => {
        const currentItem = options.find((item) => item.path === router.pathname);
        if (currentItem) {
            setSelectedItem(currentItem);
        }
    }, [router.pathname, options]);

    return (
        <div className="w-sidebar min-h-screen flex flex-col items-center justify-between py-4 fixed left-0 top-0 bottom-0 phone:w-sidebar_phone">
            <Image src={Logo} width={38} height={38} alt="image" className="phone:w-7 phone:h-7" />
            <ul className="w-full flex flex-col gap-10">
                {options.map((item) => (
                    <li
                        key={item.name}
                        className="flex flex-row items-center justify-between"
                        onClick={() => {
                            handleItemClick(item);
                            router.push(item.path);
                        }}
                    >
                        {isItemSelected(item) && (
                            <div className="bg-item_selected w-1/12 rounded-r-lg h-12"></div>
                        )}
                        <div className="w-1/12 h-12 rounded-r-lg"></div>
                        <div className="w-11/12 flex items-center justify-center">
                            <Tooltip placement="right" title={item.name}>
                                <Image
                                    src={getIconByItemName(item.name)}
                                    width={22}
                                    height={22}
                                    className="phone:w-5 phone:h-5"
                                />
                            </Tooltip>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="relative" onClick={handleShowShoppingList}>
                <div className="bg-item_selected w-10 h-10 flex items-center justify-center rounded-full relative phone:w-8 phone:h-8">
                    <Image src={ShoppingCart} width={20} height={20} alt="imageShop" className="phone:w-4 phone:h-4" />
                    <div className="flex items-center justify-center bg-red-600 w-5 h-5 z-10 rounded-full absolute -top-1 -right-1">
                        <p className="text-white text-xs font-bold">1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const getIconByItemName = (itemName) => {
    switch (itemName) {
        case "menu":
            return MenuList;
        case "replay":
            return Replay;
        case "graphics":
            return Grapichs;
        default:
            return null;
    }
};



export default Sidebar;
