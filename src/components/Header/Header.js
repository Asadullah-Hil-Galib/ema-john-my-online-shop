import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const activeStyleNavMenu ={
    borderBottom: '2px solid #e83a3b',
    paddingBottom: '0.4rem 0'
}
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink activeStyle={activeStyleNavMenu} to="/shop">Shop</NavLink>
                <NavLink activeStyle={activeStyleNavMenu} to="/review">Order Review</NavLink>
                <NavLink activeStyle={activeStyleNavMenu} to="/inventory">Manage Inventory</NavLink>
                {user.email && <span className="show-user-name">Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button  className="main-btn" onClick={logOut}>log out</button>
                        :
                        <NavLink activeStyle={activeStyleNavMenu}  to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;