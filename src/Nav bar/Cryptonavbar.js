import React, { useContext } from 'react';
import logo from '../images/logo.png';
import arrowicon from '../images/arrow_icon.png';
import './Nav.css';
import { Coincontext } from '../Context/Coincontext';
import { Link } from 'react-router-dom';

const Cryptonavbar = () => {

    const { setCurrency } = useContext(Coincontext);

    const currencyhandler = (e) => {
        switch (e.target.value) {
            case "usd": {
                setCurrency({ name: "usd", Symbol: "$" });
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", Symbol: "€" });
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", Symbol: "₹" });
                break;
            }
            default: {
                setCurrency({ name: "usd", Symbol: "$" });
                break;
            }
        }

    }

    return (
        <div className='navbar_home'>
            <div className='navbar'>
                <Link to='/'>
                    <img src={logo} className='nav_logo' />
                </Link>

                <ul>
                    <Link to='/'>
                        <li> Home</li>
                    </Link>
                    <li> Feactures </li>
                    <li> Pricing </li>
                    <li> Blog </li>
                </ul>
                <div className='nav-right'>
                    <select onChange={currencyhandler}>
                        <option value="usd"> USD </option>
                        <option value="eur"> EUR </option>
                        <option value="inr"> INR </option>
                    </select>
                    <button className='sign_up'>  Sign Up <img src={arrowicon} /></button>
                </div>
            </div>
        </div>
    )
}

export default Cryptonavbar
