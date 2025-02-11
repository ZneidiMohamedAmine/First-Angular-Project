import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  private apiUrl = 'https://example.com/api/residences'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getResidences(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
