"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import {LocalPostService} from "./local-post-service";
var http = require("http");
var TestingAreaComponent = (function () {
    function TestingAreaComponent(_http) {
        this._http = _http;
        console.log("Testing Area Entered");
        http.getJSON("http://localhost:3000/localPosts").then(function (r) {
            console.log(JSON.stringify(r));
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });
    }
    TestingAreaComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/testing-area/testing-area.html",
            styleUrls: ["pages/testing-area/testing-area-common.css"]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TestingAreaComponent);
    return TestingAreaComponent;
}());
exports.TestingAreaComponent = TestingAreaComponent;
//# sourceMappingURL=testing-area.component.js.map