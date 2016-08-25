import {Component} from "@angular/core";

@Component({
    templateUrl: "pages/cng-general-information/what-is-cng/what-is-cng.html",
    styleUrls: ["pages/cng-general-information/what-is-cng/what-is-cng.css"]
})
export class WhatIsCNGComponent {

    title: string;

    constructor() {
        this.title = "What is CNG?";
    }

}