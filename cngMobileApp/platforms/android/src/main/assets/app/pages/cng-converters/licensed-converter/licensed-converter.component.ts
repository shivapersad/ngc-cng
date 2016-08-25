import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: "pages/cng-converters/licensed-converter/licensed-converter.html",
    styleUrls: ["pages/cng-converters/licensed-converter/licensed-converter.css"]
})

export class LicensedConverterComponent {

    title: string;
    id: number;
    licensedConverter: Array<any>;
    name: string;
    address: string;
    phoneNumber: string;
    website: string;
    emailAddress: string;

    licensed: Array<any> = [

        {
            "id" : "0",
            "name": "Massy ACL",
            "address": "OMeara Industrial Estate",
            "phoneNumber": "(868)642-4236",
            "website": "www.nmmotors.com",
            "emailAddress": "marketing@nmmotors.com" 
        }

    ];

    constructor(route: ActivatedRoute) {

        this.title = "Licensed CNG Converters";

        this.id = route.snapshot.params['id'];
        //console.log("Licensed ID: " + this.id);

        this.licensedConverter = this.searchID(this.id);
        
        this.name = "Company Name: " + this.licensedConverter['name'];
        this.address = "Address: " + this.licensedConverter['address'];
        this.phoneNumber = "Phone Number: " + this.licensedConverter['phoneNumber'];
        this.website = "Website: " + this.licensedConverter['website'];
        this.emailAddress = "Email Address: " + this.licensedConverter['emailAddress'];

        //console.log("Object: " + this.licensedConverter);
        //console.log("Name: " + this.licensedConverter['name']);

    }

    searchID(id: number) : Array<any> {
        
        for (var i = 0 ; i < this.licensed.length ; i++) {
            if (this.licensed[i].id === id.toString()) {
                return this.licensed[i];
            }
        }
    }

}