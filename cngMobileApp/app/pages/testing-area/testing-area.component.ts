import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventData} from "data/observable";
import {Http, Headers} from "@angular/http";
import {LocalPost} from "../../../shared/interfaces";
import {Observable} from 'rxjs/Observable';
//import {LocalPostService} from "./local-post-service";
var http = require("http");

@Component({
    templateUrl: "pages/testing-area/testing-area.html",
    styleUrls: ["pages/testing-area/testing-area-common.css"]
    //directives: [LocalPostService]
})

export class TestingAreaComponent {

    title: string;

    constructor(private _http: Http) {
        console.log("Testing Area Entered");

        http.getJSON("http://localhost:3000/localPosts").then(function (r) {
            console.log(JSON.stringify(r));
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });   
    }

}