"use strict";
var router_1 = require("nativescript-angular/router");
var homepage_component_1 = require("./pages/home/homepage.component");
var news_component_1 = require("./pages/news/news.component");
var cng_general_information_component_1 = require("./pages/cng-general-information/cng-general-information.component");
var cng_savings_calculator_component_1 = require("./pages/cng-savings-calculator/cng-savings-calculator.component");
var co2_emissions_calculator_component_1 = require("./pages/co2-emissions-calculator/co2-emissions-calculator.component");
var cng_refuelling_stations_component_1 = require("./pages/cng-refuelling-stations/cng-refuelling-stations.component");
var cng_converters_component_1 = require("./pages/cng-converters/cng-converters.component");
var dealers_for_oem_cng_vehicles_component_1 = require("./pages/dealers-for-oem-cng-vehicles/dealers-for-oem-cng-vehicles.component");
var contact_us_component_1 = require("./pages/contact-us/contact-us.component");
var about_ngc_cng_component_1 = require("./pages/about-ngc-cng/about-ngc-cng.component");
var testing_area_component_1 = require("./pages/testing-area/testing-area.component");
var station_component_1 = require("./pages/cng-refuelling-stations/station.component");
var approved_converter_component_1 = require("./pages/cng-converters/approved-converter/approved-converter.component");
var licensed_converter_component_1 = require("./pages/cng-converters/licensed-converter/licensed-converter.component");
exports.routes = [
    { path: "", component: homepage_component_1.HomepageComponent },
    { path: "news", component: news_component_1.NewsComponent },
    { path: "cng-general-information", component: cng_general_information_component_1.CNGGeneralInformationComponent },
    { path: "cng-savings-calculator", component: cng_savings_calculator_component_1.CNGSavingsCalculatorComponent },
    { path: "co2-emissions-calculator", component: co2_emissions_calculator_component_1.CO2EmissionsCalculatorComponent },
    { path: "cng-refuelling-stations", component: cng_refuelling_stations_component_1.CNGRefuellingStationsComponent },
    { path: "cng-converters", component: cng_converters_component_1.CNGConvertersComponent },
    { path: "dealers-for-oem-cng-vehicles", component: dealers_for_oem_cng_vehicles_component_1.DealersForOEMCNGVehiclesComponent },
    { path: "contact-us", component: contact_us_component_1.ContactUsComponent },
    { path: "about-ngc-cng", component: about_ngc_cng_component_1.AboutNGCCNGComponent },
    { path: "testing-area", component: testing_area_component_1.TestingAreaComponent },
    { path: "station/:id", component: station_component_1.StationComponent },
    { path: "approvedConverter/:id", component: approved_converter_component_1.ApprovedConverterComponent },
    { path: "licensedConverter/:id", component: licensed_converter_component_1.LicensedConverterComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map