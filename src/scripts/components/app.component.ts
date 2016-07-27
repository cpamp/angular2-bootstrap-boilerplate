import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: '../../templates/hello-world.html'
})
export class AppComponent {
    pageTitle: string = 'My App';
}