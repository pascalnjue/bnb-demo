import Location from "./location";

export type Amenity = {
    id: number,
    name: string,
}

interface Listing {
    id: number,
    title: string,
    slug: string,
    description: string,
    location: Location,
    banner: string,
    amenities: Amenity[],
    bedrooms: number,
}

export default Listing;
