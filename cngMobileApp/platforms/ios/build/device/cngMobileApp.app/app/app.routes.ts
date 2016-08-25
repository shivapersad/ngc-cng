import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomepageComponent} from "./pages/home/homepage.component";
import {NewsComponent} from "./pages/news/news.component";
import {CNGGeneralInformationComponent} from "./pages/cng-general-information/cng-general-information.component";
import {WhatIsCNGComponent} from "./pages/cng-general-information/what-is-cng/what-is-cng.component";
import {HowDoesCNGWorkComponent} from "./pages/cng-general-information/how-does-cng-work/how-does-cng-work.component";
import {CNGBetterThanGasolineComponent} from "./pages/cng-general-information/cng-better-than-gasoline/cng-better-than-gasoline.component";
import {CNGSavingsCalculatorComponent} from "./pages/cng-savings-calculator/cng-savings-calculator.component";
import {CO2EmissionsCalculatorComponent} from "./pages/co2-emissions-calculator/co2-emissions-calculator.component";
import {CNGRefuellingStationsComponent} from "./pages/cng-refuelling-stations/cng-refuelling-stations.component";
import {CNGConvertersComponent} from "./pages/cng-converters/cng-converters.component";
import {DealersForOEMCNGVehiclesComponent} from "./pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {AboutNGCCNGComponent} from "./pages/about-ngc-cng/about-ngc-cng.component";
import {StationComponent} from "./pages/cng-refuelling-stations/station.component";
import {ApprovedConverterComponent} from "./pages/cng-converters/approved-converter/approved-converter.component";
import {LicensedConverterComponent} from "./pages/cng-converters/licensed-converter/licensed-converter.component";

export const routes: RouterConfig = [
  { path: "", component: HomepageComponent },
  { path: "news", component: NewsComponent },
  { path: "cng-general-information", component: CNGGeneralInformationComponent},
  { path: "what-is-cng", component: WhatIsCNGComponent},
  { path: "how-does-cng-work", component: HowDoesCNGWorkComponent},
  { path: "cng-better-than-gasoline", component: CNGBetterThanGasolineComponent},
  { path: "cng-savings-calculator", component: CNGSavingsCalculatorComponent},
  { path: "co2-emissions-calculator", component: CO2EmissionsCalculatorComponent},
  { path: "cng-refuelling-stations", component: CNGRefuellingStationsComponent},
  { path: "cng-converters", component: CNGConvertersComponent},
  { path: "dealers-for-oem-cng-vehicles", component: DealersForOEMCNGVehiclesComponent},
  { path: "contact-us", component: ContactUsComponent},
  { path: "about-ngc-cng", component: AboutNGCCNGComponent},
  { path: "station/:id", component: StationComponent},
  { path: "approvedConverter/:id", component: ApprovedConverterComponent},
  { path: "licensedConverter/:id", component: LicensedConverterComponent}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];