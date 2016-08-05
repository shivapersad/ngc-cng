import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {ContactForm} from '../../../shared/interfaces'
import {EventData} from "data/observable";

@Component({
    templateUrl: "pages/testing-area/station.html",
    styleUrls: ["pages/testing-area/station-common.css"]
})

export class StationComponent {

    title: string;
    id: number;
    station: Array<any>;
    facilities: Array<any>;
    cng: boolean;
    atm: boolean;
    shop: boolean;
    tyrePressure: boolean;
    imgCNG: string;
    imgATM: string;
    imgShop: string;
    imgTyrePressure: string;

    arr: Array<any> = [

        {
            "id" : "0",
            "name" : "Station 1",
            "address" : "100 Broomhill Road, Chaguanas",
            "telephone" : "(868)641-0001",
            "email" : "station1@gmail.com",
            "facilities" : {
                "cng" : "n",
                "atm" : "n",
                "shop" : "y",
                "tyrePressure" : "y"
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
                "tyrePressure" : "y"
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
                "tyrePressure" : "n"
            }
        }

    ];

    constructor(route: ActivatedRoute) {
        this.id = route.snapshot.params['id'];
        console.log("Id: " + this.id);

        this.station = this.searchID(this.id);
        console.log("Station Name: " + this.station['name']);

        this.title = this.station['name'];
        //console.log("Array size: " + this.arr.length);

        this.cng = false;
        this.atm = false;
        this.shop = false;
        this.tyrePressure = false;

        this.facilities = this.station['facilities'];
        
        console.log("Facilities[cng]: " + this.facilities['cng']);
        console.log("Facilities[atm]: " + this.facilities['atm']);
        console.log("Facilities[shop]: " + this.facilities['shop']);
        console.log("Facilities[tyrePressure]: " + this.facilities['tyrePressure']);

        if (this.facilities['cng'] === "y") {
            this.cng = true;
            this.imgCNG = "res://homepage";
        }
        else {
            this.imgCNG = "res://notAvailable";
            console.log("CNG Image: " + this.imgCNG);
        }

        if (this.facilities['atm'] === "y") {
            this.atm = true;
            this.imgATM = "res://homepage";
        }
        else {
            this.imgATM = "res://notAvailable";
            console.log("ATM Image: " + this.imgATM);
        }

        if (this.facilities['shop'] === "y") {
            this.shop = true;
            this.imgShop = "res://homepage";
        }
        else {
            this.imgShop = "res://notAvailable";
            console.log("Shop Image: " + this.imgShop);
        }

        if (this.facilities['tyrePressure'] === "y") {
            this.tyrePressure = true;
            this.imgTyrePressure = "res://homepage";
        }
        else {
            this.imgTyrePressure = "res://notAvailable";
            console.log("Tyre Pressure Image: " + this.imgTyrePressure);
        }

        console.log("CNG: " + this.cng);
        console.log("ATM: " + this.atm);
        console.log("Shop: " + this.shop);
        console.log("Tyre Pressure: " + this.tyrePressure);

    }

    searchID(id: number) : Array<any> {
        
        for (var i = 0 ; i < this.arr.length ; i++) {
            if (this.arr[i].id === id.toString()) {
                return this.arr[i];
            }
        }

    }



}