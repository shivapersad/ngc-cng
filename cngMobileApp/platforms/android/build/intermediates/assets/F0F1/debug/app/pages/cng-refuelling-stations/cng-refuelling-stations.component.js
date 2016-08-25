"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mapbox = require("nativescript-mapbox");
var platform = require("platform");
var isIOS = platform.device.os === platform.platformNames.ios;
var CNGRefuellingStationsComponent = (function () {
    function CNGRefuellingStationsComponent(_router) {
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
                }
            }
        ];
        this.title = "CNG Refuelling Stations";
        this.showMap = false;
    }
    CNGRefuellingStationsComponent.prototype.onItemTap = function (args) {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/station/" + args.index]);
    };
    CNGRefuellingStationsComponent.prototype.tabIndexChanged = function (e) {
        switch (e.newIndex) {
            case 0:
                console.log("Selected tab index: " + e.newIndex);
                if (this.showMap == true) {
                    this.hide();
                    this.showMap = false;
                }
                break;
            case 1:
                this.doShow();
                this.showMap = true;
                break;
            default:
                break;
        }
    };
    CNGRefuellingStationsComponent.prototype.ngOnDestroy = function () {
        if (this.showMap == true) {
            this.hide();
        }
    };
    CNGRefuellingStationsComponent.prototype.hide = function () {
        mapbox.hide();
    };
    CNGRefuellingStationsComponent.prototype.doShow = function () {
        mapbox.show({
            accessToken: 'pk.eyJ1Ijoic2hpdmFwZXJzYWQiLCJhIjoiY2lyaHM5bG1vMDA0OWlkbWg3ZDlrYjl0aSJ9.lmF0Q3Vk4t2541AEWMFJPA',
            style: 'emerald',
            margins: {
                left: 50,
                right: 50,
                top: 130,
                bottom: 60 // default 0 
            },
            center: {
                lat: 10.6918,
                lng: -61.2225
            },
            zoomLevel: 7.5,
            showUserLocation: true,
            hideAttribution: false,
            hideLogo: false,
            hideCompass: false,
            disableRotation: false,
            disableScroll: false,
            disableZoom: false,
            markers: [
                {
                    'lat': 10.6452458,
                    'lng': -61.4876236,
                    'title': 'NP Beetham, Beetham Highway, Sea Lots',
                    'subtitle': 'Operational' // one line is available on iOS, multiple on Android
                },
                {
                    'lat': 10.6449449,
                    'lng': -61.4689136,
                    'title': 'Jai Ramcharan, Barataria Roundabout, Barataria',
                    'subtitle': 'Operational' // one line is available on iOS, multiple on Android   
                },
                {
                    'lat': 10.568378,
                    'lng': -61.415301,
                    'title': 'NP Munroe Rd',
                    'subtitle': 'Coming Soon' // one line is available on iOS, multiple on Android   
                }
            ]
        }).then(function (result) { }, function (error) { });
    };
    CNGRefuellingStationsComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-refuelling-stations/cng-refuelling-stations.html",
            styleUrls: ["pages/cng-refuelling-stations/cng-refuelling-stations.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CNGRefuellingStationsComponent);
    return CNGRefuellingStationsComponent;
}());
exports.CNGRefuellingStationsComponent = CNGRefuellingStationsComponent;
//# sourceMappingURL=cng-refuelling-stations.component.js.map