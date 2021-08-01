import React from 'react';
import { Link } from "react-router-dom";
const Category = (props) => {
    console.log(props);
    return (
        <>
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h1 className="page-title">Quản lý danh mục</h1>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><a href="#" className="fw-normal"></a></li>
                                </ol>
                                <Link
                                    to="/admin/categories/add"
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Thêm danh mục
                    </Link>
                            </div>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <div className="table-responsive col-lg-8" style={{ fontSize: '20px', margin: '0 auto' }}>
                    <table className="table table-striped table-sm ">
                        <thead>
                            <tr>
                                <th scope="col" className="col-1"></th>
                                <th scope="col" className="col-2">#</th>
                                <th scope="col">Tên danh mục</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.categories.map((item, index) => (
                                <tr key="index">
                                    <td></td>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td width="150">
                                        <Link
                                            to={`/admin/categories/update/${item.id}`}
                                            className="btn btn-success btn-sm"
                                            style={{ fontSize: '15px', color: '#fff' }}>
                                            Cập nhật
                                        </Link>
                                        <button
                                            onClick={() => props.onRemoveCate(item.id)}
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

export default Category
