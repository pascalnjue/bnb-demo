type Page = {
    title: string,
    href: string,
    label: string,
};

export const aboutPage: Page = {
    title: "About",
    href: "/about",
    label: "About",
}

export const contactUsPage: Page = {
    title: "Contact Us",
    href: "/contact-us",
    label: "Contact Us",
}

export const discoverPage: Page = {
    title: "Discover",
    href: "/discover",
    label: "Discover",
}

export const homePage: Page = {
    title: "",
    href: "/",
    label: "Home",
}

export const locationsPage: Page = {
    title: "Locations",
    href: "/locations",
    label: "Locations",
}

export const apiV1Host = "http://127.0.0.1:8000/api/v1";

export const apiV1Endpoints = {
    featuredListings: `${apiV1Host}/listings/featured`,
    singleListing: (slug: string) => `${apiV1Host}/listings/${slug}`,

    // Locations
    featuredLocations: `${apiV1Host}/locations/featured`,
}
