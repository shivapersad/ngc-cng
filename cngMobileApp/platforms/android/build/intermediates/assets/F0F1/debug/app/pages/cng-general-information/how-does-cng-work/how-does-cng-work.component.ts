import {Component} from "@angular/core";

@Component({
    templateUrl: "pages/cng-general-information/how-does-cng-work/how-does-cng-work.html",
    styleUrls: ["pages/cng-general-information/how-does-cng-work/how-does-cng-work.css"]
})
export class HowDoesCNGWorkComponent {

    title: string;

    constructor() {
        this.title = "How does CNG work?";
    }

}