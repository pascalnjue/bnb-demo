import React from 'react';
import PropTypes from 'prop-types';
import Location from "../../../types/location";
import LocationGridItem from "../../location/GridItem";

const FeaturedLocations = (props: { featuredLocations: Location[] }) => {
    const {featuredLocations} = props;

    return (
        <section>
            <div className="container py-5">
                <h2 className="mb-4">Nearby locations</h2>
                <div className="row">
                    {featuredLocations.map(location => (
                        <div className="col-md-4 mb-3" key={location.id}>
                            <LocationGridItem location={location}/>
                        </div>
                    ))}
                    {featuredLocations.length === 0 && (
                        <p>No locations found at the moment.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

FeaturedLocations.propTypes = {
    featuredLocations: PropTypes.array.isRequired,
};

export default FeaturedLocations;