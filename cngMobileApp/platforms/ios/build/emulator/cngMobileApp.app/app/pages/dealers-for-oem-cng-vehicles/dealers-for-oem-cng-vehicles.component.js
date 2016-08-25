"use strict";
var core_1 = require("@angular/core");
var DealersForOEMCNGVehiclesComponent = (function () {
    function DealersForOEMCNGVehiclesComponent() {
        this.dealers = [
            {
                "name": "Honda City CNG",
                "website": "www.cng.city"
            }
        ];
        this.title = "Dealers for OEM CNG Vehicles";
        this.dealer = this.dealers[0];
    }
    DealersForOEMCNGVehiclesComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.html",
            styleUrls: ["pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], DealersForOEMCNGVehiclesComponent);
    return DealersForOEMCNGVehiclesComponent;
}());
exports.DealersForOEMCNGVehiclesComponent = DealersForOEMCNGVehiclesComponent;
//# sourceMappingURL=dealers-for-oem-cng-vehicles.component.js.map