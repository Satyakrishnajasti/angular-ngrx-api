import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostData } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class FascadeService {
  constructor(private readonly store$: Store) {}

  public data() {
    return this.store$.select(PostData);
  }
}
