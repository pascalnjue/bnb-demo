import React from 'react';
import PropTypes from 'prop-types';
import Listing from "../../../types/listing";
import ListingGridItem from "../../listings/GridItem";

const FeaturedListings = (props: { featuredListings: Listing[] }) => {
    const {featuredListings} = props;

    return (
        <section>
            <div className="container py-5">
                <h2 className="mb-4">Featured Listings</h2>
                <div className="row">
                    {featuredListings.map(listing => (
                        <div className="col-md-3 mb-3" key={listing.id}>
                            <ListingGridItem listing={listing}/>
                        </div>
                    ))}
                    {featuredListings.length === 0 && (
                        <p>No listings found at the moment.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

FeaturedListings.propTypes = {
    featuredListings: PropTypes.array.isRequired,
};

export default FeaturedListings;