"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ApprovedConverterComponent = (function () {
    function ApprovedConverterComponent(route) {
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
        this.title = "Approved CNG Converters";
        this.id = route.snapshot.params['id'];
        //console.log("Licensed ID: " + this.id);
        this.approvedConverter = this.searchID(this.id);
        this.name = "Company Name: " + this.approvedConverter['name'];
        this.address = "Address: " + this.approvedConverter['address'];
        this.phoneNumber = "Phone Number: " + this.approvedConverter['phoneNumber'];
        this.website = "Website: " + this.approvedConverter['website'];
        this.emailAddress = "Email Address: " + this.approvedConverter['emailAddress'];
        //console.log("Object: " + this.licensedConverter);
        //console.log("Name: " + this.approvedConverter['name']);
    }
    ApprovedConverterComponent.prototype.searchID = function (id) {
        for (var i = 0; i < this.approved.length; i++) {
            if (this.approved[i].id === id.toString()) {
                return this.approved[i];
            }
        }
    };
    ApprovedConverterComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/cng-converters/approved-converter/approved-converter.html",
            styleUrls: ["pages/cng-converters/approved-converter/approved-converter.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ApprovedConverterComponent);
    return ApprovedConverterComponent;
}());
exports.ApprovedConverterComponent = ApprovedConverterComponent;
//# sourceMappingURL=approved-converter.component.js.map