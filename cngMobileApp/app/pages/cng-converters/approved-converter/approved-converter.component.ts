import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: "pages/cng-converters/approved-converter/approved-converter.html",
    styleUrls: ["pages/cng-converters/approved-converter/approved-converter-common.css"]
})

export class ApprovedConverterComponent {

    title: string;
    id: number;
    approvedConverter: Array<any>;
    name: string;
    address: string;
    phoneNumber: string;
    website: string;
    emailAddress: string;

    approved: Array<any> = [

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

    ]

    constructor(route: ActivatedRoute) {

        this.title = "Approved CNG Converters";

        this.id = route.snapshot.params['id'];
        //console.log("Licensed ID: " + this.id);

        this.approvedConverter = this.searchID(this.id);
        
        //console.log("Object: " + this.licensedConverter);
        //console.log("Name: " + this.approvedConverter['name']);

    }
    
    searchID(id: number) : Array<any> {
        
        for (var i = 0 ; i < this.approved.length ; i++) {
            if (this.approved[i].id === id.toString()) {
                return this.approved[i];
            }
        }

    }

}