"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_about_1 = require('./app.about');
var app_contact_1 = require('./app.contact');
var routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'about', component: app_about_1.AboutComponent },
    { path: 'contact', component: app_contact_1.ContactComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map