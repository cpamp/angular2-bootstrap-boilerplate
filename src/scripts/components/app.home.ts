import {Component} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: '../../templates/app.home.html'
})
export class HomeComponent {
    public email: string = 'app.email@provider.com';
    public name: string = 'Bill Jobs';
}