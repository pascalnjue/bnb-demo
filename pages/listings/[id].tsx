import React from 'react';
import Layout from "../../src/components/main/Layout";
import Listing from "../../src/types/listing";
import {listings} from "../../data/dummy";

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
                    <h2>{listing.title}</h2>
                    <p>{listing.location.name}</p>

                    <div className="row">
                        <div className="col-md-9">
                            <h4>House hosted by P</h4>
                            <p>2 guests . 2 bedroom . 1 bathroom</p>
                            <hr/>
                            <div>
                                <h5>Entire home</h5>
                                <p>You'll have the treehouse to yourself.</p>
                            </div>
                            <hr/>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa expedita
                                    laudantium maxime nam necessitatibus nemo, sit temporibus voluptas voluptatibus?
                                    Autem dolorem magnam nesciunt numquam, odio repellendus voluptate! Iste, sed.
                                </p>
                            </div>
                            <hr/>
                            <div>
                                <h5>Places for sleeping</h5>
                            </div>
                            <hr/>
                            <div>
                                <h5>What the place offers</h5>
                                <ul>
                                    <li>Kitchen</li>
                                    <li>WIFI</li>
                                    <li>Washing Machine</li>
                                    <li>Patio or balcony</li>
                                </ul>
                                <a href="#">See all amenities</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ListingDetails;