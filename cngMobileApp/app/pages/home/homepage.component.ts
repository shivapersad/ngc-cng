import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "pages/home/homepage.html",
    styleUrls: ["pages/home/homepage-common.css", "pages/home/homepage.css"]
})
export class HomepageComponent {
    constructor(private _router: Router){}

    goToNews(){
        console.log("News pressed");
        this._router.navigate(["/news"]);
    }

    goToCNGGeneralInformation(){
        console.log("CNG General Information pressed");
        this._router.navigate(["/cng-general-information"]);
    }
    
}
