import {Component} from '@angular/core';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';

@Component({
    selector: 'app-component',
    directives: [AboutComponent, ContactComponent],
    templateUrl: '../../templates/app.component.html'
})
export class AppComponent {
    
}