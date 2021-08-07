import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { isAuthenticated, signOut } from '../../auth';
import { useLocation } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const { pathname } = useLocation(); console.log(pathname)
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
        console.log(isAuthenticated);
    }, [pathname, isLogged]);
    return (
        <>
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin6">
                        {/* ============================================================== */}
                        {/* Logo */}
                        {/* ============================================================== */}
                        <a className="navbar-brand" href="dashboard.html">
                            {/* Logo icon */}
                            <b className="logo-icon">
                                {/* Dark Logo icon */}
                                <img src="../assets/adminLay/images/logo-icon.png" alt="homepage" />
                            </b>
                            {/*End Logo icon */}
                            {/* Logo text */}
                            <span className="logo-text">
                                {/* dark Logo text */}
                                <img src="../assets/adminLay/images/logo-text.png" alt="homepage" />
                            </span>
                        </a>
                        {/* ============================================================== */}
                        {/* End Logo */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* toggle and nav items */}
                        {/* ============================================================== */}
                        <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
                    </div>
                    {/* ============================================================== */}
                    {/* End Logo */}
                    {/* ============================================================== */}
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        {/* ============================================================== */}
                        {/* Right side toggle and nav items */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            {/* ============================================================== */}
                            {/* Search */}
                            {/* ============================================================== */}
                            <li className=" in">
                                <form role="search" className="app-search d-none d-md-block me-3">
                                    <input type="text" placeholder="Search..." className="form-control mt-0" />
                                    <a href className="active">
                                        <i className="fa fa-search" />
                                    </a>
                                </form>
                            </li>
                            {!isLogged && (
                                <>
                                    <div className="navbar-nav" style={{ borderRight: '1px solid #444' }}>
                                        <div className="nav-item text-nowrap">
                                            <Link className="nav-link px-3" to="/signup" activeClassName="active" exact>Đăng ký</Link>
                                        </div>
                                    </div>
                                    <div className="navbar-nav" style={{ borderRight: '1px solid #444' }}>
                                        <div className="nav-item text-nowrap">
                                            <Link className="nav-link px-3" to="/signin" activeClassName="active" exact>Đăng nhập</Link>
                                        </div>
                                    </div>
                                </>
                            )}

                            {isLogged && (
                                <>
                                    <div className="navbar-nav">
                                        <div className="nav-item text-nowrap">
                                            <a className="nav-link px-3" onClick={() => signOut(() => {
                                                setIsLogged(false);
                                                history.push("/signin");
                                            })} href="#">Đăng xuất</a>
                                        </div>
                                    </div>
                                    <div className="navbar-nav">
                                        <div className="nav-item text-nowrap">
                                            <a className="nav-link px-3" href="/homepage">Trang chủ</a>
                                        </div>
                                    </div>
                                    <li>
                                        <a className="profile-pic" href="#">
                                            {isAuthenticated().user.name}</a>
                                    </li>
                                </>
                            )}
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
