import { provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { FORM_PROVIDERS } from 'angular2/common';
import { HTTP_PROVIDERS } from 'angular2/http';
import { App } from './components/index';
import {
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from 'angular2/router';

bootstrap(App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
