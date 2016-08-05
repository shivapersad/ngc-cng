import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ContactForm} from '../../../shared/interfaces'
import {EventData} from "data/observable";

@Component({
    templateUrl: "pages/cng-refuelling-stations/cng-refuelling-stations.html",
    styleUrls: ["pages/cng-refuelling-stations/cng-refuelling-stations.css", 
                "pages/cng-refuelling-stations/cng-refuelling-stations-common.css"]
})
export class CNGRefuellingStationsComponent {
    //title: string;

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

    constructor(private _router: Router) {
        //this.title = "CNG Refuelling Stations (List)";
        console.log("Array size: " + this.arr.length);

    }

    public onItemTap(args):void {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/station/" + args.index]);
    }
}