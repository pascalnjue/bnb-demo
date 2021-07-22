import Location from "./location";

export type Amenity = {
    id: number,
    name: string,
    bsIcon?: string,
}

type Listing = {
    id: number,
    title: string,
    location: Location,
    bannerSrc: string,
    amenities: Amenity[],
}

export default Listing;
