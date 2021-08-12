import React from 'react';
import Layout from "../../src/components/main/Layout";
import {useAuth} from "../../src/components/auth/AuthProvider";
import endpoints from "../../src/helpers/endpoints";
import {makeRequest, makeUrl} from "../../src/helpers/network";
import {Booking} from "../../src/types/booking";

const MyBookings = () => {
    const {currentUser} = useAuth();
    const [bookings, setBooking] = React.useState<Booking[] | null>(null);

    React.useEffect(() => {
        if (currentUser) {
            makeRequest({url: makeUrl(endpoints.bookings), method: "GET"})
                .then(json => setBooking(json))
        }
    }, [currentUser]);

    return (
        <Layout title={"Profile"}>
            <section>
                <div className="container py-5">
                    <h2 className="mb-3">My Bookings</h2>

                    {bookings
                        ?
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                <tr>
                                                    <th>Listing</th>
                                                    <th>Location</th>
                                                    <th>Check in Date</th>
                                                    <th>Paid</th>
                                                    <th>Approved</th>
                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {bookings.map(booking => (
                                                    <tr key={booking.id}>
                                                        <td>{booking.listing.title}</td>
                                                        <td>{booking.listing.location}</td>
                                                        <td>{booking.check_in_date}</td>
                                                        <td>
                                                            {booking.paid
                                                                ?
                                                                <span className="badge bg-primary">YES</span>
                                                                :
                                                                <span className="badge bg-secondary">NO</span>
                                                            }
                                                        </td>
                                                        <td>
                                                            {booking.approved

                                                                ?
                                                                <span className="badge bg-primary">YES</span>
                                                                :
                                                                <span className="badge bg-secondary">NO</span>
                                                            }
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">View</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <p>Loading...</p>
                    }
                </div>
            </section>
        </Layout>
    );
};

export default MyBookings;