import Location from "./location";

export type Amenity = {
    id: number;
    name: string;
    number: string;
}

interface Listing {
    id: number;
    title: string;
    slug: string;
    description: string;
    location: Location;
    banner: string;
    amenities: Amenity[];
    bedrooms: number;
    price_per_night:number;
    currency: string;
}

export default Listing;
