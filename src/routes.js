import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutAdmin from './layouts/layoutAdmin';

// admin
import DashBoard from "./pages/admin/dashboard";
import Category from "./pages/admin/category/index";
import AddCategory from "./pages/admin/category/addCategory";
import UpdateCategory from "./pages/admin/category/editCategory";
import Product from './pages/admin/product';
import AddProduct from './pages/admin/product/addProduct';
import UpdateProduct from './pages/admin/product/editProduct';

const Routes = (props) => {
    return (
        <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/admin/:path?/:path?/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route exact path="/admin">
                                <DashBoard />
                            </Route>
                            <Route exact path="/admin/categories">
                                <Category {...props} />
                            </Route>
                            <Route exact path="/admin/categories/add">
                                <AddCategory {...props} />
                            </Route>
                            <Route exact path="/admin/categories/update/:id">
                                <UpdateCategory {...props} />
                            </Route>

                            <Route exact path="/admin/products">
                                <Product {...props} />
                            </Route>
                            <Route exact path="/admin/products/add">
                                <AddProduct {...props} />
                            </Route>
                            <Route exact path="/admin/products/update/:id">
                                <UpdateProduct {...props} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
            </Switch>
        </BrowserRouter>
            
        </div>
    )
}

export default Routes
