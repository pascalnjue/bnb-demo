import Location from "../src/types/location";
import Listing from "../src/types/listing";
import pic1 from "../src/dummy_images/outdoors.jpeg";
import pic2 from "../src/dummy_images/location.jpeg";

export const locations: Location[] = [
    {id: 1, name: "Nairobi", bannerSrc: pic2.src},
    {id: 2, name: "Mombasa", bannerSrc: pic2.src},
    {id: 3, name: "Nakuru", bannerSrc: pic2.src},
];

export const listings: Listing[] = [
    {id: 1, title: "2 bed Apartment", location: locations[1], bannerSrc: pic1.src},
]