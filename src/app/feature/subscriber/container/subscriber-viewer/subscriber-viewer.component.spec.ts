import { fakeAsync } from '@angular/core/testing';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { of } from 'rxjs';
import { CreationSubscriberMutationVariables } from './../../../../helper/generated';
import { SharedModule } from './../../../../shared/shared.module';
import { SubscriberService } from './../../subscriber.service';

import { SubscriberViewerComponent } from './subscriber-viewer.component';

describe('SubscriberViewerComponent', () => {
  let component: any;
  beforeEach(fakeAsync(async () => {
    component = await render(SubscriberViewerComponent, {
      imports: [SharedModule],
      componentProviders: [
        {
          provide: SubscriberService,
          useValue: {
            createSubscriber({
              name,
              email,
            }: CreationSubscriberMutationVariables) {
              return of({
                id: 'cl4x2liu30j7f0bkf7hceay89',
                __typename: 'Subscriber',
              });
            },
          },
        },
      ],
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate form if no data are provided', () => {
    const invalidFormSpy = jest.spyOn(
      component.fixture.componentInstance,
      'invalidateForm'
    );
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    const ONE_TIME = 1;
    expect(
      component.fixture.componentInstance.subscriberForm.invalid
    ).toBeTruthy();
    expect(invalidFormSpy).toBeCalled();
    expect(invalidFormSpy).toBeCalledTimes(ONE_TIME);
  });

  it('should invalidate form if one input is filled', fakeAsync(async () => {
    const invalidFormSpy = jest.spyOn(
      component.fixture.componentInstance,
      'invalidateForm'
    );
    const [name] = screen.getAllByRole('textbox');

    await userEvent.type(name, 'jeremias');

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    const ONE_TIME = 1;
    expect(
      component.fixture.componentInstance.subscriberForm.invalid
    ).toBeTruthy();
    expect(invalidFormSpy).toBeCalled();
    expect(invalidFormSpy).toBeCalledTimes(ONE_TIME);
  }));

  it('should invalidate form if email input are filled wrong', fakeAsync(async () => {
    const invalidFormSpy = jest.spyOn(
      component.fixture.componentInstance,
      'invalidateForm'
    );
    const [, email] = screen.getAllByRole('textbox');

    await userEvent.type(email, 'jeleia');

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    const ONE_TIME = 1;
    expect(
      component.fixture.componentInstance.subscriberForm.invalid
    ).toBeTruthy();
    expect(invalidFormSpy).toBeCalled();
    expect(invalidFormSpy).toBeCalledTimes(ONE_TIME);
  }));

  it('Should validate the form when all inputs are filled', fakeAsync(async () => {
    const [name, email] = screen.getAllByRole('textbox');

    await userEvent.type(name, 'jeremias');
    await userEvent.type(email, 'jeremias@gmail.com');

    expect(
      component.fixture.componentInstance.subscriberForm.valid
    ).toBeTruthy();
  }));

  it('Should send the valid form with all inputs filled', fakeAsync(async () => {
    const sendForm = jest.spyOn(component.fixture.componentInstance, 'submitForm')
    const [name, email] = screen.getAllByRole('textbox');

    await userEvent.type(name, 'jeremias');
    await userEvent.type(email, 'jeremias@gmail.com');

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(
      component.fixture.componentInstance.subscriberForm.valid
    ).toBeTruthy();

    expect(sendForm).toBeCalled();
    expect(sendForm).toBeCalledTimes(1);
  }));
});
