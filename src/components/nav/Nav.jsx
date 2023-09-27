import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png';
const linkStyle = { 
    background:'transparent',
    color:'black',
}
const Nav = () => {
    return (
        <div className="navbar my-4 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/"  style={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/donationslist" style={linkStyle}>Donation</NavLink></li>
            <li><NavLink to="/statistic" style={linkStyle}>Statistic</NavLink></li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl"><img className="w-1/2 md:w-full" src={logo}/></NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/" style={linkStyle} className="mx-2 text-lg font-normal hover:text-[#FF444A] hover:underline">Home</NavLink></li>
            <li tabIndex={0}><NavLink  to="/donationslist" style={linkStyle}  className="mx-2 text-lg font-normal hover:text-[#FF444A] hover:underline">Donation</NavLink></li>
            <li><NavLink  style={linkStyle} to="/statistic"  className="mx-2 text-lg font-normal hover:text-[#FF444A] hover:underline">Statistic</NavLink></li>
          </ul>
        </div>
      </div>
    );
};

export default Nav;