import Layout from "../src/components/main/Layout";
import {apiV1Endpoints, homePage} from "../data/main";
import Banner from "../src/components/pages/home/Banner";
import FeaturedLocations from "../src/components/pages/home/FeaturedLocations";
import FeaturedListings from "../src/components/pages/home/FeaturedListings";
import SearchForm from "../src/components/search/Form";
import Location from "../src/types/location";
import Listing from "../src/types/listing";


function Home(props: {featuredLocations: Location[], featuredListings: Listing[]}) {
    const {featuredLocations, featuredListings} = props;

    return (
        <Layout title={homePage.title}>
            <Banner/>
            <div className="container">
                <SearchForm/>
            </div>
            <FeaturedLocations featuredLocations={featuredLocations}/>
            <FeaturedListings featuredListings={featuredListings}/>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const featuredLocations = await fetch(apiV1Endpoints.featuredLocations)
        .then(response => response.json())
        .catch(error => {
            console.log("Error fetching locations:", error);
            return [];
        })
    const featuredListings = await fetch(apiV1Endpoints.featuredListings)
        .then(response => response.json())
        .catch(error => {
            console.log("Error fetching listings:", error);
            return [];
        })

    return {
        props: {
            featuredLocations,
            featuredListings,
        }
    }
}

export default Home;