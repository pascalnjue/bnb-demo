import Listing from "./listing";
import User from "./user";

export interface Booking {
    id: number;
    listing: Listing;
    user: User;
    check_in_date: string;
    check_out_date: string;
    number_of_guests: number;
    paid: boolean;
    approved: boolean;
}