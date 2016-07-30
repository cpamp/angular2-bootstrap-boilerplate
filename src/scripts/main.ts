import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {appRouterProviders} from './components/app.routes';
import {NavComponent} from './components/app.navigation';
import {AboutComponent} from './components/app.about';
import {ContactComponent} from './components/app.contact';

bootstrap(AppComponent, [
    NavComponent,
])
.catch(err => console.error(err));

bootstrap(NavComponent, [
    appRouterProviders
])
.catch(err => console.error(err));