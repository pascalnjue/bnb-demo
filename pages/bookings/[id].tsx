import React from 'react';
import Layout from "../../src/components/main/Layout";
import {useRouter} from "next/router";
import {makeRequest, makeUrl} from "../../src/helpers/network";
import endpoints from "../../src/helpers/endpoints";
import {Booking} from "../../src/types/booking";

const BookingDetails = () => {
    const [payingInFull, setPayingInFull] = React.useState(true);
    const [booking, setBooking] = React.useState<Booking | null>(null);
    const router = useRouter();
    const {id} = router.query;

    React.useEffect(() => {
        if (id)
            makeRequest({url: makeUrl(endpoints.bookingDetails(id)), method: "GET"})
                .then(json => {
                    if (json.id) {
                        setBooking(json);
                    }
                })
                .catch(error => {
                    console.log("error fetching booking:", error);
                })
    }, [id])

    const showPaymentMethodDropdown = async () => {
        const bootstrap = await import("bootstrap");
        const paymentMethodDropdown = new bootstrap.Dropdown(document.getElementById("paymentMethodDropdown") ?? "");
        paymentMethodDropdown.show();
    }

    return (
        <Layout title="Booking Details">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h3 className="mb-4">Confirm and pay</h3>
                        <div className="dropdown">
                            <button type="button"
                                    onClick={showPaymentMethodDropdown}
                                    id="paymentMethodDropdown"
                                    className="btn btn-outline-primary w-100 btn-lg dropdown-toggle"
                                    data-bs-toggle="dropdown">
                                Payment Method
                            </button>
                            <ul className="dropdown-menu w-100">
                                <li>
                                    <div className="dropdown-item">Paypal</div>
                                </li>
                                <li>
                                    <div className="dropdown-item">MasterCard</div>
                                </li>
                            </ul>
                        </div>

                        <div className="my-4">
                            <p className="mb-3">How would you like to pay for this stay?</p>
                            <div>
                                <div onClick={() => setPayingInFull(true)}
                                     className={`p-3 border cursor-pointer rounded mb-3 ${payingInFull ? "border-primary" : ""}`}>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="" id="payingInFull"
                                            onChange={event => setPayingInFull(event.target.checked)}
                                            checked={payingInFull}
                                        />
                                        <label className="form-check-label w-100 cursor-pointer" htmlFor="payInFull">
                                            <div className="d-flex justify-content-between w-100">
                                                <h5>Pay in full</h5>
                                                <p>10$</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div onClick={() => setPayingInFull(false)}
                                     className={`p-3 border cursor-pointer rounded ${!payingInFull ? "border-primary" : ""}`}>
                                    <div onClick={() => setPayingInFull(false)}
                                         className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="" id="notPayingInFull"
                                            onChange={event => setPayingInFull(event.target.checked)}
                                            checked={!payingInFull}
                                        />
                                        <label className="form-check-label w-100 cursor-pointer"
                                               htmlFor="notPayingInFull">
                                            <div className="d-flex justify-content-between w-100">
                                                <h5>Pay part now, the rest when you arrive</h5>
                                                <p>10$</p>
                                            </div>
                                            <p className="mt-3">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate
                                                iusto laudantium nam neque nulla odio optio perferendis, praesentium
                                                recusandae reiciendis saepe, similique soluta unde veritatis? Nesciunt
                                                praesentium quas vero.
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                {booking ?
                                    <div>
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <h2 className="">{booking.listing.title}</h2>
                                                <p className="mb-3">{booking.listing.location.name}</p>
                                                <p>{booking.listing.description.substring(0, 100)}...</p>
                                            </div>
                                            <div className="col-6">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    className="w-100 rounded"
                                                    src={booking.listing.banner} alt={booking.listing.title}
                                                />
                                            </div>
                                        </div>
                                        <table className="table table-striped">
                                            <tbody>
                                            <tr>
                                                <th>Price per night</th>
                                                <td>{booking.listing.price_per_night} ({booking.listing.currency})</td>
                                            </tr>
                                            <tr>
                                                <th>Check in Date:</th>
                                                <td>{booking.check_in_date}</td>
                                            </tr>
                                            <tr>
                                                <th>Check out Date:</th>
                                                <td>{booking.check_out_date}</td>
                                            </tr>
                                            <tr>
                                                <th>Number of Guests:</th>
                                                <td>{booking.number_of_guests}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    :
                                    <p>Loading...</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BookingDetails;