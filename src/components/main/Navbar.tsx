import React from 'react';
import NavLink from "next/link";
import {discoverPage, homePage} from "../../../data/main";
import Link from "next/link";
import {useAuth} from "../auth/AuthProvider";
import {getLoginModal, getRegisterModal} from "../../helpers/components";

const Navbar = () => {
    const {loadingUser, currentUser, logOutUser} = useAuth();

    const toggleAccountDropdown = async () => {
        const bootstrap = await import("bootstrap");
        const dropdownElement = document.getElementById("navAccountDropdown") ?? '';
        const accountDropdown = new bootstrap.Dropdown(dropdownElement);
        if (accountDropdown) {
            accountDropdown.toggle();
        }
    }

    const showLoginModal = async () => {
        const loginModal = await getLoginModal();

        if (loginModal) {
            loginModal.show();
        }
    }

    const showRegisterModal = async () => {
        const registerModal = await getRegisterModal();

        if (registerModal) {
            registerModal.show();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">BNB</a>
                </Link>
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
                        {loadingUser ?
                            <li className="nav-item">
                                <span className="nav-link">Loading...</span>
                            </li>
                            :
                            <>
                                {currentUser
                                    ?
                                    <li className="nav-item dropdown" onClick={toggleAccountDropdown}>
                                        <a className="nav-link dropdown-toggle" href="#" id="navAccountDropdown"
                                           role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Account
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navAccountDropdown">
                                            <li>
                                                <span className="dropdown-item text-primary">
                                                    <i className="bi bi-person-circle"/>&nbsp;
                                                    {currentUser.first_name} {currentUser.last_name}
                                                </span>
                                            </li>
                                            <li>
                                                <Link href={"/account"}>
                                                    <a className="dropdown-item">My Account</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/account/bookings"}>
                                                    <a className="dropdown-item">My Bookings</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/account/settings"}>
                                                    <a className="dropdown-item">Account Settings</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <span
                                                    onClick={logOutUser}
                                                    className="dropdown-item cursor-pointer">
                                                    Log Out
                                                </span>
                                            </li>
                                        </ul>
                                    </li>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <button
                                                onClick={showLoginModal}
                                                className="btn btn-outline-secondary mx-3">
                                                Login
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                onClick={showRegisterModal}
                                                className="btn btn-primary">
                                                Register
                                            </button>
                                        </li>
                                    </>
                                }
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;