import {Component, OnDestroy} from "@angular/core";
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
    
    constructor () {
    
    }

    

    /*
    htmlPage;

    constructor() {
                
        this.htmlPage = `
        <html>
            <head>
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <script type="text/javascript">
                google.charts.load('current', {'packages':['corechart']});
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                    var data = google.visualization.arrayToDataTable([
                    ['Year', 'Sales', 'Expenses'],
                    ['2004',  1000,      400],
                    ['2005',  1170,      460],
                    ['2006',  660,       1120],
                    ['2007',  1030,      540]
                    ]);

                    var options = {
                    title: 'Company Performance',
                    curveType: 'function',
                    legend: { position: 'bottom' }
                    };

                    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

                    chart.draw(data, options);
                }
                </script>
            </head>
            <body>
                <div id="curve_chart" style="width: 80%; height: 50%"></div>
            </body>
        </html>
        `;
        console.log("HTML: " + this.htmlPage);
    }
    */

    /*
    title: string;
    newsItems: any;
    */

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