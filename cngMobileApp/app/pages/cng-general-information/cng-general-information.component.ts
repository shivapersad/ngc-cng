import {Component} from "@angular/core";
import segmentedBarModule = require("ui/segmented-bar");
import observableModule = require("data/observable");
import textfield = require("ui/text-field");
import view = require("ui/core/view");

@Component({
    templateUrl: "pages/cng-general-information/cng-general-information.html",
    styleUrls: ["pages/cng-general-information/cng-general-information.css", 
                "pages/cng-general-information/cng-general-information-common.css"]
})
export class CNGGeneralInformationComponent {
    
    num1: number;
    strNum1: string;
    segmentValue: number;
    cngCost: number;

    public items: Array<any> = [
        "Diesel ($1.98)",
        "Super ($3.58)",
        "Premium ($5.75)"
    ];

    public barItems: Array<any> = [
        { title: "Diesel ($1.98)" },
        { title: "Super ($3.58)" },
        { title: "Premium ($5.75)" }

    ];

    constructor() {

        this.num1 = 25.3444;
        this.strNum1 = this.num1.toFixed(2);
        this.cngCost = 1;

    }

    public add() {

        if ((this.cngCost >= 1) && (this.cngCost < 3)) {
            this.cngCost = (Math.round(this.cngCost * 100) / 100) + (0.05);
        }

        console.log("CNG Cost: " + this.cngCost);

    }

    public subtract() {

        if ((this.cngCost > 1) && (this.cngCost <= 3)) {
            this.cngCost = (Math.round(this.cngCost * 100) / 100) - (0.05);
        }
        
        console.log("CNG Cost: " + this.cngCost);

    }

    public selectedIndexChanged(picker) {
        console.log('picker selection: ' + picker.selectedIndex);
    }
    
    public selectedBarIndexChanged(bar) {
        console.log('Bar selection: ' + bar.selectedIndex);
    }

    public slideChange(slider) {
        console.log('Slider value: ' + slider.selectedIndex);
    }

    getSegment() {
        
    }

}