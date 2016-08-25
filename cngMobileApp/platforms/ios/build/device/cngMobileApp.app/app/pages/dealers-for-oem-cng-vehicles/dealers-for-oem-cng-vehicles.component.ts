import {Component} from "@angular/core";

@Component({
    templateUrl: "pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.html",
    styleUrls: ["pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.css"]
})
export class DealersForOEMCNGVehiclesComponent {
    
    title: string;
    dealer : Array<any>;

    dealers: Array<any> = [

        {
            "name": "Honda City CNG",
            "website": "www.cng.city"
        }

    ]

    constructor() {

        this.title = "Dealers for OEM CNG Vehicles";
        this.dealer = this.dealers[0];

    }

}