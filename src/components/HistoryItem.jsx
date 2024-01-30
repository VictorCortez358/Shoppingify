"use client";
import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker } from "antd";
import { Tag } from "antd";
import { useState } from "react";
import Link from 'next/link';
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
import ArrowForwardIcon from '../../public/arrow_forward.svg';
import Image from 'next/image';

const HistoryItem = () => {

    const HistoryItems = [
        {
            id: 1,
            name: "Milk",
            date: "2020-08-01",
            shopping: [
                {
                    id: 1,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 2,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 3,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
            ]
        },
        {
            id: 2,
            name: "Milk",
            date: "2020-08-01",
            shopping: [
                {
                    id: 1,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 2,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 3,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
            ]
        },
        {
            id: 3,
            name: "Milk",
            date: "2020-08-01",
            shopping: [
                {
                    id: 1,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 2,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 3,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
            ]
        },
        {
            id: 4,
            name: "Butter",
            date: "2020-08-01",
            shopping: [
                {
                    id: 1,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 2,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
                {
                    id: 3,
                    name: "Milk",
                    category: "Dairy",
                    quantity: 2,
                },
            ]
        },
    ];

    const [items, setItems] = useState(HistoryItems);



    return (
        <div className="w-full flex flex-col gap-6">
            {items.map((item) => (
                <div className="flex flex-row justify-between px-4 phone:px-0 phone:flex-col phone:gap-1" key={item.id}>
                    <p className="text-black text-base font-medium font-quicksand phone:text-sm">{item.name}</p>
                    <div className="flex flex-row items-center justify-center gap-5 phone:flex-wrap phone:items-center phone:justify-start phone:gap-1">
                        <DatePicker
                            defaultValue={dayjs(item.date, dateFormat)}
                            disabled
                            size="small"
                            style={{
                                width: '45%',
                            }}
                        />
                        <Tag color="blue">completed</Tag>
                        <Link href={`/history/${item.id}`}>
                            <Image src={ArrowForwardIcon} alt="item" width={18} height={18} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default HistoryItem;
