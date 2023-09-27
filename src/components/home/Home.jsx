
import { useState, useEffect } from 'react';
import '../../App.css'
import heroBg from '../../assets/Rectangle 4281.png'
// import Donations from '../donations/Donations';
import Donation from '../donations/Donation';


const Home = () => {
    const [donationData, setDonationData] = useState([]);
    const [desplayDonation, setDisplayDonation] = useState([])
    const [inputValue, setInputValue] = useState('');
    // console.log(inputValue)
    const searcHandle = () =>{
   
        if(inputValue == "health"){
            const donations =  donationData.filter(donation => donation.category == "Health")
            setDisplayDonation(donations)
        }else if(inputValue == "education"){
            const donations = donationData.filter(donation => donation.category == "Education")
            setDisplayDonation(donations)
        }else if(inputValue == "clothing"){
            const donations = donationData.filter(donation => donation.category == "Clothing")
            setDisplayDonation(donations)
        }else if(inputValue == "food"){
            const donations = donationData.filter(donation => donation.category == "Food")
            setDisplayDonation(donations)
        }
    }




    useEffect(() => {
        fetch('donationData.json')
            .then(res => res.json())
            .then(data => {setDonationData(data)
                setDisplayDonation(data)
            })

            
    }, [])
    const homeBgstyles = {
        header: {
          backgroundImage: `url(${heroBg})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }
      }
    return (
        <div>
            <div className="home">
                <div className="hero" style={homeBgstyles.header} >
                    <div className=' pt-10 md:pt-48 ' style={homeBgstyles.content}>
                    <div className='heroContent text-center md:px-8'>
                        <h1 className=' text-black text-5xl font-bold my-10'>I Grow By Helping People In Need</h1>
                        <span className='flex flex-col md:flex-row justify-center items-center'>
                            <input className='border w-full  md:w-1/3 py-3 rounded-md' id='search' type='text' onChange={ input => setInputValue(input.target.value)} />
                            <button onClick={searcHandle} className='btn btn-primary bg-[#FF444A] rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md outline-none border-none px-4 text-base font-bold'>search</button>
                        </span>
                    </div>
                    </div>
                </div>   
                <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                    {
                        desplayDonation.map(donation => <Donation donation={donation} key={donation.id}></Donation>)
                        //  donationData.map(donation => <Donation donation={donation} key={donation.id}></Donation>)
                    }
                </div>
            </div>
           
            </div>
        </div>
    );
};

export default Home;

// <Donations searchValue = {inputValue} searcHandle = {searcHandle}></Donations>