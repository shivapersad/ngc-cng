import {Component} from "@angular/core";
import {CNGSavings} from "./cngSavings";

@Component({
    templateUrl: "pages/cng-savings-calculator/cng-savings-calculator.html",
    styleUrls: ["pages/cng-savings-calculator/cng-savings-calculator.css", 
                "pages/cng-savings-calculator/cng-savings-calculator-common.css"]
})
export class CNGSavingsCalculatorComponent {
    
    title: string = "CNG Savings Calculator"; // Title for the page
    cngSavings: CNGSavings;
    totalFuelBill: number;
    totalLitresPetrol: number;
    totalLitresCNG: number;
    //strTotalFuelBill: string;
    //strTotalLitresPetrol: string;
    //strTotalLitresCNG: string;
    //strSavings: string;
    barSelectedIndex: number;

    public fuelItems: Array<any> = [
        { title: "Diesel ($1.98)" },
        { title: "Super ($3.58)" },
        { title: "Premium ($5.75)" }

    ];
    
    constructor() {
        this.cngSavings = new CNGSavings();
        this.cngSavings.vehicles = 1;
        this.cngSavings.fuelBill = 200;
        this.cngSavings.petrolCost = 1.98;
        this.cngSavings.cngCost = 1;
        this.cngSavings.costToConvert = 0;
        this.cngSavings.savings = 0;
        this.barSelectedIndex = 0;

        this.totalFuelBill = this.cngSavings.vehicles * this.cngSavings.fuelBill;
        //this.strTotalFuelBill = this.totalFuelBill.toFixed(2); 

        this.totalLitresPetrol = this.cngSavings.fuelBill / this.cngSavings.petrolCost;
        //this.strTotalLitresPetrol = this.totalLitresPetrol.toFixed(2);

        this.totalLitresCNG = this.cngSavings.fuelBill / this.cngSavings.cngCost;
        //this.strTotalLitresCNG = this.totalLitresCNG.toFixed(2);
        
    }

    calculateSavings(bar) {
        console.log("Calculate Savings pressed");

        if (bar.selectedIndex == 0) {
            console.log("Diesel selected");
            this.cngSavings.petrolCost = 1.98;
        } else
        if (bar.selectedIndex == 1) {
            console.log("Super selected");
            this.cngSavings.petrolCost = 3.58;
        } else {
            console.log("Premium selected");
            this.cngSavings.petrolCost = 5.75;
        }

        this.totalFuelBill = this.cngSavings.vehicles * this.cngSavings.fuelBill;
        //this.strTotalFuelBill = this.totalFuelBill.toFixed(2); 

        this.totalLitresPetrol = this.cngSavings.fuelBill / this.cngSavings.petrolCost;
        //this.strTotalLitresPetrol = this.totalLitresPetrol.toFixed(2);

        this.totalLitresCNG = this.cngSavings.fuelBill / this.cngSavings.cngCost;
        //this.strTotalLitresCNG = this.totalLitresCNG.toFixed(2);

        this.cngSavings.savings = this.totalFuelBill - this.totalLitresPetrol;
        //this.strSavings = this.cngSavings.savings.toFixed(2);
    }

    clearForm() {
        this.cngSavings.vehicles = 1;
        this.cngSavings.fuelBill = 200;
        this.cngSavings.petrolCost = 1.98;
        this.cngSavings.cngCost = 1;
        this.cngSavings.costToConvert = 0;
        this.cngSavings.savings = 0;

        this.totalFuelBill = this.cngSavings.vehicles * this.cngSavings.fuelBill;
        this.totalLitresPetrol = this.cngSavings.fuelBill / this.cngSavings.petrolCost;
        this.totalLitresCNG = this.cngSavings.fuelBill / this.cngSavings.cngCost;
    }

    public selectedBarIndexChanged(bar) {
        console.log('Bar selection: ' + bar.selectedIndex);
    }

}