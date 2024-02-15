import { Component, Input, OnInit } from '@angular/core';
import { FascadeService } from '../../fascade/fascade.service';
import { Comments } from '../../models/model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comments[] = [];
  constructor(private readonly fascade: FascadeService) {}

  ngOnInit(): void {}
}
