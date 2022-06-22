import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-event-platform';
  public data: any;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.
      watchQuery({
        query: gql`
          {
            lessons {
              id
              title
            }
          }
        `
      }).valueChanges
        .pipe(
          tap(response => console.log('api response: ', response)),
          map(response => response.data))
          .subscribe((response:any) => {
            this.data = response.lessons
          })
  }
}
