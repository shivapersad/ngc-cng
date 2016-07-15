"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomepageComponent = (function () {
    function HomepageComponent(_router) {
        this._router = _router;
    }
    HomepageComponent.prototype.goToNews = function () {
        console.log("News pressed");
        this._router.navigate(["/news"]);
    };
    HomepageComponent.prototype.goToCNGGeneralInformation = function () {
        console.log("CNG General Information pressed");
        this._router.navigate(["/cng-general-information"]);
    };
    HomepageComponent.prototype.goToCNGSavingsCalculator = function () {
        console.log("CNG Savings Calculator pressed");
        this._router.navigate(["/cng-savings-calculator"]);
    };
    HomepageComponent.prototype.goToCO2EmissionsCalculator = function () {
        console.log("CO2 Emissions Calculator pressed");
        this._router.navigate(["/co2-emissions-calculator"]);
    };
    HomepageComponent.prototype.goToCNGRefuellingStations = function () {
        console.log("CNG Refuelling Stations pressed");
        this._router.navigate(["/cng-refuelling-stations"]);
    };
    HomepageComponent.prototype.goToLicensedCNGConverters = function () {
        console.log("Licensed CNG Converters pressed");
        this._router.navigate(["/licensed-cng-converters"]);
    };
    HomepageComponent.prototype.goToDealersForOEMCNGVehicles = function () {
        console.log("Dealers for OEM CNG Vehicles pressed");
        this._router.navigate(["/dealers-for-oem-cng-vehicles"]);
    };
    HomepageComponent.prototype.goToContactUs = function () {
        console.log("Contact Us pressed");
        this._router.navigate(["/contact-us"]);
    };
    // create folder structure and files
    HomepageComponent.prototype.goToAboutNGCCNG = function () {
        console.log("About NGC CNG pressed");
        this._router.navigate(["/about-ngc-cng"]);
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/home/homepage.html",
            styleUrls: ["pages/home/homepage-common.css", "pages/home/homepage.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map