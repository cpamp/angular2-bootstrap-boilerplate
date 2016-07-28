import {Component} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: '../../templates/app.contact.html'
})
export class ContactComponent {
    public email: string = 'app.email@provider.com';
    public name: string = 'Bill Jobs';
}