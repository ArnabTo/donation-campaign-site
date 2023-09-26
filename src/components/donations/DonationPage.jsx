import { useLoaderData, useParams } from "react-router-dom";
import { storeDonationData } from "../../utility/localStorage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationPage = () => {
    const donations = useLoaderData();
    const { donationid } = useParams();
    const idInt = parseInt(donationid)
    const donation = donations.find(donation => idInt == donation.id);
    
    const donationPageBgstyles = {
        header: {
            backgroundImage: `url(${donation.picture})`,
            height: '60vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '10px'
        },

        content: {
            position: 'relative',
            top: '22.5rem',
            height: '20%',
            width: '100%',
            backgroundColor: 'rgba(10, 10, 11, 0.50)',
            marginBottom: '1rem',
            borderRadius: '0 0px 10px 10px'
        }

    }
    const handleBtn = () => {
        storeDonationData(idInt);
        toast.success("Thank You For Your Donation", {
            icon: "🚀"
          });
    }
    // console.log(donation)
    return (
        <div className="max-w-6xl m-auto px-4 mt-8">
            <div style={donationPageBgstyles.header}>
                <div style={donationPageBgstyles.content} className="md:top-[26.8rem] lg:top-[27.5rem]">
                    <button onClick={handleBtn} className="btn btn-ghost relative top-4 left-4 py-4 px-7 bg-[#FF444A] rounded-md text-white font-semibold">Donate ${donation.price}</button>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-4xl font-bold text-black mb-6">{donation.title}</h1>
                <p className="text-[#0b0b0bb3] text-base font-normal leading-7">{donation.description}</p>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default DonationPage;


