import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit {
  formName = 'Contact';
  formSubmitError = false;
  form = new FormGroup({
    honeypot: new FormControl('', [
      Validators.maxLength(0)
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(81),
      Validators.pattern(/[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)/)
    ]),
    email: new FormControl('', [
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(30)
    ]),
    submit: new FormControl('Submit', [])
  }, {
    updateOn: 'blur'
  });

  constructor(private formService: FormService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.formSubmitError = false;
    this.submit.disable();

    const form = {
      Name: this.name.value,
      Email: this.email.value,
      Message: this.message.value,
      'form-name': this.formName,
      'bot-field': this.honeypot.value
    };

    this.formService.submit('/contact/success', form)
      .pipe(tap(() => this.submit.enable()))
      .subscribe(
        () => this.onSuccess(),
        (err) => this.onFail());
  }

  async onSuccess() {
    await (this.router.navigate(['/', 'contact', 'success']));
  }

  onFail() {
    this.formSubmitError = true;
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  get submit() {
    return this.form.get('submit');
  }

  get honeypot() {
    return this.form.get('honeypot');
  }

}
