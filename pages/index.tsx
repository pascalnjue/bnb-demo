import Layout from "../src/components/main/Layout";
import {homePage} from "../data/main";
import Banner from "../src/components/pages/home/Banner";
import NearbyLocations from "../src/components/pages/home/NearbyLocations";
import {listings, locations} from "../data/dummy";
import FeaturedListings from "../src/components/pages/home/FeaturedListings";
import SearchForm from "../src/components/search/Form";


export default function Home() {
    return (
        <Layout title={homePage.title}>
            <Banner/>
            <div className="container">
                <SearchForm/>
            </div>
            <NearbyLocations nearbyLocations={locations}/>
            <FeaturedListings featuredListings={listings}/>
        </Layout>
    )
}
