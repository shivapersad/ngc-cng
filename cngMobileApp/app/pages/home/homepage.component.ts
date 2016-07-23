import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "pages/home/homepage.html",
    styleUrls: ["pages/home/homepage-common.css", "pages/home/homepage.css"]
})
export class HomepageComponent {
    constructor(private _router: Router){}

    goToNews(){
        console.log("News pressed");
        this._router.navigate(["/news"]);
    }

    goToCNGGeneralInformation(){
        console.log("CNG General Information pressed");
        this._router.navigate(["/cng-general-information"]);
    }

    goToCNGSavingsCalculator(){
        console.log("CNG Savings Calculator pressed");
        this._router.navigate(["/cng-savings-calculator"]);
    }
    
    goToCO2EmissionsCalculator(){
        console.log("CO2 Emissions Calculator pressed");
        this._router.navigate(["/co2-emissions-calculator"]);
    }
    
    goToCNGRefuellingStations(){
        console.log("CNG Refuelling Stations pressed");
        this._router.navigate(["/cng-refuelling-stations"]);
    }
    goToLicensedCNGConverters(){
        console.log("Licensed CNG Converters pressed");
        this._router.navigate(["/licensed-cng-converters"]);
    }

    goToDealersForOEMCNGVehicles(){
        console.log("Dealers for OEM CNG Vehicles pressed");
        this._router.navigate(["/dealers-for-oem-cng-vehicles"]);
    }
    
    goToContactUs(){
        console.log("Contact Us pressed");
        this._router.navigate(["/contact-us"]);
    }
    
    goToAboutNGCCNG(){
        console.log("About NGC CNG pressed");
        this._router.navigate(["/about-ngc-cng"]);
    }

}
