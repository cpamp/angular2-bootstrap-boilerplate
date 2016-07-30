import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {appRouterProviders} from './components/app.routes';
import {NavComponent} from './components/app.navigation';

bootstrap(AppComponent, [
    NavComponent
])
.catch(err => console.error(err));

bootstrap(NavComponent, [
    appRouterProviders
])
.catch(err => console.error(err));