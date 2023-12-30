import { Component, OnInit, inject } from '@angular/core';
import { appSelector, loading } from '../app.state';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  store = inject(Store)
  
  vm$ = this.store.select(appSelector)
  
  ngOnInit(): void {
    //this.store.dispatch(loaded()) // ExpressionChangedAfterItHasBeenCheckedError 
  }
  
  onClick() {
    this.store.dispatch(loading({ isLoading: true })) // ok (uncomment <!-- <app-child></app-child> --> on app.component.html)
  }
}
