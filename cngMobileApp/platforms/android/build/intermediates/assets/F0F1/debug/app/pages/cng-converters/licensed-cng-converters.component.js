"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LicensedCNGConvertersComponent = (function () {
    function LicensedCNGConvertersComponent(_router) {
        this._router = _router;
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
        this.approved = [
            {
                "id": "0",
                "name": "ANSA Automotive",
                "address": "Gaston Street, Chaguanas",
                "phoneNumber": "(868)672-0991/0995",
                "website": "www.ansaauto.com",
                "emailAddress": "(none)",
            },
            {
                "id": "1",
                "name": "Dumore Enterprises",
                "address": "St. Joseph Road, San Fernando",
                "phoneNumber": "(868)652-4440",
                "website": "www.dumore-enterprises.net",
                "emailAddress": "industrial@dumore-enterprises.com",
            }
        ];
        this.title = "CNG Converters";
    }
    LicensedCNGConvertersComponent.prototype.onLicensedItemTap = function (args) {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/licensedConverter/" + args.index]);
    };
    LicensedCNGConvertersComponent.prototype.onApprovedItemTap = function (args) {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/approvedConverter/" + args.index]);
    };
    LicensedCNGConvertersComponent = __decorate([
        core_1.Component({
            selector: "licensed-cng-converters",
            templateUrl: "pages/licensed-cng-converters/licensed-cng-converters.html",
            styleUrls: ["pages/licensed-cng-converters/licensed-cng-converters.css",
                "pages/licensed-cng-converters/licensed-cng-converters-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LicensedCNGConvertersComponent);
    return LicensedCNGConvertersComponent;
}());
exports.LicensedCNGConvertersComponent = LicensedCNGConvertersComponent;
//# sourceMappingURL=licensed-cng-converters.component.js.map