import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-jumbotron',
    templateUrl: '../../templates/app.jumbotron.html',
    inputs: ['title', 'subTitle', 'body', 'noBottomMargin']
})
export class JumbotronComponent {
    public noBottomMargin: boolean = false;
    public title: string = "Hello World";
    public subTitle: string = "Sub Title";
    public body: string = "Welcome to the angular 2 bootstrap boilerplate";
}