import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {appRouterProviders} from './components/app.routes';

bootstrap(AppComponent, [
    appRouterProviders
])
.catch(err => console.error(err));