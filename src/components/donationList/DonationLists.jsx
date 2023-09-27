import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {getDonationData} from "../../utility/localStorage.js"
import DonationList from "./DonationList.jsx";

const DonationLists = () => {
    const [donationdatalist, setDonationdatalist] = useState([]);
    const [showData, setShowData] = useState(4);
   const donations = useLoaderData();

    useEffect(()=>{
         const storeDonationData = getDonationData();

         if(donations.length > 0){
            const donationDataList = [];
            for(const id of storeDonationData){
                const donation = donations.find(donation => donation.id == id)
                if(donation){
                    donationDataList.push(donation)
                }
            }
            setDonationdatalist(donationDataList)
       
         }
  
    },[])

    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {
                donationdatalist.slice(0, showData).map(donationlist => <DonationList donationlist={donationlist} key={donationlist.id}></DonationList>)
            }
        </div>
        <button className="btn btn-primary mt-8 bg-[#009444] border-none" onClick={()=> setShowData(donationdatalist.length)}>See All</button>
       </div>
    );
};

export default DonationLists;
