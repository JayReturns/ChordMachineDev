import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {Chord} from "../models/chord.model";

@Injectable({
  providedIn: 'root'
})
export class ChordService {

  private baseUrl = 'http://localhost:8080/api/accord';

  constructor(private http: HttpClient) { }

  getEndpoint() {
    const url = localStorage.getItem('endpoint');
    if (url) {
      if (!url.includes('http://')) {
        return `http://${url}`;
      }
      return url;
    }
    return this.baseUrl;
  }

  sendChord(chord: Chord, bpm: number, length?: number) {
    return this.http.post(`${this.getEndpoint()}`, {chord: chord, length: length ?? 0, bpm: bpm})
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        }
      ));
  }

}
