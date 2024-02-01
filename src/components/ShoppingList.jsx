"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ShoppingBottle from "../../public/source.svg";
import ItemCount from "./ItemCount";
import { Button, Input, Space } from "antd";
import { ConfigProvider } from "antd";
import AddItem from "./AddItem";
import ItemInformation from "./ItemInformation";
import { useRootContext } from "./RootContext";
import EditIcon from "../../public/edit_icon.svg";

const CardAddItem = ({ handleShowAddItemForm }) => {
    return (
        <div className="flex flex-row gap-4 bg-shopping_list px-4 rounded">
            <div className="relative -top-4">
                <Image src={ShoppingBottle} width={68} height={125} />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-white text-sm font-bold font-quicksand">
                    Didn't find what you need?
                </p>
                <button
                    onClick={handleShowAddItemForm}
                    className="text-black bg-white rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs"
                >
                    Add item
                </button>
            </div>
        </div>
    );
};

const ListItems = ({
    showShoppingList,
    handleShowAddItemForm,
    handleShowShoppingList,
    showItemInformation,
}) => {
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
    ];

    const [selectedItem, setSelectedItem] = useState(ItemsList);
    const [showComplete, setShowComplete] = useState(true);
    const inputRef = useRef(null);

    const sharedProps = {
        ref: inputRef,
    };

    const handleShowComplete = () => {
        setShowComplete(!showComplete);
    };

    useEffect(() => {
        if (!showComplete && inputRef.current) {
            inputRef.current.focus({ cursor: 'end' });
        }
    }, [showComplete]);


    return (
        <>
            {showItemInformation ? (
                <div
                    className={`w-shopping_list min-h-screen flex flex-col py-4 px-2 gap-4 fixed right-0 top-0 bottom-0 phone:${showShoppingList ? "hidden" : "w-content"
                        } phone:px-3 phone:my-2`}
                >
                    <CardAddItem handleShowAddItemForm={handleShowAddItemForm} />
                    <div className="flex flex-row items-center justify-between">
                        {showComplete ? (
                            <p className="text-black text-xl font-bold font-quicksand phone:text-base">
                                Shopping list
                            </p>
                        ) : (
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Input: {
                                            fontSize: "20px",
                                            fontFamily: "Quicksand",
                                        },
                                    },
                                }}
                            >
                                <Input
                                    variant="borderless"
                                    defaultValue={"Shopping list"}
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                    {...sharedProps}
                                />
                            </ConfigProvider>
                        )}
                        <Image
                            src={EditIcon}
                            width={25}
                            height={25}
                            alt="edit_icon"
                            onClick={() => handleShowComplete()}
                        />
                    </div>
                    {showComplete ? (
                        <>
                            <div className="h-3/5 flex flex-col gap-4 overflow-y-auto">
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Fruit and vegetables
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Meat and Fish
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Meat and Fish
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Meat and Fish
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                            </div>
                            <Space.Compact
                                style={{
                                    width: "100%",
                                    margin: "auto",
                                }}
                            >
                                <Input placeholder="Enter a name" />
                                <Button
                                    type="primary"
                                    style={{
                                        width: "30%",
                                        height: "auto",
                                        backgroundColor: "#F9A109",
                                        fontStyle: "bold",
                                    }}
                                >
                                    SAVE
                                </Button>
                            </Space.Compact>
                        </>
                    ) : (
                        <>
                            <div className="h-3/5 flex flex-col gap-4 overflow-y-auto">
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Fruit and vegetables
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Meat and Fish
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Meat and Fish
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-text-1 text-sm font-medium font-quicksand">
                                    Meat and Fish
                                </p>
                                <div className="flex flex-col items-start justify-center gap-4 px-2">
                                    {selectedItem.map((item) => (
                                        <ItemCount
                                            key={item.id}
                                            tag={item.name}
                                            showComplete={showComplete}
                                        />
                                    ))}
                                </div>
                            </div>
                            <Space.Compact
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 4,
                                    width: "100%",
                                    margin: "auto",
                                }}
                            >
                                <button className="text-black bg-white rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs">
                                    Cancel
                                </button>
                                <button className="text-white bg-cyan rounded text-sm py-2 px-5 font-medium font-quicksand phone:py-1 phone:text-xs">
                                    Complete
                                </button>
                            </Space.Compact>
                        </>
                    )}
                </div>
            ) : (
                <ItemInformation
                    handleShowShoppingList={handleShowShoppingList}
                    showShoppingList={showShoppingList}
                    showItemInformation={showItemInformation}
                />
            )}
        </>
    );
};

const ShoppingList = () => {
    const [showAddItemForm, setShowAddItemForm] = useState(false);
    const { showShoppingList, showItemInformation, handleShowShoppingList } =
        useRootContext();

    const handleShowAddItemForm = () => {
        setShowAddItemForm(!showAddItemForm);
    };

    return (
        <>
            {showAddItemForm ? (
                <AddItem
                    handleShowAddItemForm={handleShowAddItemForm}
                    showShoppingList={showShoppingList}
                />
            ) : (
                <ListItems
                    showShoppingList={showShoppingList}
                    handleShowAddItemForm={handleShowAddItemForm}
                    handleShowShoppingList={handleShowShoppingList}
                    showItemInformation={showItemInformation}
                />
            )}
        </>
    );
};

export default ShoppingList;
