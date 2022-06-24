import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

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
  private readonly CREATE_SUBSCRIBE_MUTATION = gql`
    mutation CreationSubscriber($name: String!, $email: String!) {
      createSubscriber(data: { name: $name, email: $email }) {
        id
      }
    }
  `;
  constructor(private apollo: Apollo) {}

  public createSubscriber({ name, email }: CreateSubscriber) {
    return this.apollo.mutate({
      mutation: this.CREATE_SUBSCRIBE_MUTATION,
      variables: {
        name,
        email,
      },
    });
  }
}
