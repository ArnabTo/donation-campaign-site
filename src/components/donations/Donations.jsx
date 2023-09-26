import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = () => {
    const [donationData, setDonationData] = useState([])
    useEffect(() => {
        fetch('donationData.json')
            .then(res => res.json())
            .then(data => setDonationData(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                {
                    donationData.map(donation => <Donation donation={donation} key={donation.id}></Donation>)
                }
            </div>
        </div>
    );
};

export default Donations;


