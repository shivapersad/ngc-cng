"use strict";
var router_1 = require("nativescript-angular/router");
var homepage_component_1 = require("./pages/home/homepage.component");
var news_component_1 = require("./pages/news/news.component");
var cng_general_information_component_1 = require("./pages/cng-general-information/cng-general-information.component");
exports.routes = [
    { path: "", component: homepage_component_1.HomepageComponent },
    { path: "news", component: news_component_1.NewsComponent },
    { path: "cng-general-information", component: cng_general_information_component_1.CNGGeneralInformationComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map