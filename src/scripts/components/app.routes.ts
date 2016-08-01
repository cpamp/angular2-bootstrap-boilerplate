import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './app.home';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';

const routes: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];