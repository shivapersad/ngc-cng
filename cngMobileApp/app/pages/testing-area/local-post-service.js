"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
var LocalPostService = (function () {
    function LocalPostService(_http) {
        this._http = _http;
        this.localPostUrl = 'localhost:3000/localPosts'; //URL to API
    }
    LocalPostService.prototype.getLocalPosts = function () {
        return this._http.get(this.localPostUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LocalPostService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    LocalPostService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LocalPostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LocalPostService);
    return LocalPostService;
}());
exports.LocalPostService = LocalPostService;
//# sourceMappingURL=local-post-service.js.map