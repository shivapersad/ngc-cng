"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var CNGConverterService = (function () {
    function CNGConverterService(_http) {
        this._http = _http;
        this._converterUrl = './licensed-cng-converters.json';
    }
    CNGConverterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CNGConverterService);
    return CNGConverterService;
}());
exports.CNGConverterService = CNGConverterService;
//# sourceMappingURL=cng-converter.service.js.map