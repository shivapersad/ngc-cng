import {Component} from "@angular/core";
import dialogs = require("ui/dialogs");
import {Router} from "@angular/router";
import {ContactForm} from "./contactForm";
var validator = require('validator');

@Component({
    templateUrl: "pages/contact-us/contact-us.html",
    styleUrls: ["pages/contact-us/contact-us.css", "pages/contact-us/contact-us-common.css"]
})
export class ContactUsComponent {
    
    title: string = "Contact Us"; // Title for the page
    contactForm: ContactForm;
    
    firstName: string; // First Name from form
    lastName: string; // Last Name from form
    emailAddress: string; // Email Address from form
    subject: string; // Subject from form
    content: string; // Questions/Comments from form
    
    //Constructor for component
    //Sets all component variables to empty and passes a router instance
    constructor(private _router: Router) {

        this.contactForm = new ContactForm();
        this.contactForm.firstName = "";
        this.contactForm.lastName = "";
        this.contactForm.emailAddress = "";
        this.contactForm.subject = "";
        this.contactForm.content = "";

        /*
        this.firstName = "John";
        this.lastName = "Doe";
        this.emailAddress = "john.doe@tester.com";
        this.subject = "";
        this.content = "tester123214 @!#!@";
        */
    }

    // Function: sendContactForm
    // Parameters: none
    // Used to construct an email to be sent to info@cng.co.tt
    sendContactForm(): void {

        switch (this.validateContactForm()) {

            case 0: {

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

            case 1: this.createDialog("Information - First Name", "Please enter letters only.", "Ok");
            break;

            case 2: this.createDialog("Information - First Name", "Please enter your First Name.", "Ok");
            break;

            case 3: this.createDialog("Information - Last Name", "Please enter your Last Name.", "Ok");
            break;

            case 4: this.createDialog("Information - Last Name", "Please enter letters only.", "Ok");
            break;

            case 5: this.createDialog("Information - E-mail Address", "Please enter a valid e-mail address.", "Ok");
            break;

            case 6: this.createDialog("Information - E-mail Address", "Please enter an e-mail address.", "Ok");
            break;

            case 7: this.createDialog("Information - Questions/Comments", "Please enter your Questions/Comments.", "Ok");
            break;

            default: console.log("Something went wrong."); 
            break;

        }

    }

    // Function: clearForm
    // Paramters: none
    // Clears the inputs from the Contact Form
    clearForm(): void {
        console.log("Clearing form");

        this.contactForm.firstName = "";
        this.contactForm.lastName = "";
        this.contactForm.emailAddress = "";
        this.contactForm.subject = "";
        this.contactForm.content = "";

        /*
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
        this.subject = "";
        this.content = "";
        */
    }

    validateContactForm(): number {
        
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
    }

    // Function createDialog
    // Parameters: titleTxt, messageTxt, buttonTxt
    // Creates a Dialog Box with the parameters given
    createDialog(titleTxt, messageTxt, buttonTxt): void {
        dialogs.alert({
            title: titleTxt,
            message: messageTxt,
            okButtonText: buttonTxt
        })
    }

    submitDialog(titleTxt, messageTxt, buttonTxt): void {
        dialogs.alert({
            title: titleTxt,
            message: messageTxt,
            okButtonText: buttonTxt
        })
        .then(()=> {
            console.log("Dialog closed!");
            this._router.navigate(["/"]);
        });
    }


}