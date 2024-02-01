"use client";
import React from "react";
import {
    Form,
    Input,
    Select,
} from "antd";
import { useRootContext } from "./RootContext";

const { TextArea } = Input;

const AddItem = () => {
    const { showShoppingList, handleShowAddItemForm } = useRootContext();
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <div className={`w-shopping_list min-h-screen flex flex-col justify-evenly px-2 fixed right-0 top-0 bottom-0  phone:${showShoppingList ? 'hidden' : 'w-content'} phone:px-5`}>
            <h1 className="text-black text-xl phone:text-lg">Add a new item</h1>
            <Form
                layout="vertical"
                style={{
                    width: '100%',
                    paddingLeft: 8,
                    paddingRight: 8,
                }}
            >
                <Form.Item label="Name" required>
                    <Input placeholder="Enter a name" size={screen.width < 768 ? "middle" : "large"}/>
                </Form.Item>
                <Form.Item label="Note (optional)">
                    <TextArea rows={4} placeholder="Enter a note" size={screen.width < 768 ? "middle" : "large"}/>
                </Form.Item>
                <Form.Item label="Image (optional)">
                    <Input placeholder="Enter a url" size={screen.width < 768 ? "middle" : "large"}/>
                </Form.Item>
                <Form.Item label="Category" required>
                    <Select size={screen.width < 768 ? "middle" : "large"}>
                        <Select.Option value="FruitsVegetable">Fruit and vegetables</Select.Option>
                        <Select.Option value="MeatFish">Meat and Fish</Select.Option>
                        <Select.Option value="Beverages">Beverages</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
            <div className="w-full flex flex-row justify-center items-center gap-4">
                <button onClick={handleShowAddItemForm} className="text-black bg-white rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs">
                    Cancel
                </button>
                <button onClick={handleShowAddItemForm} className="text-white bg-yellow rounded text-sm py-2 px-5 font-medium font-quicksand phone:py-1 phone:text-xs">
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddItem;
