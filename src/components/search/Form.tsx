import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useRouter} from "next/router";

const SearchForm = () => {
    const router = useRouter();
    const [checkInDate, setCheckInDate] = React.useState<Date | null>(new Date());
    const [checkOutDate, setCheckOutDate] = React.useState<Date | null>(new Date());
    const [location, setLocation] = React.useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        router.push(`/discover?location__name=${location.toLowerCase()}`);
    }

    // @ts-ignore
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-3 mb-3 form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text"
                               id="location"
                               name="location"
                               className="form-control form-control-lg"
                               placeholder="Where do you want to go?"
                               onChange={event => setLocation(event.target.value)}
                               required
                        />
                    </div>
                    <div className="col-md-3 mb-3 form-group">
                        <label htmlFor="check-in">Check in date</label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(date: Date | null) => date && setCheckInDate(date)}
                            className="form-control form-control-lg"
                            selectsStart
                            minDate={new Date()}
                            startDate={checkInDate}
                            endDate={checkOutDate}
                        />
                    </div>
                    <div className="col-md-3 mb-3 form-group">
                        <label htmlFor="check-out">Check in out</label>
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
                    <div className="col-md-3 mb-3 form-group">
                        <div className="d-flex align-items-end h-100">
                            <button className="btn btn-primary btn-lg w-100">Find a Place</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;