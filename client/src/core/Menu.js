import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'
import { itemTotal } from "./cartHelpers";


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({history}) => {
  return (
    <div>
        <ul className='nav nav-tabs bg-primary'>
            <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/')} to='/' onClick={() => {window.location.href="/"}}>Home</Link>
            </li>

            <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/shop')} to='/shop' onClick={() => {window.location.href="/shop"}}>Shop</Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                    onClick={() => {window.location.href="/cart"}}
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            
            {isAuthenticated() && isAuthenticated().user?.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                        onClick={() => {window.location.href="/user/dashboard"}}
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user?.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                        onClick={() => {window.location.href="/admin/dashboard"}}
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                 <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/signin')} to='/signin' onClick={() => {window.location.href="/signin"}}>Signin</Link>
                 </li>
                <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/signup')} to='/signup' onClick={() => {window.location.href="/signup"}}>Signup</Link>
                </li>
            </Fragment>
            )}
           
        

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push('/');
                                window.location.href="/";
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            )}

        </ul>
    </div>
  )
}

export default withRouter(Menu)