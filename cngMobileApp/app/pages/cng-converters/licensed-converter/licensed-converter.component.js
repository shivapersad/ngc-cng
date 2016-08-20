"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LicensedConverterComponent = (function () {
    function LicensedConverterComponent(route) {
        this.licensed = [
            {
                "id": "0",
                "name": "Massy ACL",
                "address": "OMeara Industrial Estate",
                "phoneNumber": "(868)642-4236",
                "website": "www.nmmotors.com",
                "emailAddress": "marketing@nmmotors.com"
            }
        ];
        this.title = "Licensed CNG Converters";
        this.id = route.snapshot.params['id'];
        //console.log("Licensed ID: " + this.id);
        this.licensedConverter = this.searchID(this.id);
        //console.log("Object: " + this.licensedConverter);
        //console.log("Name: " + this.licensedConverter['name']);
    }
    LicensedConverterComponent.prototype.searchID = function (id) {
        for (var i = 0; i < this.licensed.length; i++) {
            if (this.licensed[i].id === id.toString()) {
                return this.licensed[i];
            }
        }
    };
    LicensedConverterComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-converters/licensed-converter/licensed-converter.html",
            styleUrls: ["pages/cng-converters/licensed-converter/licensed-converter-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], LicensedConverterComponent);
    return LicensedConverterComponent;
}());
exports.LicensedConverterComponent = LicensedConverterComponent;
//# sourceMappingURL=licensed-converter.component.js.map