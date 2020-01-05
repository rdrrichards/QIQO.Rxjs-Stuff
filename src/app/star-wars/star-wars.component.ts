import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../shared/star-wars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-star-wars',
  template: `<div *ngIf="people$ | async as people">
  <pre>{{ people | json }}</pre>
</div>`,
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {
  people$: Observable<any>;
  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
    this.people$ = this.starWarsService.getPeople();
  }

}
