import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
// import { isAuthenticated, signOut } from '../../auth';
import { useLocation } from "react-router-dom";

// admin
import LayoutAdmin from './layouts/layoutAdmin';
import DashBoard from "./pages/admin/dashboard";
import Category from "./pages/admin/category/index";
import AddCategory from "./pages/admin/category/addCategory";
import UpdateCategory from "./pages/admin/category/editCategory";
import Product from './pages/admin/product';
import AddProduct from './pages/admin/product/addProduct';
import UpdateProduct from './pages/admin/product/editProduct';

// website
import LayoutMain from './layouts/layoutMain';
import Homapge from './pages/website/homepage';
import Shop from './pages/website/shop';
import Contact from './pages/website/contact';
import SingleProduct from './pages/website/single-product';
import User from './pages/admin/user';
import Signup from './pages/auth/signup';
import Signin from './pages/auth/signin';
import Screen from './pages/auth/screen';
import PrivateAdmin from './auth/privateAdmin';

const Routes = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {/* admin */}
                    <PrivateAdmin exact path="/admin/:path?/:path?/:path?">
                        <LayoutAdmin>
                            <Switch>
                                <PrivateAdmin exact path="/admin">
                                    <DashBoard />
                                </PrivateAdmin>
                                <PrivateAdmin exact path="/admin/categories">
                                    <Category {...props} />
                                </PrivateAdmin>
                                <PrivateAdmin exact path="/admin/categories/add">
                                    <AddCategory {...props} />
                                </PrivateAdmin>
                                <PrivateAdmin exact path="/admin/categories/update/:id">
                                    <UpdateCategory {...props} />
                                </PrivateAdmin>

                                <PrivateAdmin exact path="/admin/products">
                                    <Product {...props} />
                                </PrivateAdmin>
                                <PrivateAdmin exact path="/admin/products/add">
                                    <AddProduct {...props} />
                                </PrivateAdmin>
                                <PrivateAdmin exact path="/admin/products/update/:id">
                                    <UpdateProduct {...props} />
                                </PrivateAdmin>

                                <PrivateAdmin exact path="/admin/users">
                                    <User {...props} />
                                </PrivateAdmin>
                            </Switch>
                        </LayoutAdmin>
                    </PrivateAdmin>

                    {/* website */}
                    <Route exact path="/homepage/:path?/:path?/:path?">
                        <LayoutMain>
                            <Switch> 
                                <Route exact path="/homepage">
                                    <Homapge {...props} />
                                </Route>
                                <Route exact path="/homepage/shop">
                                    <Shop {...props}/>
                                </Route>
                                <Route exact path="/homepage/single-product/:id">
                                    <SingleProduct {...props}/>
                                </Route>
                                <Route exact path="/homepage/contact">
                                    <Contact />
                                </Route>
                            </Switch>
                        </LayoutMain>
                    </Route>


                     {/* signin-signup */}
                     <Route>
                        <Switch>
                            <Route exact path="/signup">
                                <Signup />
                            </Route>
                            <Route exact path="/signin">
                                <Signin />
                            </Route>
                            <Route exact path="/screen">
                                <Screen />
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Routes
