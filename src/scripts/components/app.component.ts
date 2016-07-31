import {Component} from '@angular/core';
import {NavItem} from '../interfaces/navItemInterface';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './app.home';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';

@Component({
    selector: 'app-component',
    templateUrl: '../../templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [HomeComponent, AboutComponent, ContactComponent]
})
export class AppComponent {
    public navItems: NavItem[] = [
        {label: 'Home', path: '/'},
        {label: 'About', path: '/about'},
        {label: 'Contact', path: '/contact'}
    ];
}