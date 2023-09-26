const getDonationData = () =>{
    const donationData = localStorage.getItem('donation-data');
    if(donationData){
        return JSON.parse(donationData)
    }
    return [];
}

const storeDonationData = (id) =>{
   const storedData = getDonationData();
   const isDuplicate = storedData.find(donationId => donationId == id);
   if(!isDuplicate){
    storedData.push(id)
    localStorage.setItem('donation-data', JSON.stringify(storedData))
   }
}

export {getDonationData,storeDonationData}; 