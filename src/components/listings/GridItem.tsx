import React from 'react';
import PropTypes from 'prop-types';
import Listing from "../../types/listing";
import Link from "next/link";

const ListingGridItem = (props: { listing: Listing }) => {
    const {listing} = props;
    const listingDetailsHref = `/listings/${listing.id}`;

    return (
        <div className="card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={listing.bannerSrc} alt={listing.title} className="card-image"/>
            <div className="card-img-overlay">
                <div className="d-flex align-items-end h-100">
                    <div>
                        <h5>{listing.title}</h5>
                        <p className="mb-2">{listing.location.name}</p>
                        <Link href={listingDetailsHref}>
                            <a className="stretched-link">View Details</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListingGridItem.propTypes = {
    listing: PropTypes.object.isRequired,
};

export default ListingGridItem;