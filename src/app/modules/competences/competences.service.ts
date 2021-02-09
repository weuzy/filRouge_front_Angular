import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Observable, throwError} from 'rxjs';
import {Competences} from '../../models/competences';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  link = environment.urlAdress + 'admin/competences';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Erreur côté client:', errorResponse.message);
    } else {
      console.log('Erreur côté serveur:', errorResponse);
    }
    return throwError('Il y a un problème avec le serveur');
  }
  getAllCompetences(): Observable<Competences[]> {
    return this.http.get<Competences[]>(this.link)
      .pipe(catchError(this.handleError));
  }
  getCompetence(id: number): Observable<Competences> {
    return this.http.get<Competences>(`${this.link}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
