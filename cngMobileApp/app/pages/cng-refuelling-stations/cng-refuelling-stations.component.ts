import {Component, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {ContactForm} from '../../../shared/interfaces'
import {EventData} from "data/observable";
var mapbox = require("nativescript-mapbox");
var platform = require("platform");
var isIOS = platform.device.os === platform.platformNames.ios;

@Component({
    templateUrl: "pages/cng-refuelling-stations/cng-refuelling-stations.html",
    styleUrls: ["pages/cng-refuelling-stations/cng-refuelling-stations.css"]
})
export class CNGRefuellingStationsComponent implements OnDestroy {
    
    title: string;

    showMap: boolean;
    arr: Array<any> = [
        
        {
            "id" : "0",
            "name" : "Station 1",
            "address" : "100 Broomhill Road, Chaguanas",
            "telephone" : "(868)641-0001",
            "email" : "station1@gmail.com",
            "facilities" : {
                "cng" : "y",
                "atm" : "n",
                "shop" : "y",
            }
        },
        {
            "id" : "1",
            "name" : "Station 2",
            "address" : "200 Broomhill Road, Chaguanas",
            "telephone" : "(868)642-0001",
            "email" : "station1@gmail.com",
            "facilities" : {
                "cng" : "y",
                "atm" : "y",
                "shop" : "y",
            }
        },
        {
            "id" : "2",
            "name" : "Station 3",
            "address" : "300 Broomhill Road, Chaguanas",
            "telephone" : "(868)643-0001",
            "email" : "station1@gmail.com",
            "facilities" : {
                "cng" : "y",
                "atm" : "n",
                "shop" : "n",
            }
        }

    ];

    constructor(private _router: Router) {

        this.title = "CNG Refuelling Stations";
        this.showMap = false;

    }
    
    public onItemTap(args):void {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/station/" + args.index]);
    }

    public tabIndexChanged(e: any) {
        switch (e.newIndex) {
            case 0:
                console.log(`Selected tab index: ${e.newIndex}`);
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
    }

    ngOnDestroy() {
        if (this.showMap == true) {
            this.hide();
        } 
    }
    
    hide() {
        mapbox.hide();
    }

    doShow() {
        mapbox.show({
            accessToken: 'pk.eyJ1Ijoic2hpdmFwZXJzYWQiLCJhIjoiY2lyaHM5bG1vMDA0OWlkbWg3ZDlrYjl0aSJ9.lmF0Q3Vk4t2541AEWMFJPA', // see 'Prerequisites' above 
            style: 'emerald', // light|dark|emerald|satellite|streets , default 'streets' (there is also 'hybrid' for Android) 
            margins: {
            left: 50, // default 0 
            right: 50, // default 0 
            top: 100, // default 0 
            bottom: 50 // default 0 
            },
            center: { // optional without a default 
            lat: 10.6918,
            lng: -61.2225
            },
            zoomLevel: 7.5, // 0-20, default 0 
            showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them 
            hideAttribution: false, // default false, Mapbox requires this default if you're on a free plan 
            hideLogo: false, // default false, Mapbox requires this default if you're on a free plan 
            hideCompass: false, // default false 
            disableRotation: false, // default false 
            disableScroll: false, // default false 
            disableZoom: false, // default false 
            markers: [ // optional without a default 
            {
                'lat': 10.6452458, //mandatory
                'lng': -61.4876236, //mandatory
                'title': 'NP Beetham, Beetham Highway, Sea Lots', //recommended to pass in
                'subtitle': 'Operational' // one line is available on iOS, multiple on Android
            },
            {
                'lat': 10.6449449, //mandatory
                'lng': -61.4689136, //mandatory
                'title': 'Jai Ramcharan, Barataria Roundabout, Barataria', //recommended to pass in
                'subtitle': 'Operational' // one line is available on iOS, multiple on Android   
            },
            {
                'lat': 10.568378, //mandatory
                'lng': -61.415301, //mandatory
                'title': 'NP Munroe Rd', //recommended to pass in
                'subtitle': 'Coming Soon' // one line is available on iOS, multiple on Android   
            }
            ]
        }).then(
            function(result) {},
            function(error) {}
        )
    }
}