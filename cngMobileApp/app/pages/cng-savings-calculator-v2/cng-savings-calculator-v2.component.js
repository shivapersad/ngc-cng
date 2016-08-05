"use strict";
var core_1 = require("@angular/core");
var CNGSavingsCalculatorV2Component = (function () {
    function CNGSavingsCalculatorV2Component() {
        this.title = "CNG Savings Calculator Version 2";
        //fuelType: 0-Diesel, 1-Super, 2-Premium
        this.data = [
            {
                "date": new Date(2016, 1, 1),
                "amount": 100,
                "fuelType": 1
            },
            {
                "date": new Date(2016, 2, 1),
                "amount": 150,
                "fuelType": 1
            }
        ];
    }
    CNGSavingsCalculatorV2Component = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-savings-calculator-v2/cng-savings-calculator-v2.html",
            styleUrls: ["pages/cng-savings-calculator-v2/cng-savings-calculator-v2.css",
                "pages/cng-savings-calculator-v2/cng-savings-calculator-v2-common.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], CNGSavingsCalculatorV2Component);
    return CNGSavingsCalculatorV2Component;
}());
exports.CNGSavingsCalculatorV2Component = CNGSavingsCalculatorV2Component;
//# sourceMappingURL=cng-savings-calculator-v2.component.js.map