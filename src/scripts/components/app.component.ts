import {Component} from '@angular/core';
import {NavItem} from '../interfaces/navItemInterface';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {JumbotronComponent} from './app.jumbotron';
import {HomeComponent} from './app.home';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';

@Component({
    selector: 'app-component',
    templateUrl: '../../templates/app.component.html',
    directives: [ROUTER_DIRECTIVES, JumbotronComponent],
    precompile: [HomeComponent, AboutComponent, ContactComponent]
})
export class AppComponent {
    public navItems: NavItem[] = [
        {label: 'Home', path: '/'},
        {label: 'About', path: '/about'},
        {label: 'Contact', path: '/contact'}
    ];

    public jumboTitle: string  = "Hello World!";
    public jumboBody: string = "Welcome to the angular2-bootstrap-boilerplate.";
    public jumboBotMargin: boolean = true;
}