import React from 'react'
import Header from "../components/admin/header";
import Nav from "../components/admin/nav";


const LayoutAdmin = (props) => {
    console.log(props);
    return (
        <>
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <Header />
                <Nav />
                <br></br>
                {props.children}
            </div>
        </>
    )
}

export default LayoutAdmin
