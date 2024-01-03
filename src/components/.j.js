import React from 'react'
import { useState } from "react";
import logo from '../images/logo.png';
import './NavbarMain.css'
import '../configure.css'
import { Link } from 'react-router-dom';

const FuncContent = () => {
    const[index,setIndex]=useState(0);
    console.log(index);

  return (
    <div className="text-white " >
        <div className="d-flex flex-row px-5 pt-0 mb-0">
            <div className='col-md-6 d-flex align-items-start'>
                <a className="navbar-brand mx-4" href="#"><img src={logo} alt='logo' className='logo-img' /></a>
            </div>
            <div className='d-flex flex-row col-md-6 justify-content-end pt-3'>
            <div
                    className={`mx-2 clickable ${index === 0 ? 'active' : ''}`}
                    onClick={() => { setIndex(0) }}
                >
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                </div>
                <div
                    className={`mx-2 clickable ${index === 5 ? 'active' : ''}`}
                    onClick={() => { setIndex(5) }}
                >
                    Details
                </div>
                <div
                    className={`mx-2 clickable ${index === 1 ? 'active' : ''}`}
                    onClick={() => { setIndex(1) }}
                >
                    <Link to="/team" style={{ textDecoration: 'none', color: 'inherit' }}>Team</Link>
                </div>
                <div
                    className={`mx-2 clickable ${index === 2 ? 'active' : ''}`}
                    onClick={() => { setIndex(2) }}
                >
                    <Link to="/achivements" style={{ textDecoration: 'none', color: 'inherit' }}>Achivements</Link>
                </div>
                <div
                    className={`mx-2 clickable ${index === 3 ? 'active' : ''}`}
                    onClick={() => { setIndex(3) }}
                >
                    Outreach
                </div>
                <div
                    className={`mx-2 clickable ${index === 4 ? 'active' : ''}`}
                    onClick={() => { setIndex(4) }}
                >
                    <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                </div>
            </div>

        </div>


    </div>
  )
}

export default FuncContent;