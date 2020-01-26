import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../shared/star-wars.service';
import { Observable, fromEvent, interval } from 'rxjs';
import { concatMap, take, exhaustMap } from 'rxjs/operators';

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
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   exhaustMap(ev => interval(1000).pipe(take(4)))
    // );
    // result.subscribe(x => console.log(x));
  }

}
