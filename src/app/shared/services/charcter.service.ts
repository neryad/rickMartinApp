import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Character } from './../interfaces/character.interface';
import {environment} from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import {TrackHttpError}  from './../models/TrackHttpError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharcterService {

  constructor(private http: HttpClient) { }

  searchCharacters( query ='', page = 1):Observable<Character [] | TrackHttpError> {

    const filter = `${environment.baseUrlAPI}/?name=${query}&
    page=${page}`;

    return this.http.get<Character[]>(filter).pipe(catchError ((err) => this.handleHttpError(err)));

  }

  getDetails(id:number){
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`).pipe(catchError ((err) => this.handleHttpError(err)));
  }

  private handleHttpError(
    error: HttpErrorResponse
  ):Observable<TrackHttpError>{
    let dataError = new TrackHttpError();

    dataError.errNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error ocurred retrivinf data.'

    return throwError(dataError);

  }


}
