import { Component, View } from 'angular2/core';
import { RouterLink} from 'angular2/router';

@Component({
  selector: 'navbar',
  directives: [RouterLink],
  styles: [require('!raw!sass!./index.scss')],
  template: require('./index.html')
})
export class Navbar {
    title: string;

    constructor() {
        this.title = 'Brain test';
    }
}
