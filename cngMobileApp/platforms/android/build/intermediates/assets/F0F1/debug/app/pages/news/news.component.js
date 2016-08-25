"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http = require("http");
var NewsComponent = (function () {
    function NewsComponent(_http) {
        this._http = _http;
        this.title = "News";
    }
    NewsComponent.prototype.ngOnInit = function () {
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
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: "news",
            templateUrl: "pages/news/news.html",
            styleUrls: ["pages/news/news.css"]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map