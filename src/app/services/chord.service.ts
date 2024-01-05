import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {Chord} from "../models/Chord";

@Injectable({
  providedIn: 'root'
})
export class ChordService {

  private baseUrl = 'http://localhost:8080/api/accord';

  constructor(private http: HttpClient) { }

  sendChord(chord: Chord, length: number, bpm: number) {
    return this.http.post(`${this.baseUrl}`, {chord, length, bpm})
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        }
      ));
  }

}
