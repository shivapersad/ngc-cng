"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CNGGeneralInformationComponent = (function () {
    function CNGGeneralInformationComponent(_router) {
        this._router = _router;
        this.title = "CNG General Information";
    }
    CNGGeneralInformationComponent.prototype.goToWhatIsCNG = function () {
        this._router.navigate(["/what-is-cng"]);
    };
    CNGGeneralInformationComponent.prototype.goToHowDoesCNGWork = function () {
        this._router.navigate(["/how-does-cng-work"]);
    };
    CNGGeneralInformationComponent.prototype.goToCNGBetterThanGasoline = function () {
        this._router.navigate(["/cng-better-than-gasoline"]);
    };
    CNGGeneralInformationComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-general-information/cng-general-information.html",
            styleUrls: ["pages/cng-general-information/cng-general-information.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CNGGeneralInformationComponent);
    return CNGGeneralInformationComponent;
}());
exports.CNGGeneralInformationComponent = CNGGeneralInformationComponent;
//# sourceMappingURL=cng-general-information.component.js.map