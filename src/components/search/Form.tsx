import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = (props: {}) => {
    const {} = props;
    const [checkInDate, setCheckInDate] = React.useState<Date | null>(new Date());
    const [checkOutDate, setCheckOutDate] = React.useState<Date | null>(new Date());

    // @ts-ignore
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-3 mb-3 form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text"
                               className="form-control form-control-lg"
                               placeholder="Where do you want to go?"
                        />
                    </div>
                    <div className="col-md-3 mb-3 form-group">
                        <label htmlFor="check-in">Check in date</label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(date: Date | null) => date && setCheckInDate(date)}
                            className="form-control form-control-lg"
                            minDate={new Date()}
                        />
                    </div>
                    <div className="col-md-3 mb-3 form-group">
                        <label htmlFor="check-out">Check in out</label>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(date: Date | null) => setCheckOutDate(date)}
                            className="form-control form-control-lg"
                            minDate={new Date()}
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

SearchForm.propTypes = {};

export default SearchForm;