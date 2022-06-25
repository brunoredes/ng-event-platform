import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { CreationSubscriberGQL } from './../../helper/generated';

interface CreateSubscriber {
  name: string;
  email: string;
}

interface Response {
  subscriber: CreateSubscriber;
}

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  constructor(private createSubscriberMutation: CreationSubscriberGQL) {}

  public createSubscriber({ name, email }: CreateSubscriber) {
    return this.createSubscriberMutation.mutate({ name, email }).pipe(
      map((response) => response),
      catchError((error: unknown) => {
        return throwError(() => error);
      })
    );
  }
}
