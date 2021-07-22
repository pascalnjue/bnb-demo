import React from 'react';
import Layout from "../../src/components/main/Layout";
import Listing from "../../src/types/listing";
import {listings} from "../../data/dummy";
import houseImage from "../../src/dummy_images/house.jpeg";
import AmenityListItem from "../../src/components/listings/AmenityListItem";
import ListingBookingForm from "../../src/components/listings/BookingForm";

// @ts-ignore
export const getServerSideProps = async ({query}) => {
    const {id} = query;

    const listing: Listing = listings.filter(listing => listing.id = id)[0];
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
                        <div className="col-md-9">
                            <div className="vh-75">
                                <div className="card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={listing.bannerSrc} alt="" className="card-image"/>
                                </div>
                            </div>
                            <h4 className="mt-4">House hosted by P</h4>
                            <p>2 guests . 2 bedroom . 1 bathroom</p>
                            <hr/>
                            <div>
                                <p>
                                    This cabin is located 12Km from the city, has the best scenery, Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit. Ad culpa expedita
                                    laudantium maxime nam necessitatibus nemo, sit temporibus voluptas voluptatibus?
                                    Autem dolorem magnam nesciunt numquam, odio repellendus voluptate! Iste, sed. <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, animi asperiores
                                    debitis dolore, doloremque earum esse ex facilis impedit numquam perspiciatis porro
                                    quaerat reprehenderit sunt tempore, temporibus tenetur ullam unde.
                                </p>
                            </div>
                            <hr/>
                            <div>
                                <h5>Places for sleeping</h5>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ListingBookingForm/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ListingDetails;