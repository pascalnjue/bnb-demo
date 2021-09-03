import amsterdam from "./dummy_images/amsterdam.jpeg";
import london from "./dummy_images/london.jpeg";
import france from "./dummy_images/france.jpeg";

export interface LocationSliderItem {
    image: string;
}

export const sliders: LocationSliderItem[]=[
    {
        image: france.src,
    },
    {
        image: amsterdam.src,
    },
    {
        image: london.src,
    }
];