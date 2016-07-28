import {Component} from '@angular/core';
import {NavItem} from '../interfaces/navItemInterface';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: '../../templates/app.navigation.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavComponent {
    public navItems: NavItem[] = [
        {label: 'Home', path: '/'},
        {label: 'About', path: '/about'},
        {label: 'Contact', path: '/contact'}
    ];
}