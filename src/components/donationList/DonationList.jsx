import { Link } from "react-router-dom";

const DonationList = ({ donationlist }) => {

   const { id, picture, title, price, category, category_bg, card_bg, text_button_bg, card_text_color } = donationlist;
    return (
        <div className="card card-side shadow-xl" style={{backgroundColor: card_bg}}>
            <div><img className="h-full rounded-tl-8 rounded-bl-0 rounded-tr-0" src={picture} alt="Movie" /></div>
            <div className="card-body p-4">
                <div className="card-actions justify-start">
                    <div className="badge badge-outline text-sm font-normal" style={{backgroundColor:category_bg, color: card_text_color}}>{category}</div>
                </div>
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <p className="text-base font-semibold" style={{color:card_text_color}}>${price}</p>
                <div className="card-actions justify-start">
                   <Link to={`/donations/${id}`}><button className="btn btn-ghost py-2 text-white" style={{backgroundColor: card_text_color}}>View Details</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default DonationList;