"use strict";
var core_1 = require("@angular/core");
var cngSavings_1 = require("./cngSavings");
var CNGSavingsCalculatorComponent = (function () {
    function CNGSavingsCalculatorComponent() {
        this.title = "CNG Savings Calculator"; // Title for the page
        this.fuelItems = [
            { title: "Diesel ($1.98)" },
            { title: "Super ($3.58)" },
            { title: "Premium ($5.75)" }
        ];
        this.cngSavings = new cngSavings_1.CNGSavings();
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
    CNGSavingsCalculatorComponent.prototype.calculateSavings = function (bar) {
        console.log("Calculate Savings pressed");
        if (bar.selectedIndex == 0) {
            console.log("Diesel selected");
            this.cngSavings.petrolCost = 1.98;
        }
        else if (bar.selectedIndex == 1) {
            console.log("Super selected");
            this.cngSavings.petrolCost = 3.58;
        }
        else {
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
    };
    CNGSavingsCalculatorComponent.prototype.clearForm = function () {
        this.cngSavings.vehicles = 1;
        this.cngSavings.fuelBill = 200;
        this.cngSavings.petrolCost = 1.98;
        this.cngSavings.cngCost = 1;
        this.cngSavings.costToConvert = 0;
        this.cngSavings.savings = 0;
        this.totalFuelBill = this.cngSavings.vehicles * this.cngSavings.fuelBill;
        this.totalLitresPetrol = this.cngSavings.fuelBill / this.cngSavings.petrolCost;
        this.totalLitresCNG = this.cngSavings.fuelBill / this.cngSavings.cngCost;
    };
    CNGSavingsCalculatorComponent.prototype.selectedBarIndexChanged = function (bar) {
        console.log('Bar selection: ' + bar.selectedIndex);
    };
    CNGSavingsCalculatorComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-savings-calculator/cng-savings-calculator.html",
            styleUrls: ["pages/cng-savings-calculator/cng-savings-calculator.css",
                "pages/cng-savings-calculator/cng-savings-calculator-common.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], CNGSavingsCalculatorComponent);
    return CNGSavingsCalculatorComponent;
}());
exports.CNGSavingsCalculatorComponent = CNGSavingsCalculatorComponent;
//# sourceMappingURL=cng-savings-calculator.component.js.map