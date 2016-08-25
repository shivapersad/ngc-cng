import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
var http = require("http");

@Component({
    selector: "news",
    templateUrl: "pages/news/news.html",
    styleUrls: ["pages/news/news.css"]
})
export class NewsComponent implements OnInit{

    title: string;
    //localNewsItems: any;
    internationalNewsItems: any;

    constructor (private _http: Http) {

        this.title = "News"; 

    }

    ngOnInit() {

        http.getJSON("http://localhost:3000/mobile/localPosts").then(function (r) {
            console.log("Local News Items:" + JSON.stringify(r));
            //this.localNewsItems = JSON.stringify(r);
            //console.log("Local News Items: " + this.localNewsItems);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        }); 

        http.getJSON("http://localhost:3000/mobile/internationalPosts").then(function (r) {
            console.log("International News Items: " + JSON.stringify(r));
            //this.internationalNewsItems = JSON.stringify(r);
            //console.log("International News Items: " + this.internationalNewsItems);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });
        
    }
    
    /*
    constructor(private _http: Http) {
        console.log("Testing Area Entered");

        http.getJSON("http://localhost:3000/mobile/localPosts").then(function (r) {
            console.log(JSON.stringify(r));
            this.newsItems = JSON.stringify(r);
            console.log("News Items: " + this.newsItems);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });   
    }*/

}