import { Component, View } from 'angular2/core';

@Component({
    selector: 'home',
    styles: [require('!raw!sass!./index.scss')],
    template: require('./index.html')
})
export class Home {

    constructor() {}
}
