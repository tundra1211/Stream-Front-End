import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Results } from './results.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
readonly routeURL = 'https://localhost:5001/api/results';
  constructor(private http: HttpClient) { }
  list: Results[];
  refreshList() {
    this.http.get(this.routeURL)
    .toPromise()
    .then(res => this.list = res as Results[]);

  }
}
