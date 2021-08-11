import Location from "./location";

export interface Amenity {
    id: number;
    name: string;
    number: string;
}

export interface ListingImage {
    id: number;
    image: string;
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
    images: ListingImage[];
}

export default Listing;
