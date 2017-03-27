import { Component, View } from 'angular2/core';

@Component({
  selector: 'about',
  directives: [],
  styles: [require('!raw!sass!./index.scss')],
  template: require('./index.html')
})
export class About {

    constructor() {}
}
