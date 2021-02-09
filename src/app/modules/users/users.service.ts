import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[];
  link = environment.urlAdress + 'admin/users';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Erreur côté client:', errorResponse.message);
    } else {
      console.log('Erreur côté serveur:', errorResponse.message);
    }
    return throwError('Il y a un probléme avec le serveur ');
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.link)
      .pipe(catchError(this.handleError));
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.link}/${id}`)
      .pipe(catchError(this.handleError));
  }
  addUsers(user: User): Observable<User> {
    return this.http.post<User>(this.link, user, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
  updateUser(user: User): Observable<void> {
    return this.http.put<void>(`${(this.link)}/${user.id}`, user, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${(this.link)}/${id}`)
      .pipe(catchError(this.handleError));
  }

}
