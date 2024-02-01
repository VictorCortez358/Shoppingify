"use client";
import React from "react";
import { useState, useContext, createContext, useEffect } from "react";

const RootContext = createContext();

const options = [
    {
        name: 'menu',
        path: '/',
    },
    {
        name: 'replay',
        path: '/history',
    },
    {
        name: 'graphics',
        path: '/graphics',
    },
]

export const RootProvider = ({ children }) => {
    const [showShoppingList, setShowShoppingList] = useState(true);
    const [showItemInformation, setShowItemInformation] = useState(true);

    useEffect(() => {
        const matchingOption = options.find((opt) => opt.path === window.location.pathname);
        if (matchingOption) {
            setSelectedItem(matchingOption);
        }
    }, []);

    const [selectedItem, setSelectedItem] = useState(options[0]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    const isItemSelected = (item) => {
        return selectedItem === item;
    }

    const handleShowShoppingList = () => {
        setShowShoppingList(!showShoppingList);
        setShowItemInformation(true);
    };

    const handleShowItemInformation = () => {
        setShowShoppingList(false);
        setShowItemInformation(!showItemInformation);
    };

    return (
        <RootContext.Provider
            value={{
                showShoppingList,
                showItemInformation,
                handleShowShoppingList,
                handleShowItemInformation,
                selectedItem,
                setSelectedItem,
                handleItemClick,
                isItemSelected,
                options,
            }}
        >
            {children}
        </RootContext.Provider>
    );
};

export const useRootContext = () => useContext(RootContext);
