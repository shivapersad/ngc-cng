import {Component} from "@angular/core";

@Component({
    templateUrl: "pages/cng-general-information/cng-general-information.html",
    styleUrls: ["pages/cng-general-information/cng-general-information.css"]
})
export class CNGGeneralInformationComponent {

    title: string;

    constructor () {

        this.title = "CNG General Information";

    }

}