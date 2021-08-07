import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory, Redirect } from "react-router-dom";
import { isAuthenticated, signOut } from '../../auth';
import { useLocation } from "react-router-dom";

const Screen = (props) => {
    const { pathname } = useLocation(); console.log(pathname)
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
        console.log(isAuthenticated);
    }, [pathname, isLogged]);
    return (
        <div className="screen-wrapper">
            <div className="container">
                <div className="welcome">
                    <h2>Xin chào ! </h2>
                    <h1>{isAuthenticated().user.name}</h1>
                </div>
                <div className="box-auth">
                    <div className="row">
                        <button className="box-admin col-6">
                            <a href="/admin">Trang quản trị</a>
                        </button>
                        <button className="box-website col-6">
                            <a href="/homepage">Trang chủ</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen
