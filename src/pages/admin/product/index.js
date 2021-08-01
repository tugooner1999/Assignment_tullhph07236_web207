import React from 'react';
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <>
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h1 className="page-title">Quản lý sản phẩm</h1>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><a href="#" className="fw-normal"></a></li>
                                </ol>
                                <Link
                                    to="/admin/products/add"
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Thêm sản phẩm
                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <div className="table-responsive" style={{ fontSize: '20px', margin: '0 auto' }}>
                    <table className="table table-striped table-sm ">
                        <thead>
                            <tr>
                                <th scope="col" className="col-0.5"></th>
                                <th scope="col" className="col-2">#</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Giá sản phẩm</th>
                                <th scope="col">Danh mục</th>
                                <th scope="col">Mô tả</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.products.map((item, index) => (
                                <tr key="index">
                                    <td></td>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td width="150">
                                        <Link
                                            to={`/admin/products/update/${item.id}`}
                                            className="btn btn-success btn-sm"
                                            style={{ fontSize: '15px', color: '#fff' }}>
                                            Cập nhật
                                    </Link>
                                        <button
                                            onClick={() => props.onRemoveProduct(item.id)}
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

export default Product
