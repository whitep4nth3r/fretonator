import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable(
)
export class FormService {

  constructor(private httpClient: HttpClient) {
  }

  submit(location, form) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const options = {
      headers,
      responseType: 'text' as 'text',
    };

    const formBody = new URLSearchParams();

    Object.entries(form)
      .forEach(([key, value]) =>
        formBody.append(key, value as string));

    return this.httpClient.post(location, formBody.toString(), options)
      .pipe(retry(2));
  }
}
