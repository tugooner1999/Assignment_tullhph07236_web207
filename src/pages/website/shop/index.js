import React from 'react';
import { Link } from "react-router-dom";

const Shop = (props) => {
    return (
        <>
            {/* Breadcrumb Area start */}
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-content">
                                <h1 className="breadcrumb-hrading">Shop Page</h1>
                                <ul className="breadcrumb-links">
                                    <li><a href="index-2.html">Home</a></li>
                                    <li>Shop Grid</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Area End */}
            {/* Shop Category Area End */}
            <div className="shop-category-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            {/* Shop Top Area Start */}
                            <div className="shop-top-bar">
                                {/* Left Side start */}
                                <div className="shop-tab nav mb-res-sm-15">
                                    <a className="active" href="#shop-1" data-toggle="tab">
                                        <i className="fa fa-th show_grid" />
                                    </a>
                                    <a href="#shop-2" data-toggle="tab">
                                        <i className="fa fa-list-ul" />
                                    </a>
                                    <p>There Are 17 Products.</p>
                                </div>
                                {/* Left Side End */}
                                {/* Right Side Start */}
                                <div className="select-shoing-wrap">
                                    <div className="shot-product">
                                        <p>Sort By:</p>
                                    </div>
                                    <div className="shop-select">
                                        <select>
                                            <option value>Sort by newness</option>
                                            <option value>A to Z</option>
                                            <option value> Z to A</option>
                                            <option value>In stock</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Right Side End */}
                            </div>
                            {/* Shop Top Area End */}
                            {/* Shop Bottom Area Start */}
                            <div className="shop-bottom-area mt-35">
                                {/* Shop Tab Content Start */}
                                <div className="tab-content jump">
                                    {/* Tab One Start */}
                                    <div id="shop-1" className="tab-pane active">
                                        <div className="row">
                                            {props.products.map((item) => (
                                                <div className="col-xl-3 col-md-4 col-sm-6">
                                                    <article className="list-product">
                                                        <div className="img-block">
                                                            <a href={`/homepage/single-product/${item.id}`} className="thumbnail">
                                                                <img className="first-img" src={item.image} alt="" />
                                                            </a>
                                                            <div className="quick-view">
                                                                <a className="quick_view" href={`/homepage/single-product/${item.id}`} data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                                    <i className="ion-ios-search-strong" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <ul className="product-flag">
                                                            <li className="new">New</li>
                                                        </ul>
                                                        <div className="product-decs">
                                                            <a className="inner-link" href="shop-4-column.html"><span>{item.category}</span></a>
                                                            <h2><a href="single-product.html" className="product-link">{item.name}</a></h2>
                                                            <div className="rating-product">
                                                                <i className="ion-android-star" />
                                                                <i className="ion-android-star" />
                                                                <i className="ion-android-star" />
                                                                <i className="ion-android-star" />
                                                                <i className="ion-android-star" />
                                                            </div>
                                                            <div className="pricing-meta">
                                                                <ul>
                                                                    <li className="current-price">{item.price} đ</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-link">
                                                            <ul>
                                                                <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                                                <li>
                                                                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </article>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    {/* Tab One End */}
                                </div>
                                {/* Shop Tab Content End */}
                                {/*  Pagination Area Start */}
                                <div className="pro-pagination-style text-center">
                                    <ul>
                                        <li>
                                            <a className="prev" href="#"><i className="ion-ios-arrow-left" /></a>
                                        </li>
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li>
                                            <a className="next" href="#"><i className="ion-ios-arrow-right" /></a>
                                        </li>
                                    </ul>
                                </div>
                                {/*  Pagination Area End */}
                            </div>
                            {/* Shop Bottom Area End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Shop Category Area End */}
        </>
    )
}

export default Shop
