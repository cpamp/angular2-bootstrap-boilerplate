import {Component} from '@angular/core';
import {AboutComponent} from './app.about';
import {ContactComponent} from './app.contact';

@Component({
    selector: 'app-component',
    templateUrl: '../../templates/app.component.html',
    precompile: [AboutComponent, ContactComponent]
})
export class AppComponent {
    
}