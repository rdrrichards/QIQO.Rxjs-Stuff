import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }
  getPeople() {
    return this.http.get<any>('api/people').pipe(
      map(people => {
        people.results.map(person => this.http.get<any>(person.homeworld).subscribe(
          homeworld => person.planet = homeworld
        ));
        return people;
      })
    );
  }
}
