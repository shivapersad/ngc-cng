import {Component} from "@angular/core";

@Component({
    selector: "co2-emissions-calculator",
    templateUrl: "pages/co2-emissions-calculator/co2-emissions-calculator.html",
    styleUrls: ["pages/co2-emissions-calculator/co2-emissions-calculator.css"]
})
export class CO2EmissionsCalculatorComponent {
    
    title: string;

    constructor() {

        this.title = "CO2 Emissions Calculator";

    }

}