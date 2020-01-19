import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Results } from './results.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
readonly routeURL = 'https://localhost:5001/api/results';
  constructor(private http: HttpClient) { }
 

  getResults(): Observable<Results> {
    return this.http.get<Results>(this.routeURL)
    .pipe(
      retry(1),
      catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}

