import React from 'react';
import Layout from "../src/components/main/Layout";
import {apiV1Endpoints, discoverPage} from "../data/main";
import ListingGridItem from "../src/components/listings/GridItem";
import Listing from "../src/types/listing";


// @ts-ignore
export const getServerSideProps = async ({query}) => {
    const url = `${apiV1Endpoints.featuredListings}?${new URLSearchParams(query)}`;
    const listings = await fetch(url)
        .then(response => response.json())
    return {
        props: {listings}
    }
}

const Discover = (props: {listings: Listing[]}) => {
    const {listings} = props;

    return (
        <Layout title={discoverPage.title}>
            <section>
                <div className="container py-5">
                    <h2 className="mb-4">Discover</h2>
                    <div className="row">
                        {listings.map(listing => (
                            <div className="col-md-4 mb-3" key={listing.id}>
                                <ListingGridItem listing={listing}/>
                            </div>
                        ))}
                        {listings.length === 0 && (
                            <div className="col-12">
                                <p>No listings found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Discover;