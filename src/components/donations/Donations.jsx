import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = ({searchValue}) => {
    const [donationData, setDonationData] = useState([]);
    // const [desplayDonation, setDisplayDonation] = useState([])
    console.log(searchValue)
  
    useEffect(() => {
        fetch('donationData.json')
            .then(res => res.json())
            .then(data => setDonationData(data))

            
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                {
                    // desplayDonation.map(donation => <Donation donation={donation} key={donation.id}></Donation>)
                     donationData.map(donation => <Donation donation={donation} key={donation.id}></Donation>)
                }
            </div>
        </div>
    );
};

export default Donations;


