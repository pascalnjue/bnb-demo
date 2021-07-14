import React from 'react';
import NavLink from "next/link";
import {discoverPage, homePage} from "../../../data/main";

const Navbar = () => {
    const toggleAccountDropdown = async () => {
        const bootstrap = await import("bootstrap");
        const dropdownElement = document.getElementById("navAccountDropdown") ?? '';
        const accountDropdown = new bootstrap.Dropdown(dropdownElement);
        if (accountDropdown) {
            accountDropdown.toggle();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="#">BNB</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink href={homePage.href}>
                                <a className="nav-link">{homePage.label}</a>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href={discoverPage.href}>
                                <a className="nav-link">{discoverPage.label}</a>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown" onClick={toggleAccountDropdown}>
                            <a className="nav-link dropdown-toggle" href="#" id="navAccountDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navAccountDropdown">
                                <li><a className="dropdown-item" href="#">My Account</a></li>
                                <li><a className="dropdown-item" href="#">My Bookings</a></li>
                                <li><a className="dropdown-item" href="#">Account Settings</a></li>
                                <li><a className="dropdown-item" href="#">Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;