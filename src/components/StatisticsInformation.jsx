import React from 'react';
import { useRootContext } from './RootContext';
import { Progress } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        quantity: 33,
        month: 'Jan',
    },
    {
        quantity: 88,
        month: 'Feb',
    },
    {
        quantity: 63,
        month: 'Mar',
    },
    {
        quantity: 33,
        month: 'Apr',
    },
    {
        quantity: 88,
        month: 'May',
    },
    {
        quantity: 63,
        month: 'Jun',
    },
    {
        quantity: 33,
        month: 'Jul',
    },
    {
        quantity: 88,
        month: 'Aug',
    },
    {
        quantity: 63,
        month: 'Sep',
    },
    {
        quantity: 33,
        month: 'Oct',
    },
    {
        quantity: 88,
        month: 'Nov',
    },
    {
        quantity: 63,
        month: 'Dec',
    },
];

const renderLineChart = (
    <div style={{
        width: '100%',
        height: '300px',
    }}>
        <ResponsiveContainer>
            <LineChart data={data} style={{
                width: '100%',
                height: '300px',
            }}>
                <Line type="monotone" dataKey="quantity" stroke="#F9A109" />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <Tooltip />
                <XAxis dataKey="month" />
                <YAxis dataKey="quantity" />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

const TopItems = () => {

    const ItemsTop = [
        {
            name: 'Milk',
            quantity: 33,
            color: '#F9A109'
        },
        {
            name: 'Cheese',
            quantity: 88,
            color: '#F9A109'
        },
        {
            name: 'Eggs',
            quantity: 63,
            color: '#F9A109'
        }
    ]

    return (
        <div className='w-1/2 flex flex-col justify-center items-start gap-4'>
            <h1 className='text-lg font-bold phone:text-sm'>Top Items</h1>
            <div className='flex flex-col justify-between items-start w-full gap-4'>
                {ItemsTop.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-start w-full'>
                        <p className='text-sm font-bold'>{item.name}</p>
                        <Progress percent={item.quantity} strokeColor={item.color} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const TopCategories = () => {

    const CategoriesTop = [
        {
            name: 'Dairy',
            quantity: 33,
            color: '#56CCF2'
        },
        {
            name: 'Meat',
            quantity: 88,
            color: '#56CCF2'
        },
        {
            name: 'Vegetables',
            quantity: 63,
            color: '#56CCF2'
        }
    ]

    return (
        <div className='w-1/2 flex flex-col justify-center items-start gap-4'>
            <h1 className='text-lg font-bold phone:text-sm'>Top Categories</h1>
            <div className='flex flex-col justify-between items-start w-full gap-4'>
                {CategoriesTop.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-start w-full'>
                        <p className='text-sm font-bold'>{item.name}</p>
                        <Progress percent={item.quantity} strokeColor={item.color} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const StatisticsInformation = () => {
    const { showShoppingList, handleShowShoppingList } = useRootContext();
    return (
        <div className={`w-list min-h-screen flex flex-col items-start py-4 px-14 gap-4 phone:${showShoppingList ? 'w-full' : 'hidden'} phone:px-5`}>
            <div className='w-full flex flex-row justify-center items-start gap-20 phone:gap-2'>
                <TopItems />
                <TopCategories />
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-4 phone:flex-wrap'>
                <h1 className='text-lg font-bold'>Monthly Summary</h1>
                {renderLineChart}
            </div>
        </div>
    );
}

export default StatisticsInformation;
