import React from 'react'
import { Link } from "react-router-dom";

const User = (props) => {
    return (
        <>
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h1 className="page-title">Quản lý tài khoản</h1>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <div className="table-responsive col-lg-11" style={{ fontSize: '20px', margin: '0 auto' }}>
                    <table className="table table-striped table-sm ">
                        <thead style={{ background: '#2f323e' }}>
                            <tr style={{ color: '#fff' }}>
                                <th scope="col" className="col-1">#</th>
                                <th scope="col" className="col-2">Họ và tên</th>
                                <th scope="col" className="col-2">Email</th>
                                <th scope="col" className="col-2">Số điện thoại</th>
                                <th scope="col" className="col-3">Địa chỉ</th>
                                <th scope="col" className="col-1">Quyền</th>
                                <th scope="col" className="col-2">Hành động</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.users.map((item, index) => (
                                <tr key="index">
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    {item.id == 1 && (
                                        <td>Quản trị</td>
                                    )}
                                    {item.id != 1 && (
                                        <td>Thành viên</td>
                                    )}
                                    <td width="150">
                                        <button
                                            onClick={() => props.onRemoveUser(item.id)}
                                            style={{ marginLeft: '10px', fontSize: '15px', color: '#fff' }}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Xóa
                                </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default User
