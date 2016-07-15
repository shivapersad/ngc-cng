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