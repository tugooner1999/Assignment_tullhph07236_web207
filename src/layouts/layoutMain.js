import React from 'react'
import Footer from '../components/website/footer';
import Header from '../components/website/header';

const LayoutMain = (props) => {
    return (
        <>
            <div id="main">
                <Header {...props} />
                {props.children}
                <Footer />
            </div>

            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 col-xs-12">
                                    <div className="tab-content quickview-big-img">
                                        <div id="pro-1" className="tab-pane fade show active">
                                            <img src="assets/images/product-image/electronic/1.jpg" alt="" />
                                        </div>
                                        <div id="pro-2" className="tab-pane fade">
                                            <img src="assets/images/product-image/electronic/2.jpg" alt="" />
                                        </div>
                                        <div id="pro-3" className="tab-pane fade">
                                            <img src="assets/images/product-image/electronic/3.jpg" alt="" />
                                        </div>
                                        <div id="pro-4" className="tab-pane fade">
                                            <img src="assets/images/product-image/electronic/4.jpg" alt="" />
                                        </div>
                                    </div>
                                    {/* Thumbnail Large Image End */}
                                    {/* Thumbnail Image End */}
                                    <div className="quickview-wrap mt-15">
                                        <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                                            <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/electronic/1.jpg" alt="" /></a>
                                            <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/electronic/2.jpg" alt="" /></a>
                                            <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/electronic/3.jpg" alt="" /></a>
                                            <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/electronic/4.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12">
                                    <div className="product-details-content quickview-content">
                                        <h2>Originals Kaval Windbr</h2>
                                        <p className="reference">Reference:<span> demo_17</span></p>
                                        <div className="pro-details-rating-wrap">
                                            <div className="rating-product">
                                                <i className="ion-android-star" />
                                                <i className="ion-android-star" />
                                                <i className="ion-android-star" />
                                                <i className="ion-android-star" />
                                                <i className="ion-android-star" />
                                            </div>
                                            <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
                                        </div>
                                        <div className="pricing-meta">
                                            <ul>
                                                <li className="old-price not-cut">€18.90</li>
                                            </ul>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                        <div className="pro-details-size-color">
                                            <div className="pro-details-color-wrap">
                                                <span>Color</span>
                                                <div className="pro-details-color-content">
                                                    <ul>
                                                        <li className="blue" />
                                                        <li className="maroon active" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-details-quality">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                                            </div>
                                            <div className="pro-details-cart btn-hover">
                                                <a href="#"> + Add To Cart</a>
                                            </div>
                                        </div>
                                        <div className="pro-details-wish-com">
                                            <div className="pro-details-wishlist">
                                                <a href="#"><i className="ion-android-favorite-outline" />Add to wishlist</a>
                                            </div>
                                            <div className="pro-details-compare">
                                                <a href="#"><i className="ion-ios-shuffle-strong" />Add to compare</a>
                                            </div>
                                        </div>
                                        <div className="pro-details-social-info">
                                            <span>Share</span>
                                            <div className="social-info">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i className="ion-social-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="ion-social-twitter" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="ion-social-google" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="ion-social-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutMain
