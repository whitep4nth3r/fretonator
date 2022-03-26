import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';

interface AnyForm {
  [key: string]: string
}

@Injectable(
)
export class FormService {

  constructor(private httpClient: HttpClient) {
  }

  submit(location: string, form: AnyForm) {

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const options = {
      headers,
      responseType: 'text' as never,
    };

    const formBody = new URLSearchParams();

    Object.entries(form)
      .forEach(([key, value]) =>
        formBody.append(key, value as string));

    return this.httpClient.post(location, formBody.toString(), options)
      .pipe(retry(2));
  }
}
