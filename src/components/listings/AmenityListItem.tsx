import React from 'react';
import PropTypes from 'prop-types';
import {Amenity} from "../../types/listing";

const AmenityListItem = (props: { amenity: Amenity }) => {
    const {amenity} = props;

    return (
        <div className="row">
            <div className="col-1">
                {amenity.bsIcon && <i className={`bi bi-${amenity.bsIcon}`}/>}
            </div>
            <div className="col-11">
                <p>{amenity.name}</p>
            </div>
        </div>
    );
};

AmenityListItem.propTypes = {
    amenity: PropTypes.object.isRequired,
};

export default AmenityListItem;