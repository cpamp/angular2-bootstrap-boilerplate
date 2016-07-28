import {provideRouter, RouterConfig} from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';

const routes: RouterConfig = [
    {path: '', component: AppComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];