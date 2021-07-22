import Location from "../src/types/location";
import Listing, {Amenity} from "../src/types/listing";
import pic1 from "../src/dummy_images/outdoors.jpeg";
import pic2 from "../src/dummy_images/location.jpeg";

export const locations: Location[] = [
    {id: 1, name: "Nairobi", bannerSrc: pic2.src},
    {id: 2, name: "Mombasa", bannerSrc: pic2.src},
    {id: 3, name: "Nakuru", bannerSrc: pic2.src},
];

export const amenities: Amenity[] = [
    {id: 1, name: "Kitchen", bsIcon: "egg-fried"},
    {id: 1, name: "WiFi", bsIcon: "wifi"},
    {id: 1, name: "Washing Machine", bsIcon: "tropical-storm"},
];

export const listings: Listing[] = [
    {id: 1, title: "2 bed Apartment", location: locations[1], bannerSrc: pic1.src, amenities},
]