"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ShoppingBottle from "../../public/source.svg";
import ItemCount from "./ItemCount";
import { Button, Input, Space, Modal } from "antd";
import { ConfigProvider } from "antd";
import AddItem from "./AddItem";
import ItemInformation from "./ItemInformation";
import { useRootContext } from "./RootContext";
import EditIcon from "../../public/edit_icon.svg";
import { ExclamationCircleFilled } from "@ant-design/icons";
const { confirm } = Modal;

const showDeleteConfirm = () => {
    confirm({
        title: "Are you sure that you want to cancel this list?",
        icon: <ExclamationCircleFilled />,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
            console.log("OK");
        },
        onCancel() {
            console.log("Cancel");
        },
    });
};

const showConfirm = () => {
    confirm({
        title: "Do you Want to delete these items?",
        icon: <ExclamationCircleFilled />,
        content: "Some descriptions",
        onOk() {
            console.log("OK");
        },
        onCancel() {
            console.log("Cancel");
        },
    });
};

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
            category: "Vegetables",
            items: [
                {
                    id: 2,
                    name: "Fruits",
                    category: "Fruit and vegetables",
                },
                {
                    id: 3,
                    name: "Meat",
                    category: "Meat and Fish",
                },
            ],
        },
        {
            id: 2,
            category: "Fruit and vegetables",
            items: [
                {
                    id: 4,
                    name: "Fruits",
                    category: "Fruit and vegetables",
                },
                {
                    id: 5,
                    name: "Meat",
                    category: "Meat and Fish",
                },
            ],
        },
        {
            id: 3,
            category: "Meat and Fish",
            items: [
                {
                    id: 6,
                    name: "Fruits",
                    category: "Fruit and vegetables",
                },
                {
                    id: 7,
                    name: "Meat",
                    category: "Meat and Fish",
                },
            ],
        },
        {
            id: 4,
            category: "Fruit and vegetables",
            items: [
                {
                    id: 8,
                    name: "Fruits",
                    category: "Fruit and vegetables",
                },
                {
                    id: 9,
                    name: "Meat",
                    category: "Meat and Fish",
                },
            ],
        }
    ];
    const [allChecked, setAllChecked] = useState(false);

    const checkedAllItems = (e) => {
        setAllChecked(!allChecked);
    };

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
            inputRef.current.focus({ cursor: "end" });
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
                                        fontSize: screen.width < 768 ? "16px" : "20px",
                                        padding: "0",
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
                            <>
                                <div className="h-3/5 flex flex-col gap-4 overflow-y-auto">
                                    {selectedItem.map((category) => (
                                        <div key={category.id}>
                                            <p className="text-gray-text-1 text-sm font-medium font-quicksand mb-2">
                                                {category.category}
                                            </p>
                                            <div className="flex flex-col items-start justify-center gap-3 px-2">
                                                {category.items.map((item) => (
                                                    <ItemCount
                                                        key={item.id}
                                                        tag={item.name}
                                                        showComplete={showComplete}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
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
                                <>
                                    {selectedItem.map((category) => (
                                        <div key={category.id}>
                                            <p className="text-gray-text-1 text-sm font-medium font-quicksand mb-2">
                                                {category.category}
                                            </p>
                                            <div className="flex flex-col items-start justify-center gap-3 px-2">
                                                {category.items.map((item) => (
                                                    <ItemCount
                                                        allChecked={allChecked}
                                                        checkedAllItems={checkedAllItems}
                                                        setAllChecked={setAllChecked}
                                                        key={item.id}
                                                        tag={item.name}
                                                        showComplete={showComplete}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </>
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
                                <button
                                    onClick={showDeleteConfirm}
                                    className={`text-black bg-white rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs ${allChecked ? "hidden" : ""}`}
                                >
                                    Cancel
                                </button>
                                {
                                    allChecked ? (
                                        <div className="flex flex-row items-center justify-between gap-2">
                                            <button
                                                onClick={checkedAllItems}
                                                className="text-black bg-white rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs"
                                            >
                                                Unselect all
                                            </button>
                                            <button

                                                className="text-white bg-yellow rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs"
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={checkedAllItems}
                                            className="text-white bg-yellow rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs"
                                        >
                                            Complete
                                        </button>

                                    )
                                }
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
