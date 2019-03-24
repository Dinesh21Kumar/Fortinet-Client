import { Http, Response, RequestOptions, Headers, URLSearchParams, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChennelService {

  constructor(private http: Http) { }


  doGET(url) {
    let options = new RequestOptions({});
    return this.http.get(url, options).pipe(
      map(res => res.json()) // or any other operator
    );
  }

}
