import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const Product = (props) => {
    const products = props.products;
    console.log(products);

    const [pageNumber, setPageNumber] = useState(0);

    const productsPerPage = 5;
    const pagesVisited = pageNumber * productsPerPage;
    const [filteredData,setFilteredData] = useState(products);

    const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage)
        .map((products, index) => {
            return (
                <tbody className="data-products-tbody">
                    <tr key="index">
                        <td>{index + 1}</td>
                        <td>{products.name}</td>
                        <td>{products.price}</td>
                        <td>{products.category}</td>
                        <td>{products.description}</td>
                        <td>
                            <img src={products.image} width="100" height="100" />
                        </td>
                        <td width="150">
                            <Link
                                to={`/admin/products/update/${products.id}`}
                                className="btn btn-success btn-sm"
                                style={{ fontSize: '15px', color: '#fff' }}>
                                Cập nhật
                            </Link>
                            <button
                                onClick={() => props.onRemoveProduct(products.id)}
                                style={{ marginLeft: '10px', fontSize: '15px', color: '#fff' }}
                                className="btn btn-danger btn-sm"
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            )
        })

    const pageCount = Math.ceil(products.length / productsPerPage); console.log(pageCount)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


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
                                {/* <form role="search" className="app-search d-none d-md-block me-3" style={{width:'20%', position:'relative',right:'7%'}}>
                                    <input type="text" placeholder="Search..." className="form-control mt-0"/>
                                    <a href className="active" style={{position:'absolute',right:'6%', top:'24%'}}>
                                        <i className="fa fa-search" />
                                    </a>
                                </form> */}
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
                <br></br>
                <div className="table-responsive" style={{ fontSize: '20px', margin: '0 auto' }}>
                    <table className="table">
                        <thead style={{ background: '#2f323e' }}>
                            <tr style={{ color: '#fff' }}>
                                <th scope="col" className="col-1">#</th>
                                <th scope="col-2" className="col-2">Tên sản phẩm</th>
                                <th scope="co-1" className="col-1">Giá sản phẩm</th>
                                <th scope="col" className="col-1">Danh mục</th>
                                <th scope="col" className="col-2">Mô tả</th>
                                <th scope="col" className="col-1">Ảnh</th>
                                <th scope="col" className="col-1">Hành động</th>
                            </tr>
                        </thead>
                        {displayProducts}

                        {/* <tbody>
                            {props.products.map((item, index) => (
                                <tr key="index">
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <img src={item.image} width="100" height="100" />
                                    </td>
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
                        </tbody> */}
                    </table>
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </div>
        </>
    )
}

export default Product
