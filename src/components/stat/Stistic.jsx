import React, { useEffect, useState } from 'react';
import { Pie, PieChart, Tooltip, Cell } from 'recharts';
import { getStoredCard } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router-dom';

const Statistcs = () => {
    const [donatedData, setDonatedData] = useState([]);
    const donataionData = useLoaderData();

    useEffect(() => {
        const storedDonationCard = getStoredCard();
        if (donataionData) {
            const storedDonateData = [];
            for (const singleDonateId of storedDonationCard) {
                const matchedData = donataionData.find(donationData => donationData.id === singleDonateId);
                if (matchedData) {
                    storedDonateData.push(matchedData);
                }
            }
            setDonatedData(storedDonateData);
        }
    }, [donataionData]);

    const allDonateCardPrice = donataionData.reduce((preValue, donatePrice) => preValue + donatePrice.price, 0);

    const totalDonatePrice = donatedData.reduce((preValue, donatePrice) => preValue + donatePrice.price, 0);
    const percentageOfDonate = ((totalDonatePrice / allDonateCardPrice) * 100).toFixed(2);
    const restTotalOutOf100 = (allDonateCardPrice - percentageOfDonate).toFixed(2);

    const data = [
        { name: 'You Donate ', value: parseFloat(percentageOfDonate), color: '#FF444A' },
        { name: 'Total Donate', value: parseFloat(restTotalOutOf100), color: '#00C49F' },
    ];

    return (
        <div className='flex justify-center items-center' >
            <PieChart width={500} height={500}>
                <Pie
                    data={data}
                    cx="60%"
                    cy="50%"

                    outerRadius={143}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((color, index) => (
                        <Cell key={index} fill={color.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
            <h2 className='relative right-64 bottom-20 text-2xl text-white '>  {percentageOfDonate}% </h2>
            <h2 className='relative right-80 top-12  text-2xl text-white '>  {restTotalOutOf100}% </h2>
        </div>
    );
};

export default Statistcs;