import { useEffect, useState } from 'react';
import { Pie, PieChart, Tooltip, Cell } from 'recharts';
import { useLoaderData } from "react-router-dom";
import { getDonationData } from '../../utility/localStorage';

const Stat = () => {
    const [donationData, setdonationData] = useState([]);
    const donation = useLoaderData();
    useEffect(() => {
        const storedDonationCard = getDonationData();
        if (donation) {
            const storedDonateData = [];
            for (const donationID of storedDonationCard) {
                const matchedData = donation.find(donation => donation.id === donationID);
                if (matchedData) {
                    storedDonateData.push(matchedData);
                }
            }
            setdonationData(storedDonateData);
        }
    }, [donation]);

    const totalDonationPrice = donation.reduce((preValue, donation) => preValue + donation.price, 0);

    const totalDonatedprice = donationData.reduce((preValue, donatePrice) => preValue + donatePrice.price, 0);
    const percentageOfDonate = parseInt(totalDonatedprice / totalDonationPrice * 100);
    const restTotalDonation = 100 - percentageOfDonate;
    console.log(restTotalDonation, percentageOfDonate)

    const data = [
        { name: 'You Donation ', value: parseFloat(percentageOfDonate), color: '#f87272' },
        { name: 'Total Donation', value: parseFloat(restTotalDonation), color: '#00C49F' },
    ];


    return (
        <div>
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
                <h2 className='relative right-[12rem] bottom-20 text-2xl text-white '>  {percentageOfDonate}%</h2>
                <h2 className='relative right-80 top-12  text-2xl text-white '>  {restTotalDonation}%</h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-center gap-4 items-center'>
                <span>
                    <h2>Total Donation</h2>
                    <progress className="progress progress-accent w-56" value={restTotalDonation} max="100"></progress>
                </span>
                <span>
                    <h1>Your Donatin</h1>
                    <progress className="progress progress-error  w-56" value={percentageOfDonate} max="100"></progress>
                </span>

            </div>
        </div>
    );
};

export default Stat;