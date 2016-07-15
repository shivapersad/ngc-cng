import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomepageComponent} from "./pages/home/homepage.component";
import {NewsComponent} from "./pages/news/news.component";
import {CNGGeneralInformationComponent} from "./pages/cng-general-information/cng-general-information.component";

export const routes: RouterConfig = [
  { path: "", component: HomepageComponent },
  { path: "news", component: NewsComponent },
  { path: "cng-general-information", component: CNGGeneralInformationComponent}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];