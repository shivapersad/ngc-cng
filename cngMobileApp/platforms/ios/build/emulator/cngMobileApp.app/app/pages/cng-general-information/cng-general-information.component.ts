import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    templateUrl: "pages/cng-general-information/cng-general-information.html",
    styleUrls: ["pages/cng-general-information/cng-general-information.css"]
})
export class CNGGeneralInformationComponent {

    title: string;

    constructor (private _router: Router) {

        this.title = "CNG General Information";

    }

    goToWhatIsCNG () {
        this._router.navigate(["/what-is-cng"]);
    }

    goToHowDoesCNGWork () {
        this._router.navigate(["/how-does-cng-work"]);
    }

    goToCNGBetterThanGasoline () {
        this._router.navigate(["/cng-better-than-gasoline"]);
    }

}