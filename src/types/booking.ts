import Listing from "./listing";
import User from "./user";

export interface Booking {
    listing: Listing;
    user: User;
    check_in_date: string;
    check_out_date: string;
    price_per_night: number;
    number_of_guests: number;
    paid: boolean;
    currency: string;
}