import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FascadeService } from '../../fascade/fascade.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss'],
})
export class CommentsPageComponent implements OnInit {
  public comments$!: Observable<any>;
  constructor(private readonly fascade: FascadeService) {}

  ngOnInit(): void {
    this.comments$ = this.fascade.data();
  }
}
