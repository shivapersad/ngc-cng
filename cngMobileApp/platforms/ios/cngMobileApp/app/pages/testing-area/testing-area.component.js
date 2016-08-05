"use strict";
var core_1 = require("@angular/core");
var mapbox = require("nativescript-mapbox");
var TestingAreaComponent = (function () {
    function TestingAreaComponent() {
        this.title = "Testing Area";
        var accessToken = 'pk.eyJ1Ijoic2hpdmFwZXJzYWQiLCJhIjoiY2lyaHNhczlrMDA0bGo3bTV5NDN3ZWxmdiJ9.S9s8AXgyuKhXiLbV5dR7KQ';
        mapbox.show({
            accessToken: accessToken,
            style: mapbox.MapStyle.OUTDOORS,
            margins: {
                left: 32,
                right: 32,
                top: 300,
                bottom: 50
            },
            center: {
                lat: 52.3702160,
                lng: 4.8951680
            },
            zoomLevel: 9,
            showUserLocation: true,
            hideAttribution: true,
            hideLogo: true,
            hideCompass: false,
            disableRotation: false,
            disableScroll: false,
            disableZoom: false,
            disableTilt: false,
            markers: [
                {
                    lat: 52.3732160,
                    lng: 4.8941680,
                    title: 'Nice location',
                    subtitle: 'Really really nice location',
                    iconPath: 'res/markers/green_pin_marker.png',
                    onTap: function () { console.log("'Nice location' marker tapped"); },
                    onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
                }
            ]
        }).then(function (result) {
            console.log("Mapbox show done");
        }, function (error) {
            console.log("mapbox show error: " + error);
        });
    }
    TestingAreaComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/testing-area/testing-area.html",
            styleUrls: ["pages/testing-area/testing-area-common.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], TestingAreaComponent);
    return TestingAreaComponent;
}());
exports.TestingAreaComponent = TestingAreaComponent;
//# sourceMappingURL=testing-area.component.js.map