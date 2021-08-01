import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <aside className="left-sidebar" data-sidebarbg="skin6" style={{ fontSize: '16px' }}>
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            {/* User Profile*/}
                            <li className="sidebar-item pt-2">
                                <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/admin" aria-expanded="false">
                                    <i className="far fa-clock" aria-hidden="true" />
                                    <span className="hide-menu">Tổng quan</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/admin/products" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                    <i className="fas fa-shopping-bag" aria-hidden="true" />
                                    <span className="hide-menu">Sản phẩm</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/admin/categories" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                    <i className=" fas fa-list-alt" aria-hidden="true" />
                                    <span className="hide-menu">Danh mục</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
            </aside>
        </div>
    )
}

export default Nav
