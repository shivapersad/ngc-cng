import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventData} from "data/observable";
//var mapbox = require("nativescript-mapbox");

@Component({
    templateUrl: "pages/testing-area/testing-area.html",
    styleUrls: ["pages/testing-area/testing-area-common.css"]
})

export class TestingAreaComponent {

    title: string;

    constructor() {

    }

    /*
    constructor() {
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
            zoomLevel: 9, // 0 (most of the world) to 20, default 0
            showUserLocation: true, // default false
            hideAttribution: true, // default false
            hideLogo: true, // default false
            hideCompass: false, // default false
            disableRotation: false, // default false
            disableScroll: false, // default false
            disableZoom: false, // default false
            disableTilt: false, // default false
            markers: [
                {
                    lat: 52.3732160,
                    lng: 4.8941680,
                    title: 'Nice location',
                    subtitle: 'Really really nice location',
                    iconPath: 'res/markers/green_pin_marker.png',
                    onTap: function(){console.log("'Nice location' marker tapped");},
                    onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
                }
            ]
            }).then(
                function(result) {
                    console.log("Mapbox show done");
                },
                function(error) {
                    console.log("mapbox show error: " + error);
                }
            );
    }
    */
}