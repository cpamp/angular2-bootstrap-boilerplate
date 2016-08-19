import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/app.home';
import {AboutComponent} from './components/app.about';
import {ContactComponent} from './components/app.contact';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(routes);