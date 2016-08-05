import {Component} from "@angular/core";

@Component({
    selector: "dealers-for-oem-cng-vehicles",
    templateUrl: "pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.html",
    styleUrls: ["pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.css", 
                "pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles-common.css"]
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

        console.log("Name: " + this.dealer['name']);
        console.log("Website: " + this.dealer['website']);

    }

}