import React from 'react';
import Layout from "../src/components/main/Layout";
import {discoverPage} from "../data/main";
import {listings} from "../data/dummy";
import ListingGridItem from "../src/components/listings/GridItem";

const Discover = () => {
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
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Discover;