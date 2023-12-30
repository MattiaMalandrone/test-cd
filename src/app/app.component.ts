import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { appSelector } from './app.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-cd';

  store = inject(Store)

  vm$ = this.store.select(appSelector)

}
