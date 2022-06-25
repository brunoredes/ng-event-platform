import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SubscriberService } from './../../subscriber.service';

@Component({
  selector: 'app-subscriber-viewer',
  templateUrl: './subscriber-viewer.component.html',
  styleUrls: ['./subscriber-viewer.component.scss'],
})
export class SubscriberViewerComponent implements OnInit {
  public subscriberForm!: FormGroup;
  private isSubmited: boolean = false;
  public disabled: boolean = false;

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
      return;
    }
    this.isSubmited = true;
    const newSubscriber = this.subscriberForm.getRawValue();

    const subscriberData = {
      name: newSubscriber.name as string,
      email: newSubscriber.email as string,
    };

    this.subscriberService.createSubscriber(subscriberData).subscribe({
      next: ({ loading }) => {
        this.disabled = loading;
      },
      error: (error: unknown) => console.error(error),
      complete: () => {
        this.router.navigate(['/event']);
      },
    });
  }

  private invalidateForm(): void {
    this.isSubmited = false;
    this.subscriberForm.get('name')?.markAsDirty();
    this.subscriberForm.get('name')?.markAsTouched({ onlySelf: true });
    this.subscriberForm.get('email')?.markAsDirty();
    this.subscriberForm.get('email')?.markAsTouched({ onlySelf: true });
  }
}
