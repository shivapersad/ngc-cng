import {Component} from "@angular/core";
import dialogs = require("ui/dialogs");
import {Router} from "@angular/router";
//import {ContactForm} from "./shared/contact-us/contactForm";

@Component({
    selector: "contact-us",
    templateUrl: "pages/contact-us/contact-us.html",
    styleUrls: ["pages/contact-us/contact-us.css", "pages/contact-us/contact-us-common.css"]
})
export class ContactUsComponent {
    
    title: string = "Contact Us"; // Title for the page
    firstName: string; // First Name from form
    lastName: string; // Last Name from form
    emailAddress: string; // Email Address from form
    subject: string; // Subject from form
    content: string; // Questions/Comments from form
    
    //Constructor for component
    //Sets all component variables to empty and passes a router instance
    constructor(private _router: Router) {
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
        this.subject = "";
        this.content = "";
    }

    // Function: sendContactForm
    // Parameters: none
    // Used to construct an email to be sent to info@cng.co.tt
    sendContactForm() {
        console.log("Submit pressed");
        console.log("First Name: " + this.firstName);
        console.log("Last Name: " + this.lastName);
        console.log("Email Address: " + this.emailAddress);
        console.log("Subject: " + this.subject);
        console.log("Content: " + this.content);
        this.createDialog("Thank you!", "Thank you for your submission", "Ok");
        //this.clearForm();
    }

    // Function: clearForm
    // Paramters: none
    // Clears the inputs from the Contact Form
    clearForm() {
        console.log("Clearing form");
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
        this.subject = "";
        this.content = "";
    }

    // Function createDialog
    // Parameters: titleTxt, messageTxt, buttonTxt
    // Creates a Dialog Box with the parameters given
    createDialog(titleTxt, messageTxt, buttonTxt) {
        dialogs.alert({
            title: titleTxt,
            message: messageTxt,
            okButtonText: buttonTxt
        }).then(()=> {
            console.log("Dialog closed!");
            this._router.navigate(["/"]);
        });
    }
}