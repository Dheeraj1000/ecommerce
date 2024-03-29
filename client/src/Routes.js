import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Switch, Route,} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute'
import userDashboard from './user/userDashboard'
import AdminRoute from './auth/AdminRoute'
import adminDashboard from './user/adminDashboard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Shop from './core/Shop'
import Product from './core/Product'
import Cart from './core/Cart'


const Routes = () => {
  return (
    <BrowserRouter>
       
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>
            <PrivateRoute path="/user/dashboard" exact component={userDashboard} />
            <AdminRoute path="/admin/dashboard" exact component={adminDashboard}/>
            <AdminRoute path="/create/category" exact component={AddCategory}/>
            <AdminRoute path="/create/product" exact component={AddProduct}/>
            <Route path="/product/:productId" exact component={Product}/>
            <Route path="/cart" exact component={Cart}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes