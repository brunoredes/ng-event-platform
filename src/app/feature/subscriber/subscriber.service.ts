import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { CreationSubscriberGQL, CreationSubscriberMutationVariables } from './../../helper/generated';

@Injectable({
  providedIn: 'any',
})
export class SubscriberService {
  constructor(private createSubscriberMutation: CreationSubscriberGQL) {}

  public createSubscriber({ name, email }: CreationSubscriberMutationVariables) {
    return this.createSubscriberMutation.mutate({ name, email }).pipe(
      map((response) => response),
      catchError((error: unknown) => {
        return throwError(() => error);
      })
    );
  }
}
