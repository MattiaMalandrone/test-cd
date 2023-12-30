import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, ROUTER_REQUEST, RouterRequestAction } from '@ngrx/router-store';
import { delay, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { loading } from './app.state';

@Injectable()
export class AppEffects {

  loading$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_REQUEST),
    map(_ => loading({ isLoading: true })))
  );

  notLoading$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    delay(3000), // test purpose
    map(_ => loading({ isLoading: false })))
  );

  constructor(private actions$: Actions) {}
}