'use client';
import React from 'react';
import BackIcon from '../../public/keyboard_backspace.svg';
import Image from 'next/image';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker } from 'antd';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
import { useState } from 'react';
import { useRouter } from 'next/navigation'



const HistoryItemInformation = ({ showShoppingList, handleShowShoppingList }) => {

    const router = useRouter()
    const HistoryItems = [
        {
            id: 1,
            name: "Eeros farewell party",
            date: "2020-08-01",
            shopping: [
                {
                    category: "Dairy",
                    items: [
                        {
                            id: 1,
                            name: "Cheese",
                            quantity: '3 pcs'
                        },
                        {
                            id: 2,
                            name: "Milk",
                            quantity: '3 pcs'
                        },
                    ],
                },
            ],
        }
    ];

    const [items, setItems] = useState(HistoryItems);
    return (
        <div className={`w-list min-h-screen flex flex-col items-start py-4 px-14 gap-4 phone:${showShoppingList ? 'w-full' : 'hidden'} phone:px-5`}>
            <div
                onClick={() => {
                    handleShowShoppingList();
                    router.back();
                }}
                className="flex flex-row justify-start items-center gap-2"
            >
                <Image src={BackIcon} width={20} height={20} />
                <p className="text-sm font-bold text-yellow font-quicksand phone:text-xs">
                    Back
                </p>
            </div>
            <h1 className="text-2xl font-bold mb-2 phone:text-lg phone:mb-0">Eeros farewell party</h1>
            <DatePicker
                defaultValue={dayjs("2020-08-01", dateFormat)}
                disabled
                size="small"
            />
            {
                items[0].shopping.map((item) => (
                    <div className='flex flex-col items-start justify-center' key={item.id}>
                        <p className='text-black text-lg font-bold mb-4 phone:text-base phone:mb-2'>{item.category}</p>
                        <div className='w-full flex flex-wrap justify-center items-center gap-6 phone:flex-wrap phone:justify-start'>
                            {
                                item.items.map((item) => (
                                    <div className='flex flex-row justify-center items-center gap-6 phone:gap-2' key={item.id}>
                                        <p className='text-black text-base font-medium phone:text-sm'>{item.name}</p>
                                        <p className='text-yellow text-base font-bold phone:text-sm'>{item.quantity}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default HistoryItemInformation;
