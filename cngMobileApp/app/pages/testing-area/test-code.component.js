"use strict";
var core_1 = require("@angular/core");
var TestCodeComponent = (function () {
    function TestCodeComponent() {
        this.items = [
            "Diesel ($1.98)",
            "Super ($3.58)",
            "Premium ($5.75)"
        ];
        this.cngCost = 1;
    }
    TestCodeComponent.prototype.add = function () {
        if ((this.cngCost >= 1) && (this.cngCost < 3)) {
            this.cngCost = (Math.round(this.cngCost * 100) / 100) + (0.05);
        }
        console.log("CNG Cost: " + this.cngCost);
    };
    TestCodeComponent.prototype.subtract = function () {
        if ((this.cngCost > 1) && (this.cngCost <= 3)) {
            this.cngCost = (Math.round(this.cngCost * 100) / 100) - (0.05);
        }
        console.log("CNG Cost: " + this.cngCost);
    };
    TestCodeComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/testing-area/test-code.component.html",
            styleUrls: ["pages/testing-area/testing-area.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], TestCodeComponent);
    return TestCodeComponent;
}());
exports.TestCodeComponent = TestCodeComponent;
//# sourceMappingURL=test-code.component.js.map