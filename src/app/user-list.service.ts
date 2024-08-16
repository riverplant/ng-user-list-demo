import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserListService {

  configUrl = 'https://gorest.co.in/public/v2/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<User[]>(this.configUrl).pipe(retry(1));
  }
}
