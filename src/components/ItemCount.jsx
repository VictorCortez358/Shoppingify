"use client";
import React from "react";
import { useState } from "react";
import { Button, Space, Checkbox } from "antd";
import { ConfigProvider } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
const ButtonGroup = Button.Group;
import DeleteIcon from "../../public/delete_FILL0_wght400_GRAD0_opsz24.svg";

const ItemCount = ({ tag, showComplete }) => {
    const [count, setCount] = useState(0);
    const [isSelect, setIsSelect] = useState(false);
    const [checked, setChecked] = useState(false);

    const increase = () => {
        setCount(count + 1);
    };
    const decline = () => {
        let newCount = count - 1;
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount);
    };

    const onChange = (e) => {
        setChecked(e.target.checked);
    };

    return showComplete ? (
        <div className="w-full flex flex-row items-center justify-between gap-4">
            <p className="text-black text-base font-bold font-quicksand phone:text-sm">
                {tag}
            </p>
            <Space
                size="small"
                onMouseEnter={() => setIsSelect(true)}
                onMouseLeave={() => setIsSelect(false)}
            >
                {isSelect ? (
                    <ButtonGroup
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <div className="bg-yellow rounded-lg py-1  px-1">
                            <Image
                                src={DeleteIcon}
                                width={17}
                                height={17}
                                alt="icon-delete"
                                className="rounded"
                            />
                        </div>
                        <Button
                            size="small"
                            onClick={decline}
                            icon={<MinusOutlined />}
                            style={{
                                borderStyle: "none",
                                color: "#F9A109",
                            }}
                        />
                        <div className="flex flex-row items-center justify-between gap-4 border border-yellow px-2 py-1 rounded-lg phone:px-1 phone:py-0">
                            <p className="text-yellow text-sm">{count} pcs</p>
                        </div>
                        <Button
                            size="small"
                            onClick={increase}
                            icon={<PlusOutlined />}
                            style={{
                                borderStyle: "none",
                                color: "#F9A109",
                            }}
                        />
                    </ButtonGroup>
                ) : (
                    <div className="flex flex-row items-center justify-between gap-4 border border-yellow px-2 py-1 rounded-lg phone:px-1 phone:py-0">
                        <p className="text-yellow text-sm">{count} pcs</p>
                    </div>
                )}
            </Space>
        </div>
    ) : (
        <div className="w-full flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-center justify-center gap-2">
                <ConfigProvider
                    theme={{
                        token: {
                            colorBorder: "#F9A109",
                            colorPrimary: "#F9A109",
                        },
                    }}
                >   
                    <Checkbox onChange={onChange}  />
                </ConfigProvider>
                
                <p className={`text-black text-base font-bold font-quicksand phone:text-sm ${checked ? "line-through" : ""}`} >
                    {tag}
                </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 border border-yellow px-2 py-1 rounded-lg phone:px-1 phone:py-0">
                <p className="text-yellow text-sm">{count} pcs</p>
            </div>
        </div>
    );
};

export default ItemCount;
