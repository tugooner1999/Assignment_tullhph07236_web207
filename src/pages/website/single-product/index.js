import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDetailPro } from "../../../api/productAPI";

const SingleProduct = (props) => {
    const { register } = useForm();
    const [products, setProducts] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getDetailPro(id);
            setProducts(data);
        }
        getProduct();
    }, [])
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-content">
                                <h1 className="breadcrumb-hrading">Single Product Page</h1>
                                <ul className="breadcrumb-links">
                                    <li><a href="index-2.html">Home</a></li>
                                    <li>Single product Tab 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Area End */}
            {/* Shop details Area start */}
            <section className="product-details-area mtb-60px">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-details-img product-details-tab product-details-tab-2 product-details-tab-3">
                                <div id="gallery" className="product-dec-slider-3">
                                    <a className="active" data-image="../assets/website/images/product-image/organic/product-11.jpg" data-zoom-image="../assets/website/images/product-image/organic/zoom/1.jpg">
                                        <img src="../assets/website/images/product-image/organic/product-11.jpg" alt="" />
                                    </a>
                                    <a data-image="../assets/website/images/product-image/organic/product-9.jpg" data-zoom-image="../assets/website/images/product-image/organic/zoom/2.jpg">
                                        <img src="../assets/website/images/product-image/organic/product-9.jpg" alt="" />
                                    </a>
                                    <a data-image="../assets/website/images/product-image/organic/product-20.jpg" data-zoom-image="../assets/website/images/product-image/organic/zoom/3.jpg">
                                        <img src="../assets/website/images/product-image/organic/product-20.jpg" alt="" />
                                    </a>
                                    <a data-image="../assets/website/images/product-image/organic/product-19.jpg" data-zoom-image="../assets/website/images/product-image/organic/zoom/4.jpg">
                                        <img src="../assets/website/images/product-image/organic/product-19.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="zoompro-wrap zoompro-2">
                                    <div className="zoompro-border zoompro-span">
                                        <img className="zoompro" src={products.image} data-zoom-image="../assets/website/images/product-image/organic/zoom/1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-details-content">
                                <h2>{products.name}</h2>
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
                                        <li style={{fontSize:'25px'}} className="current-price">{products.price} đ</li>
                                    </ul>
                                </div>
                                <p>Mô tả: {products.description}</p>
                                <div className="pro-details-quality mt-0px">
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
            </section>
        </>
    )
}

export default SingleProduct
