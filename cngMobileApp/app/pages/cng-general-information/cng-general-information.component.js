"use strict";
var core_1 = require("@angular/core");
var CNGGeneralInformationComponent = (function () {
    function CNGGeneralInformationComponent() {
        this.items = [
            "Diesel ($1.98)",
            "Super ($3.58)",
            "Premium ($5.75)"
        ];
        this.barItems = [
            { title: "Diesel ($1.98)" },
            { title: "Super ($3.58)" },
            { title: "Premium ($5.75)" }
        ];
        this.num1 = 25.3444;
        this.strNum1 = this.num1.toFixed(2);
        this.cngCost = 1;
    }
    CNGGeneralInformationComponent.prototype.add = function () {
        if ((this.cngCost >= 1) && (this.cngCost < 3)) {
            this.cngCost = (Math.round(this.cngCost * 100) / 100) + (0.05);
        }
        console.log("CNG Cost: " + this.cngCost);
    };
    CNGGeneralInformationComponent.prototype.subtract = function () {
        if ((this.cngCost > 1) && (this.cngCost <= 3)) {
            this.cngCost = (Math.round(this.cngCost * 100) / 100) - (0.05);
        }
        console.log("CNG Cost: " + this.cngCost);
    };
    CNGGeneralInformationComponent.prototype.selectedIndexChanged = function (picker) {
        console.log('picker selection: ' + picker.selectedIndex);
    };
    CNGGeneralInformationComponent.prototype.selectedBarIndexChanged = function (bar) {
        console.log('Bar selection: ' + bar.selectedIndex);
    };
    CNGGeneralInformationComponent.prototype.slideChange = function (slider) {
        console.log('Slider value: ' + slider.selectedIndex);
    };
    CNGGeneralInformationComponent.prototype.getSegment = function () {
    };
    CNGGeneralInformationComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-general-information/cng-general-information.html",
            styleUrls: ["pages/cng-general-information/cng-general-information.css",
                "pages/cng-general-information/cng-general-information-common.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], CNGGeneralInformationComponent);
    return CNGGeneralInformationComponent;
}());
exports.CNGGeneralInformationComponent = CNGGeneralInformationComponent;
//# sourceMappingURL=cng-general-information.component.js.map