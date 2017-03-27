import { Component, View } from 'angular2/core';
import { Navbar } from './navbar/index';
import { Home } from './home/index';
import { About } from './about/index';
import { RouteConfig, Route, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: "app"
})

@View({
    directives: [Navbar, ROUTER_DIRECTIVES],
    styles: [require('!raw!sass!./index.scss')],
    template: require('./index.html')
})

@RouteConfig([
    new Route({ path: '/', component: Home, name: 'Home' }),
    new Route({ path: '/about', component: About, name: 'About', data: { pageId: null } })
])

export class App {

    constructor() {}
}
