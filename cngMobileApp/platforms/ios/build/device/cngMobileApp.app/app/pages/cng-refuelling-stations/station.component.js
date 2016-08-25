/*
NOTES
Able to retrieve information from the Array

*/
"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var StationComponent = (function () {
    function StationComponent(route) {
        this.arr = [
            {
                "id": "0",
                "name": "Station 1",
                "address": "100 Broomhill Road, Chaguanas",
                "telephone": "(868)641-0001",
                "email": "station1@gmail.com",
                "facilities": {
                    "cng": "n",
                    "atm": "n",
                    "shop": "y",
                }
            },
            {
                "id": "1",
                "name": "Station 2",
                "address": "200 Broomhill Road, Chaguanas",
                "telephone": "(868)642-0001",
                "email": "station2@gmail.com",
                "facilities": {
                    "cng": "y",
                    "atm": "y",
                    "shop": "y",
                }
            },
            {
                "id": "2",
                "name": "Station 3",
                "address": "300 Broomhill Road, Chaguanas",
                "telephone": "(868)643-0001",
                "email": "station3@gmail.com",
                "facilities": {
                    "cng": "y",
                    "atm": "n",
                    "shop": "n",
                }
            }
        ];
        this.id = route.snapshot.params['id'];
    }
    StationComponent.prototype.ngOnInit = function () {
        this.station = this.searchID(this.id);
        this.title = this.station['name'];
        this.facilities = this.station['facilities'];
        if (this.facilities['cng'] === "y") {
            this.imgCNG = 'res://cng_icon';
        }
        else {
            this.imgCNG = 'res://not_available';
        }
        if (this.facilities['atm'] === "y") {
            this.imgATM = "res://atm_icon";
        }
        else {
            this.imgATM = "res://not_available";
        }
        if (this.facilities['shop'] === "y") {
            this.imgShop = "res://shop_icon";
        }
        else {
            this.imgShop = "res://not_available";
        }
    };
    StationComponent.prototype.searchID = function (id) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id === id.toString()) {
                return this.arr[i];
            }
        }
    };
    StationComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-refuelling-stations/station.html",
            styleUrls: ["pages/cng-refuelling-stations/station.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], StationComponent);
    return StationComponent;
}());
exports.StationComponent = StationComponent;
//# sourceMappingURL=station.component.js.map