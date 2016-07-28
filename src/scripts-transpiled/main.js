"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app.component');
var app_routes_1 = require('./components/app.routes');
var app_navigation_1 = require('./components/app.navigation');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_navigation_1.NavComponent
])
    .catch(function (err) { return console.error(err); });
platform_browser_dynamic_1.bootstrap(app_navigation_1.NavComponent, [
    app_routes_1.appRouterProviders
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map