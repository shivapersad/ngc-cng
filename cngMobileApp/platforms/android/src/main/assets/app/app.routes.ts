import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomepageComponent} from "./pages/home/homepage.component";
import {NewsComponent} from "./pages/news/news.component";
import {CNGGeneralInformationComponent} from "./pages/cng-general-information/cng-general-information.component";
import {CNGSavingsCalculatorComponent} from "./pages/cng-savings-calculator/cng-savings-calculator.component";
import {CO2EmissionsCalculatorComponent} from "./pages/co2-emissions-calculator/co2-emissions-calculator.component";
import {CNGRefuellingStationsComponent} from "./pages/cng-refuelling-stations/cng-refuelling-stations.component";
import {LicensedCNGConvertersComponent} from "./pages/licensed-cng-converters/licensed-cng-converters.component";
import {DealersForOEMCNGVehiclesComponent} from "./pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {AboutNGCCNGComponent} from "./pages/about-ngc-cng/about-ngc-cng.component";

export const routes: RouterConfig = [
  { path: "", component: HomepageComponent },
  { path: "news", component: NewsComponent },
  { path: "cng-general-information", component: CNGGeneralInformationComponent},
  { path: "cng-savings-calculator", component: CNGSavingsCalculatorComponent},
  { path: "co2-emissions-calculator", component: CO2EmissionsCalculatorComponent},
  { path: "cng-refuelling-stations", component: CNGRefuellingStationsComponent},
  { path: "licensed-cng-converters", component: LicensedCNGConvertersComponent},
  { path: "dealers-for-oem-cng-vehicles", component: DealersForOEMCNGVehiclesComponent},
  { path: "contact-us", component: ContactUsComponent},
  { path: "about-ngc-cng", component: AboutNGCCNGComponent}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];