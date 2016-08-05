import {CNGRefuellingStationsServices} from './cng-refuelling-stations-services';
import {CNGRefuellingStationsOpeningTimes} from './cng-refuelling-stations-opening-times';

export class CNGRefuellingStations {

    name: string;
    company: string;
    comingSoon: string;
    location: string;
    longtitude: number;
    latitude: number;
    services: Array<CNGRefuellingStationsServices>;
    openingTimes: Array<CNGRefuellingStationsOpeningTimes>;
    // services
    //openingTimes
    
}