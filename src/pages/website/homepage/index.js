import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { getAllProduct, getDetailPro } from '../../../api/productAPI';

const Homapge = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await getAllProduct(); console.log(data);
                setProducts(data);
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, []);

    return (
        <div>
            {/* Slider Arae Start */}
            <div className="slider-area">
                <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
                    {/* Slider Single Item Start */}
                    <div className="slider-height-10 d-flex align-items-start justify-content-start bg-img" style={{ backgroundImage: 'url(../assets/website/images/slider-image/sample-18.jpg)' }}>
                        <div className="container">
                            <div className="slider-content-5 slider-animated-1 text-left">
                                <span className="animated">OFFICIAL Nedmi NOTE 5</span>
                                <h1 className="animated">
                                    <strong> Nedmi NOTE 5 PRO </strong><br />
                    India’s Camera Beast
                  </h1>
                                <p className="animated">The New Super Powerful Note Pre-Oder Starts From 2PM</p>
                                <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    {/* Slider Single Item End */}
                    {/* Slider Single Item Start */}
                    <div className="slider-height-10 d-flex align-items-start justify-content-start bg-img" style={{ backgroundImage: 'url(../assets/website/images/slider-image/sample-19.jpg)' }}>
                        <div className="container">
                            <div className="slider-content-5 slider-animated-1 text-left">
                                <span className="animated">EXPLORE MORE</span>
                                <h1 className="animated">
                                    <strong>THE BIG OFFER</strong><br />
                    Extra 30% Off
                  </h1>
                                <p className="animated">On Select Electronics</p>
                                <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    {/* Slider Single Item End */}
                </div>
            </div>
            {/* Slider Arae End */}
            {/* Static Area Start */}
            <section className="static-area home-10">
                <div className="container">
                    <div className="static-area-wrap">
                        <div className="row">
                            {/* Static Single Item Start */}
                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                                    <img src="../assets/website/images/icons/static-icons-1.png" alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>Free Shipping</h4>
                                        <p>On all orders over $75.00</p>
                                    </div>
                                </div>
                            </div>
                            {/* Static Single Item End */}
                            {/* Static Single Item Start */}
                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
                                    <img src="../assets/website/images/icons/static-icons-2.png" alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>Free Returns</h4>
                                        <p>Returns are free within 9 days</p>
                                    </div>
                                </div>
                            </div>
                            {/* Static Single Item End */}
                            {/* Static Single Item Start */}
                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
                                    <img src="../assets/website/images/icons/static-icons-3.png" alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>100% Payment Secure</h4>
                                        <p>Your payment are safe with us.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Static Single Item End */}
                            {/* Static Single Item Start */}
                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
                                    <img src="../assets/website/images/icons/static-icons-4.png" alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>Support 24/7</h4>
                                        <p>Contact us 24 hours a day</p>
                                    </div>
                                </div>
                            </div>
                            {/* Static Single Item End */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Static Area End */}
            {/* Banner Area Start */}
            <div className="banner-3-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="banner-wrapper mb-30px">
                                <a href="shop-4-column.html"><img src="../assets/website/images/banner-image/24.jpg" alt="" /></a>
                            </div>
                            <div className="banner-wrapper mb-res-sm-30">
                                <a href="shop-4-column.html"><img src="../assets/website/images/banner-image/25.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30">
                            <div className="banner-wrapper">
                                <a href="shop-4-column.html"><img src="../assets/website/images/banner-image/23.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Area End */}
            {/* Best Sells Area Start */}
            <section className="best-sells-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h2>Best Sellers</h2>
                                <p>Add bestselling products to weekly line up</p>
                            </div>
                            {/* Section Title Start */}
                        </div>
                    </div>
                    {/* Best Sell Slider Carousel Start */}

            {/* Shop Category Area End */}
            <div className="shop-category-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
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
                </div>
            </section>
            {/* Best Sell Area End */}
            {/* Category Area Start */}
            <section className="categorie-area mb-60px mt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Section Title */}
                            <div className="section-title mt-res-sx-30px mt-res-md-30px">
                                <h2>Popular Categories</h2>
                                <p>Add Popular Categories to weekly line up</p>
                            </div>
                            {/* Section Title */}
                        </div>
                    </div>
                    {/* Category Slider Start */}
                    <div className="category-slider owl-carousel owl-nav-style">
                        {/* Single item */}
                        <div className="category-item">
                            <div className="category-list mb-30px">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Fresh Vegetables</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                            <div className="category-list">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Fresh Salad &amp; Dips</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                        </div>
                        {/* Single item */}
                        <div className="category-item">
                            <div className="category-list mb-30px">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Fresh Fruit</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                            <div className="category-list">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-4.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Baking &amp; Cooking</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                        </div>
                        {/* Single item */}
                        <div className="category-item">
                            <div className="category-list mb-30px">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-5.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Fresh Cream &amp; Custard</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                            <div className="category-list">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-6.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Milk, Butter &amp; Eggs</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                        </div>
                        {/* Single item */}
                        <div className="category-item">
                            <div className="category-list mb-30px">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-7.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Spreads &amp; Margarine</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                            <div className="category-list">
                                <div className="category-thumb">
                                    <a href="shop-4-column.html">
                                        <img src="../assets/website/images/product-image/electronic/thumb-8.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="desc-listcategoreis">
                                    <div className="name_categories">
                                        <h4>Fresh Vegetables</h4>
                                    </div>
                                    <span className="number_product">17 Products</span>
                                    <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                                </div>
                            </div>
                        </div>
                        {/* Single item */}
                    </div>
                </div>
            </section>
            {/* Category Area End  */}
            {/* Banner Area 2 Start */}
            <div className="banner-area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-inner">
                                <a href="shop-4-column.html"><img src="../assets/website/images/banner-image/28.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Area 2 End */}
            {/* Brand area start */}
            <div className="brand-area">
                <div className="container">
                    <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
                        <div className="brand-slider-item">
                            <a href="#"><img src="../assets/website/images/brand-logo/1.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                            <a href="#"><img src="../assets/website/images/brand-logo/2.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                            <a href="#"><img src="../assets/website/images/brand-logo/3.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                            <a href="#"><img src="../assets/website/images/brand-logo/4.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                            <a href="#"><img src="../assets/website/images/brand-logo/5.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                            <a href="#"><img src="../assets/website/images/brand-logo/1.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                            <a href="#"><img src="../assets/website/images/brand-logo/2.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Brand area end */}
        </div>
    )
}

export default Homapge
