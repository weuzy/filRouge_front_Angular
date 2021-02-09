import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link = environment.urlAdress + 'login';

  constructor(private http: HttpClient) { }
  isLogged(): any {
    return !! localStorage.getItem('token');
  }
  login(credentials): Observable<any> {
    return this.http.post(this.link, credentials);
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
