import React from 'react';
import { Link } from "react-router-dom";
// import { FiPlusCircle } from "react-icons/fi";
const Header = () => {
    return (
        <header className="App-header">
            <Link to="/" className="">
                 <h1>Kinkaga</h1>
            </Link>

            {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
    );
}

export default Header;
