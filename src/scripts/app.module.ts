import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {AboutComponent} from './components/app.about';
import {ContactComponent} from './components/app.contact';
import {HomeComponent} from './components/app.home';
import {JumbotronComponent} from './components/app.jumbotron';
import {routing} from './app.routes';

@NgModule({
    declarations: [
        AppComponent, 
        AboutComponent, 
        ContactComponent, 
        HomeComponent,
        JumbotronComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {}