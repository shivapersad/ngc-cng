/*
NOTES
Able to retrieve information from the Array

*/


import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {ContactForm} from '../../../shared/interfaces'
import {EventData} from "data/observable";

@Component({
    templateUrl: "pages/cng-refuelling-stations/station.html",
    styleUrls: ["pages/cng-refuelling-stations/station.css"]
})

export class StationComponent implements OnInit{

    title: string;
    id: number;
    station: Array<any>;
    facilities: Array<any>;
    imgCNG: string;
    imgATM: string;
    imgShop: string;

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
            }
        },
        {
            "id" : "1",
            "name" : "Station 2",
            "address" : "200 Broomhill Road, Chaguanas",
            "telephone" : "(868)642-0001",
            "email" : "station2@gmail.com",
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
            "email" : "station3@gmail.com",
            "facilities" : {
                "cng" : "y",
                "atm" : "n",
                "shop" : "n",
            }
        }

    ];

    constructor(route: ActivatedRoute) {
        
        this.id = route.snapshot.params['id'];

    }

    ngOnInit() {

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

    }

    searchID(id: number) : Array<any> {
        
        for (var i = 0 ; i < this.arr.length ; i++) {
            if (this.arr[i].id === id.toString()) {
                return this.arr[i];
            }
        }

    }

}