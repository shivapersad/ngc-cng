import {Component} from "@angular/core";
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {cngSavingsV2} from './cngSavings-v2';

@Component({
    templateUrl: "pages/cng-savings-calculator-v2/cng-savings-calculator-v2.html",
    styleUrls: ["pages/cng-savings-calculator-v2/cng-savings-calculator-v2.css", 
                "pages/cng-savings-calculator-v2/cng-savings-calculator-v2-common.css"]
})
export class CNGSavingsCalculatorV2Component {

    title: string = "CNG Savings Calculator Version 2";

    //fuelType: 0-Diesel, 1-Super, 2-Premium
    data: Array<cngSavingsV2> = [
        {
            "date": new Date(2016,1,1), //yyyy,mm,dd
            "amount": 100,
            "fuelType": 1
        },
        {
            "date": new Date(2016,2,1),
            "amount": 150,
            "fuelType": 1
        }
    ];

    constructor() {

    }

}