import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SignUpService {

  private collectionUri = "http://192.168.1.67:3000/api/Owner";


    constructor(private http: HttpClient) {}

  createOwner(data: any): Observable<any> {
    return this.http.post(this.collectionUri, JSON.stringify(data),httpOptions)
      .map(response => response);
  }


}
