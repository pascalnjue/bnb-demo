import React from 'react';
import PropTypes from 'prop-types';
import Location from "../../../types/location";
import LocationGridItem from "../../location/GridItem";

const NearbyLocations = (props: { nearbyLocations: Location[] }) => {
    const {nearbyLocations} = props;

    return (
        <section>
            <div className="container py-5">
                <h2 className="mb-4">Nearby locations</h2>
                <div className="row">
                    {nearbyLocations.map(location => (
                        <div className="col-md-4 mb-3" key={location.id}>
                            <LocationGridItem location={location}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

NearbyLocations.propTypes = {
    nearbyLocations: PropTypes.array.isRequired,
};

export default NearbyLocations;