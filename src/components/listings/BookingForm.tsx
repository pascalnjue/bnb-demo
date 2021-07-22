import React from 'react';

const ListingBookingForm = () => {
    return (
        <div className="rounded border shadow-sm">
            <div className="card-body">
                <h5 className="mb-3">Add dates for prices</h5>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="checkInDate">Check in date:</label>
                        <input type="text" id="checkInDate" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="checkOutDate">Check out date:</label>
                        <input type="text" id="checkOutDate" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="checkOutDate">No of guests:</label>
                        <input type="text" id="checkOutDate" className="form-control"/>
                    </div>
                    <button className="btn w-100 btn-primary">Check Availability</button>
                </form>
            </div>
        </div>
    );
};

export default ListingBookingForm;