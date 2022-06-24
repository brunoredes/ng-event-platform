import { SubscriberService } from './../../subscriber.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriber-viewer',
  templateUrl: './subscriber-viewer.component.html',
  styleUrls: ['./subscriber-viewer.component.scss'],
})
export class SubscriberViewerComponent implements OnInit {
  public subscriberForm!: FormGroup;
  private isSubmited: boolean = false;
  public disabled: any;
  constructor(
    private formBuilder: FormBuilder,
    private subscriberService: SubscriberService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriberForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public submitForm(): void {
    if (this.subscriberForm.invalid) {
      this.invalidateForm();
      console.log('invalid');
      return;
    }
    this.isSubmited = true;
    const newSubscriber = this.subscriberForm.getRawValue();

    const subscriberData = {
      name: newSubscriber.name as string,
      email: newSubscriber.email as string,
    };

    this.subscriberService.createSubscriber(subscriberData).subscribe(
      (response) => {
        console.log(response);
        this.disabled = response.loading;
      },
      (error: unknown) => console.error(error),
      () => {
        this.router.navigate(['/event']);
      }
    );
  }

  private invalidateForm(): void {
    this.isSubmited = false;
    this.subscriberForm.get('name')?.markAsDirty();
    this.subscriberForm.get('name')?.markAsTouched({ onlySelf: true });
    this.subscriberForm.get('email')?.markAsDirty();
    this.subscriberForm.get('email')?.markAsTouched({ onlySelf: true });
  }
}
