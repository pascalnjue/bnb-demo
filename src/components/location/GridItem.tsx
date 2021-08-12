import React from 'react';
import PropTypes from 'prop-types';
import Location from "../../types/location";
import Link from 'next/link';

const LocationGridItem = (props: { location: Location }) => {
    const {location} = props;

    return (
        <Link href={`/discover/?location_name=${location.name}`}>
            <a>
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={location.banner} alt={location.name} className="card-image"/>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex justify-content-center flex-column h-100 text-dark">
                            <h5>{location.name}</h5>
                            <p>{Math.floor(Math.random() * 10)} Homes</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

LocationGridItem.propTypes = {
    location: PropTypes.object.isRequired,
};

export default LocationGridItem;