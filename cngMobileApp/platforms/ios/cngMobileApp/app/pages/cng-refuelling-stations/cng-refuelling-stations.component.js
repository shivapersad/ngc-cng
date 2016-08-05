"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CNGRefuellingStationsComponent = (function () {
    function CNGRefuellingStationsComponent(_router) {
        this._router = _router;
        //title: string;
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
        //this.title = "CNG Refuelling Stations (List)";
        console.log("Array size: " + this.arr.length);
    }
    CNGRefuellingStationsComponent.prototype.onItemTap = function (args) {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/station/" + args.index]);
    };
    CNGRefuellingStationsComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-refuelling-stations/cng-refuelling-stations.html",
            styleUrls: ["pages/cng-refuelling-stations/cng-refuelling-stations.css",
                "pages/cng-refuelling-stations/cng-refuelling-stations-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CNGRefuellingStationsComponent);
    return CNGRefuellingStationsComponent;
}());
exports.CNGRefuellingStationsComponent = CNGRefuellingStationsComponent;
//# sourceMappingURL=cng-refuelling-stations.component.js.map