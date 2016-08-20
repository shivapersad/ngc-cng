import {Component} from "@angular/core";
import segmentedBarModule = require("ui/segmented-bar");
import observableModule = require("data/observable");
import textfield = require("ui/text-field");
import view = require("ui/core/view");

@Component({
    templateUrl: "pages/testing-area/test-code.component.html",
    styleUrls: ["pages/testing-area/testing-area.css"]
})
export class TestCodeComponent {
    
    cngCost: number;

    public items: Array<any> = [
        "Diesel ($1.98)",
        "Super ($3.58)",
        "Premium ($5.75)"
    ];


    constructor() {

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

}