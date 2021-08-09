import React from 'react';
import Layout from "../../src/components/main/Layout";
import Listing from "../../src/types/listing";
import AmenityListItem from "../../src/components/listings/AmenityListItem";
import ListingBookingForm from "../../src/components/listings/BookingForm";
import {apiV1Endpoints} from "../../data/main";

// @ts-ignore
export const getServerSideProps = async ({query}) => {
    const {slug} = query;

    const listing = await fetch(apiV1Endpoints.singleListing(slug))
        .then(response => response.json())

    return {
        props: {listing}
    }
}

const ListingDetails = (props: { listing: Listing }) => {
    const {listing} = props;

    return (
        <Layout title={"listing details"}>
            <section>
                <div className="container py-5">
                    <div className="mb-3">
                        <h2>{listing.title}</h2>
                        <p><i className="bi bi-pin-map-fill"/> {listing.location.name}</p>
                    </div>

                    <div className="row">
                        <div className="col-md-9 mb-3">
                            <div className="vh-75">
                                <div className="card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={listing.banner} alt="" className="card-image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-3">
                            <h4 className="mt-4 mb-1">House hosted by P</h4>
                            <p>
                                <i className="bi bi-check2 text-primary"/> {listing.bedrooms} bedrooms &nbsp;
                                <i className="bi bi-check2 text-primary"/> {listing.amenities.length} Amenities
                            </p>
                            <hr/>
                        </div>
                        <div className="col-md-9 mb-3">
                            <div>
                                <p>
                                    {listing.description}
                                </p>
                            </div>
                            <hr/>
                            <div>
                                <h5 className="mb-2">What the place offers</h5>
                                <div className="row">
                                    {listing.amenities.map(amenity => (
                                        <div className="col-md-6" key={amenity.id}>
                                            <AmenityListItem amenity={amenity}/>
                                        </div>
                                    ))}
                                    {listing.amenities.length === 0 && (
                                        <p>Listing does not have amenities at the moment.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ListingBookingForm listing={listing}/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ListingDetails;