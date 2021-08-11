import React from 'react';
import Listing from "../../types/listing";
import DatePicker from "react-datepicker";
import {useAuth} from "../auth/AuthProvider";
import {makeRequest, makeUrl} from "../../helpers/network";
import endpoints from "../../helpers/endpoints";
import {useRouter} from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import {getLoginModal} from "../../helpers/components";

interface ListingBookingFormProps {
    listing: Listing;
}


const ListingBookingForm = ({listing}: ListingBookingFormProps) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1)
    const [checkInDate, setCheckInDate] = React.useState<Date | null>(today);
    const [checkOutDate, setCheckOutDate] = React.useState<Date | null>(tomorrow);
    const [numberOfGuests, setNumberOfGuests] = React.useState("1");
    const [loading, setLoading] = React.useState(false);
    const {currentUser} = useAuth();
    const router = useRouter();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);

        const body = JSON.stringify({
            user: currentUser.id,
            listing: listing.id,
            check_in_date: checkInDate?.toISOString().slice(0, 10),
            check_out_date: checkOutDate?.toISOString().slice(0, 10),
            number_of_guests: numberOfGuests,
        });

        makeRequest({url: makeUrl(endpoints.bookings), method: "POST", body})
            .then(json => {
                if (json.id) {
                    router.push(`/bookings/${json.id}`).then();
                }
            })
            .catch(error => {
                console.log("error booking:", error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const showLoginModal = async (event: any) => {
        event.preventDefault();

        const loginModal = await getLoginModal();

        if (loginModal) {
            localStorage.setItem("bookAfterAuth", "true");
            loginModal.show();
        }
    }

    // @ts-ignore
    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const totalPrice = listing.price_per_night * diffDays;

    return (
        <div className="rounded border shadow-sm">
            <div className="card-body">
                <h5 className="mb-3">Add dates for prices</h5>
                <form onSubmit={currentUser ? handleSubmit : showLoginModal}>
                    <div className="form-group mb-3">
                        <label htmlFor="checkInDate">Check in date:</label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(date: Date | null) => date && setCheckInDate(date)}
                            className="form-control form-control-lg"
                            selectsStart
                            minDate={today}
                            startDate={checkInDate}
                            endDate={checkOutDate}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="checkOutDate">Check out date:</label>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(date: Date | null) => date && setCheckOutDate(date)}
                            className="form-control form-control-lg"
                            minDate={checkInDate}
                            selectsEnd
                            startDate={checkInDate}
                            endDate={checkOutDate}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="checkOutDate">No of guests:</label>
                        <input
                            onChange={event => setNumberOfGuests(event.target.value)}
                            type="number"
                            id="checkOutDate"
                            defaultValue={1}
                            min={1}
                            className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="checkOutDate">Price:</label>
                        <input
                            type="text"
                            value={totalPrice + " " + listing.currency}
                            className="form-control"
                            disabled/>
                    </div>
                    <button className="btn w-100 btn-primary" disabled={loading} id="bookButton">
                        {loading ? "Loading..." : "Book Now"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ListingBookingForm;