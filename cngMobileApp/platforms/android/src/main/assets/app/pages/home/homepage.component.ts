import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "pages/home/homepage.html",
    styleUrls: ["pages/home/homepage.css"]
})
export class HomepageComponent {

    title: string;

    constructor(private _router: Router){

        this.title = "NGC CNG";

    }

    goToNews(){
        this._router.navigate(["/news"]);
    }

    goToCNGGeneralInformation(){
        this._router.navigate(["/cng-general-information"]);
    }

    goToCNGSavingsCalculator(){
        this._router.navigate(["/cng-savings-calculator"]);
    }
    
    goToCO2EmissionsCalculator(){
        this._router.navigate(["/co2-emissions-calculator"]);
    }
    
    goToCNGRefuellingStations(){
        this._router.navigate(["/cng-refuelling-stations"]);
    }
    
    goToCNGConverters(){
        console.log("CNG Converters pressed");
        this._router.navigate(["/cng-converters"]);
    }

    goToDealersForOEMCNGVehicles(){
        this._router.navigate(["/dealers-for-oem-cng-vehicles"]);
    }
    
    goToContactUs(){
        this._router.navigate(["/contact-us"]);
    }
    
    goToAboutNGCCNG(){
        this._router.navigate(["/about-ngc-cng"]);
    }

    goToTesting() {
        console.log("Testing Area pressed");
        this._router.navigate(["/testing-area"]);
    }

}
