import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { decrement, increment, loadPostsAction } from './core/store/actions';
import { Observable } from 'rxjs';
import { FascadeService } from './core/fascade/fascade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  posts$!: Observable<any>;

  constructor(
    private readonly fascade: FascadeService,
    private store$: Store
  ) {}

  ngOnInit(): void {
    this.posts$ = this.fascade.data();
    this.store$.dispatch(loadPostsAction());
  }

  increment() {
    return this.store$.dispatch(increment());
  }

  decrement() {
    return this.store$.dispatch(decrement());
  }
}
