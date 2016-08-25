import {Component} from "@angular/core";

@Component({
    templateUrl: "pages/cng-general-information/cng-better-than-gasoline/cng-better-than-gasoline.html",
    styleUrls: ["pages/cng-general-information/cng-better-than-gasoline/cng-better-than-gasoline.css"]
})
export class CNGBetterThanGasolineComponent {

    title: string;

    constructor() {
        this.title = "Why is CNG better than gasoline?";
    }
}