import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Donation = ({ donation }) => {
    const { id, picture, title, category, card_bg, card_text_color, category_bg } = donation;
//    console.log(id)
    return (
        <Link to={`/donations/${id}`}>
        <div className="card shadow-xl mx-4 md:mx-0" style={{background : card_bg}}>
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body p-4">
                <div className="card-actions justify-start">
                    <div className="badge badge-outline text-sm font-medium" style={{color: card_text_color, background: category_bg}}>{category}</div>
                </div>
                <h2 className="text-xl font-semibold" style={{color: card_text_color}}>{title}</h2>
            </div>
        </div>
        </Link>
    );

};

export default Donation;