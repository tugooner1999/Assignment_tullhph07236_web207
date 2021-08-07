import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-content">
                                <h1 className="breadcrumb-hrading">TRANG LIÊN HỆ</h1>
                                <ul className="breadcrumb-links">
                                    <li><Link to="/homepage">Trang chủ</Link></li>
                                    <li>Liên hệ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Area End */}
            {/* contact area start */}
            <div className="contact-area mtb-60px">
                <div className="container">
                    <div className="contact-map mb-10">
                        <div id="mapid">  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.523595028531!2d105.83626711540172!3d20.971638595100718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac505076f7e3%3A0xf8fc76416127fc20!2zMzcgxJDhuqFpIFThu6ssIMSQ4bqhaSBLaW0sIEhvw6BuZyBNYWksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1627900516716!5m2!1svi!2s" width={1320} height={500} style={{ border: 0 }} allowFullScreen loading="lazy" /></div>
                    </div>
                    <div className="custom-row-2">
                        <div className="col-lg-4 col-md-5">
                            <div className="contact-info-wrap">
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>+0367361426</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa fa-globe" />
                                    </div>
                                    <div className="contact-info-dec">
                                        <p><a href="#">urname@email.com</a></p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa fa-map-marker" />
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>Address goes here,</p>
                                        <p>street, Crossroad 123.</p>
                                    </div>
                                </div>
                                <div className="contact-social">
                                    <h3>Follow Us</h3>
                                    <div className="social-info">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="ion-social-facebook" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="ion-social-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="ion-social-youtube" /></a>
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
                        <div className="col-lg-8 col-md-7">
                            <div className="contact-form">
                                <div className="contact-title mb-30">
                                    <h2>Thông tin liên hệ</h2>
                                </div>
                                <form className="contact-form-style" id="contact-form" action="https://htmldemo.hasthemes.com/ecolife-preview/ecolife/assets/php/mail.php" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input name="name" placeholder="Họ và tên*" type="text" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input name="email" placeholder="Email*" type="email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input name="subject" placeholder="Tiêu đề*" type="text" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea name="message" placeholder="Nội dung*" defaultValue={""} />
                                            <button className="submit" type="submit">GỬI</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-messege" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
