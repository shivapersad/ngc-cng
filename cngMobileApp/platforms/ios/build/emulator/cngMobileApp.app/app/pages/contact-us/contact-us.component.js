"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var router_1 = require("@angular/router");
var contactForm_1 = require("./contactForm");
var validator = require('validator');
var ContactUsComponent = (function () {
    //Constructor for component
    //Sets all component variables to empty and passes a router instance
    function ContactUsComponent(_router) {
        this._router = _router;
        this.title = "Contact Us"; // Title for the page
        this.contactForm = new contactForm_1.ContactForm();
        this.contactForm.firstName = "";
        this.contactForm.lastName = "";
        this.contactForm.emailAddress = "";
        this.contactForm.subject = "";
        this.contactForm.content = "";
    }
    // Function: sendContactForm
    // Parameters: none
    // Used to construct an email to be sent to info@cng.co.tt
    ContactUsComponent.prototype.sendContactForm = function () {
        switch (this.validateContactForm()) {
            case 0:
                {
                    console.log("Submit pressed");
                    console.log("First Name: " + this.contactForm.firstName);
                    console.log("Last Name: " + this.contactForm.lastName);
                    console.log("Email Address: " + this.contactForm.emailAddress);
                    if (this.contactForm.subject.length == 0) {
                        console.log("Subject: (none)");
                    }
                    else {
                        console.log("Subject: " + this.contactForm.subject);
                    }
                    console.log("Content: " + this.contactForm.content);
                    this.submitDialog("Thank you!", "Thank you for your submission", "Ok");
                }
                break;
            case 1:
                this.createDialog("Information - First Name", "Please enter letters only.", "Ok");
                break;
            case 2:
                this.createDialog("Information - First Name", "Please enter your First Name.", "Ok");
                break;
            case 3:
                this.createDialog("Information - Last Name", "Please enter your Last Name.", "Ok");
                break;
            case 4:
                this.createDialog("Information - Last Name", "Please enter letters only.", "Ok");
                break;
            case 5:
                this.createDialog("Information - E-mail Address", "Please enter a valid e-mail address.", "Ok");
                break;
            case 6:
                this.createDialog("Information - E-mail Address", "Please enter an e-mail address.", "Ok");
                break;
            case 7:
                this.createDialog("Information - Questions/Comments", "Please enter your Questions/Comments.", "Ok");
                break;
            default:
                console.log("Something went wrong.");
                break;
        }
    };
    // Function: clearForm
    // Paramters: none
    // Clears the inputs from the Contact Form
    ContactUsComponent.prototype.clearForm = function () {
        this.contactForm.firstName = "";
        this.contactForm.lastName = "";
        this.contactForm.emailAddress = "";
        this.contactForm.subject = "";
        this.contactForm.content = "";
    };
    ContactUsComponent.prototype.validateContactForm = function () {
        if (this.contactForm.firstName.length > 0) {
            if (!validator.isAlpha(this.contactForm.firstName))
                return 1; // firstName contains numbers or special characters
        }
        else {
            return 2; // firstName left blank
        }
        if (this.contactForm.lastName.length > 0) {
            if (!validator.isAlpha(this.contactForm.lastName))
                return 3; // lastName contains numbers of special characters
        }
        else {
            return 4; // lastName left blank
        }
        if (this.contactForm.emailAddress.length > 0) {
            if (!validator.isEmail(this.contactForm.emailAddress))
                return 5; // emailAddress is not a valid Email Address
        }
        else {
            return 6; // emailAddress left blank
        }
        if (this.contactForm.content.length == 0) {
            return 7; // content left blank
        }
        return 0;
    };
    // Function createDialog
    // Parameters: titleTxt, messageTxt, buttonTxt
    // Creates a Dialog Box with the parameters given
    ContactUsComponent.prototype.createDialog = function (titleTxt, messageTxt, buttonTxt) {
        dialogs.alert({
            title: titleTxt,
            message: messageTxt,
            okButtonText: buttonTxt
        });
    };
    ContactUsComponent.prototype.submitDialog = function (titleTxt, messageTxt, buttonTxt) {
        var _this = this;
        dialogs.alert({
            title: titleTxt,
            message: messageTxt,
            okButtonText: buttonTxt
        })
            .then(function () {
            _this._router.navigate(["/"]);
        });
    };
    ContactUsComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/contact-us/contact-us.html",
            styleUrls: ["pages/contact-us/contact-us.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contact-us.component.js.map