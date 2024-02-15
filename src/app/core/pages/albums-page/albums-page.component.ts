import { Component, OnInit } from '@angular/core';
import { FascadeService } from '../../fascade/fascade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss'],
})
export class AlbumsPageComponent implements OnInit {
  public album$!: Observable<any>;
  constructor(private readonly fascade: FascadeService) {}

  ngOnInit(): void {
    this.album$ = this.fascade.data();
  }
}
