import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import { AppEffects } from './app.effects'
import { ApplicationConfig } from '@angular/core';
import { appReducer } from './app.state';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ "APP": appReducer,  router: routerReducer, }),
    provideRouterStore(),
    provideEffects(AppEffects)
  ]
};
