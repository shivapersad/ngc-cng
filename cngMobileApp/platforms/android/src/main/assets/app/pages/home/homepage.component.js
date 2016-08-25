"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomepageComponent = (function () {
    function HomepageComponent(_router) {
        this._router = _router;
        this.title = "NGC CNG";
    }
    HomepageComponent.prototype.goToNews = function () {
        this._router.navigate(["/news"]);
    };
    HomepageComponent.prototype.goToCNGGeneralInformation = function () {
        this._router.navigate(["/cng-general-information"]);
    };
    HomepageComponent.prototype.goToCNGSavingsCalculator = function () {
        this._router.navigate(["/cng-savings-calculator"]);
    };
    HomepageComponent.prototype.goToCO2EmissionsCalculator = function () {
        this._router.navigate(["/co2-emissions-calculator"]);
    };
    HomepageComponent.prototype.goToCNGRefuellingStations = function () {
        this._router.navigate(["/cng-refuelling-stations"]);
    };
    HomepageComponent.prototype.goToCNGConverters = function () {
        console.log("CNG Converters pressed");
        this._router.navigate(["/cng-converters"]);
    };
    HomepageComponent.prototype.goToDealersForOEMCNGVehicles = function () {
        this._router.navigate(["/dealers-for-oem-cng-vehicles"]);
    };
    HomepageComponent.prototype.goToContactUs = function () {
        this._router.navigate(["/contact-us"]);
    };
    HomepageComponent.prototype.goToAboutNGCCNG = function () {
        this._router.navigate(["/about-ngc-cng"]);
    };
    HomepageComponent.prototype.goToTesting = function () {
        console.log("Testing Area pressed");
        this._router.navigate(["/testing-area"]);
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/home/homepage.html",
            styleUrls: ["pages/home/homepage.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map