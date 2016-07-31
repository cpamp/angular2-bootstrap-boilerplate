import {Component} from '@angular/core';
import {NavItem} from '../interfaces/navItemInterface';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-navigation',
    templateUrl: '../../templates/app.navigation.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [AppComponent, AboutComponent, ContactComponent]
})
export class NavComponent {
    public navItems: NavItem[] = [
        {label: 'Home', path: '/'},
        {label: 'About', path: '/about'},
        {label: 'Contact', path: '/contact'}
    ];
}