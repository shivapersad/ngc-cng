"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var router_1 = require("@angular/router");
//import {ContactForm} from "./shared/contact-us/contactForm";
var ContactUsComponent = (function () {
    //Constructor for component
    //Sets all component variables to empty and passes a router instance
    function ContactUsComponent(_router) {
        this._router = _router;
        this.title = "Contact Us"; // Title for the page
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
        this.subject = "";
        this.content = "";
    }
    // Function: sendContactForm
    // Parameters: none
    // Used to construct an email to be sent to info@cng.co.tt
    ContactUsComponent.prototype.sendContactForm = function () {
        console.log("Submit pressed");
        console.log("First Name: " + this.firstName);
        console.log("Last Name: " + this.lastName);
        console.log("Email Address: " + this.emailAddress);
        console.log("Subject: " + this.subject);
        console.log("Content: " + this.content);
        this.createDialog("Thank you!", "Thank you for your submission", "Ok");
        //this.clearForm();
    };
    // Function: clearForm
    // Paramters: none
    // Clears the inputs from the Contact Form
    ContactUsComponent.prototype.clearForm = function () {
        console.log("Clearing form");
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
        this.subject = "";
        this.content = "";
    };
    // Function createDialog
    // Parameters: titleTxt, messageTxt, buttonTxt
    // Creates a Dialog Box with the parameters given
    ContactUsComponent.prototype.createDialog = function (titleTxt, messageTxt, buttonTxt) {
        var _this = this;
        dialogs.alert({
            title: titleTxt,
            message: messageTxt,
            okButtonText: buttonTxt
        }).then(function () {
            console.log("Dialog closed!");
            _this._router.navigate(["/"]);
        });
    };
    ContactUsComponent = __decorate([
        core_1.Component({
            selector: "contact-us",
            templateUrl: "pages/contact-us/contact-us.html",
            styleUrls: ["pages/contact-us/contact-us.css", "pages/contact-us/contact-us-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contact-us.component.js.map