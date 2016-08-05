"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TestingAreaComponent = (function () {
    function TestingAreaComponent(_router) {
        this._router = _router;
        this.arr = [
            {
                "id": "0",
                "name": "Station 1",
                "address": "100 Broomhill Road, Chaguanas",
                "telephone": "(868)641-0001",
                "email": "station1@gmail.com",
                "facilities": {
                    "cng": "y",
                    "atm": "n",
                    "shop": "y",
                    "tyrePressure": "y"
                }
            },
            {
                "id": "1",
                "name": "Station 2",
                "address": "200 Broomhill Road, Chaguanas",
                "telephone": "(868)642-0001",
                "email": "station1@gmail.com",
                "facilities": {
                    "cng": "y",
                    "atm": "y",
                    "shop": "y",
                    "tyrePressure": "y"
                }
            },
            {
                "id": "2",
                "name": "Station 3",
                "address": "300 Broomhill Road, Chaguanas",
                "telephone": "(868)643-0001",
                "email": "station1@gmail.com",
                "facilities": {
                    "cng": "y",
                    "atm": "n",
                    "shop": "n",
                    "tyrePressure": "n"
                }
            }
        ];
        this.title = "CNG Refuelling Stations (List)";
        console.log("Array size: " + this.arr.length);
    }
    TestingAreaComponent.prototype.onItemTap = function (args) {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/station/" + args.index]);
    };
    TestingAreaComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/testing-area/testing-area.html",
            styleUrls: ["pages/testing-area/testing-area-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TestingAreaComponent);
    return TestingAreaComponent;
}());
exports.TestingAreaComponent = TestingAreaComponent;
//# sourceMappingURL=testing-area.component.js.map