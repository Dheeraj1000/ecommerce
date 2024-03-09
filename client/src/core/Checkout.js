import React, { useState, useEffect } from 'react';
import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';

const Checkout = ({ products, setRun = f => f, run = undefined }) => {

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    return <div>
        <h2>Total : ${getTotal()}</h2>

        {isAuthenticated() ? (
            <button className='btn btn-success'>Checkout</button>
        ):
        (
            <Link to='/signin' onClick={() => {window.location.href="/signin"}}>
                <button className='btn btn-primary'>
                    Sign in to checkout
                </button>
            </Link>
        )
    
    }
    </div>
}

export default Checkout;