import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Observable, throwError} from 'rxjs';
import {GroupeDeCompetences} from '../../models/groupe-de-competences';
import { Competences } from '../../models/competences';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupeDeCompetencesService {

  constructor(private http: HttpClient) { }
  link = environment.urlAdress + 'admin/grpecompetences/competences';
  link2 = environment.urlAdress + 'admin/competences';
  // tslint:disable-next-line:typedef
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Erreur côté client:', errorResponse.message);
    } else {
      console.log('Erreur côté serveur:', errorResponse);
    }
    return throwError('Il y a un problème avec le serveur');
  }
  getAllGroupeDeCompetences(): Observable<GroupeDeCompetences[]> {
    return this.http.get<GroupeDeCompetences[]>(this.link);
  }
  getGroupeDeCompetence(id: number): Observable<GroupeDeCompetences> {
    return  this.http.get<GroupeDeCompetences>(`${environment.urlAdress}admin/groupe_de_competences/${id}`)
      .pipe(catchError(this.handleError));
  }
  getCompetences(): Observable<Competences[]> {
    return this.http.get<Competences[]>(this.link2);
  }
  addGroupeDeCompetence(grpCompet: GroupeDeCompetences): Observable<GroupeDeCompetences> {
    return this.http.post<GroupeDeCompetences>(`${environment.urlAdress}admin/groupe_de_competences`, grpCompet, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
  updateGroupeDeCompetence(grpCompet: GroupeDeCompetences): Observable<void> {
    return this.http.put<void>(`${environment.urlAdress}admin/groupe_de_competences`, grpCompet, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
  deleteGroupeDeCompetence(id: number): Observable<void> {
    return  this.http.delete<void>(`${environment.urlAdress}admin/groupe_de_competences/${id}`)
      .pipe(catchError(this.handleError));
  }
}
