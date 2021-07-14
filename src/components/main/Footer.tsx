import React from 'react';
import Link from "next/link";
import {aboutPage, contactUsPage, discoverPage, homePage, locationsPage} from "../../../data/main";

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container py-3">
                <div className="row py-5">
                    <div className="col-md-6">
                        <h3 className="mb-5">About</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequuntur debitis
                            eos est et inventore ipsam minima minus molestias quae quasi quod recusandae reprehenderit
                            repudiandae tempore tenetur, vero voluptates!
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h3 className="mb-5">Quick Links</h3>
                        <p>
                            <Link href={homePage.href}>
                                <a className="text-white hover-text-primary">{homePage.label}</a>
                            </Link>
                        </p>
                        <p>
                            <Link href={aboutPage.href}>
                                <a className="text-white hover-text-primary">{aboutPage.label}</a>
                            </Link>
                        </p>
                        <p>
                            <Link href={discoverPage.href}>
                                <a className="text-white hover-text-primary">{discoverPage.label}</a>
                            </Link>
                        </p>
                        <p>
                            <Link href={locationsPage.href}>
                                <a className="text-white hover-text-primary">{locationsPage.label}</a>
                            </Link>
                        </p>
                        <p>
                            <Link href={contactUsPage.href}>
                                <a className="text-white hover-text-primary">{contactUsPage.label}</a>
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h3 className="mb-5">Contact Details</h3>
                        <p>
                            Tel: <a href="tel:070000000">0798 765 432</a>
                        </p>
                        <p>
                            Email: <a href="mailto:info@bnb.com">info@bnb.com</a>
                        </p>
                        <p className="mt-4">
                            P.O Box 90205, <br/>
                            Nairobi, Kenya.
                        </p>
                    </div>
                </div>
                <hr/>
                <p className="text-center">BNB &copy; {new Date().getFullYear()}. Design by Pascal Njue</p>
            </div>
        </footer>
    );
};

export default Footer;