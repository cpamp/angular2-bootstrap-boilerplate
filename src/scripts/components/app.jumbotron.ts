import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-jumbotron',
    directives: [NgClass],
    templateUrl: '../../templates/app.jumbotron.html',
    inputs: ['title', 'body', 'noBottomMargin']
})
export class JumbotronComponent {
    public noBottomMargin: boolean = false;
    public title: string = "Hello World";
    public body: string = "Welcome to the angular 2 bootstrap boilerplate";
}