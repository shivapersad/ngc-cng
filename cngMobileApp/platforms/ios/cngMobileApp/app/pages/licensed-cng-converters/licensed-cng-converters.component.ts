import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { ObservableArray } from 'data/observable-array';
import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';

@Component({
    selector: "licensed-cng-converters",
    templateUrl: "pages/licensed-cng-converters/licensed-cng-converters.html",
    styleUrls: ["pages/licensed-cng-converters/licensed-cng-converters.css", 
                "pages/licensed-cng-converters/licensed-cng-converters-common.css"]
})
export class LicensedCNGConvertersComponent {
    
    title: string;

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

    constructor(private _router: Router) {

        this.title = "CNG Converters";

    }

    public onLicensedItemTap(args):void {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/licensedConverter/" + args.index]);
    }

    public onApprovedItemTap(args):void {
        console.log("Tapped Item: " + args.index);
        this._router.navigate(["/approvedConverter/" + args.index]);
    }

}