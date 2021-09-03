import React from 'react';
import Layout from "../../src/components/main/Layout";
import {useAuth} from "../../src/components/auth/AuthProvider";

const AccountSettings = () => {
    const {currentUser} = useAuth();

    return (
        <Layout title={"Profile"}>
            {currentUser ?
                <section>
                    <div className="container py-5">
                        <h2 className="mb-3">My Bookings</h2>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-person" style={{fontSize: "10rem"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Profile Details</h4>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h5>Name</h5>
                                                <p>{currentUser.first_name} {currentUser.last_name}</p>
                                            </li>
                                            <li className="list-group-item">
                                                <h5>Email</h5>
                                                <p>{currentUser.email}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                :
                // TODO: use better loader
                <p>Loading...</p>
            }
        </Layout>
    );
};

export default AccountSettings;