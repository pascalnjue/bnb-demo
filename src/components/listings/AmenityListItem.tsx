import React from 'react';
import PropTypes from 'prop-types';
import {Amenity} from "../../types/listing";

const AmenityListItem = (props: { amenity: Amenity }) => {
    const {amenity} = props;

    return (
        <div className="border-bottom mb-3 pb-2">
            <div className="d-flex">
                <div className="col-11">
                    <p>{amenity.name}</p>
                </div>
                <div className="col-1">
                    <p>{amenity.number}</p>
                </div>
            </div>
        </div>
    );
};

AmenityListItem.propTypes = {
    amenity: PropTypes.object.isRequired,
};

export default AmenityListItem;