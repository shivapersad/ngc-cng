import {Component} from "@angular/core";

@Component({
    templateUrl: "pages/about-ngc-cng/about-ngc-cng.html",
    styleUrls: ["pages/about-ngc-cng/about-ngc-cng.css"]
})
export class AboutNGCCNGComponent {
    
    title: string;

    constructor () {
        
        this.title = "About NGC CNG";

    }

}