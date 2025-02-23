// src/app/core/services/residence.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from '../residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  residenceUrl = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) {}

 
  getResidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.residenceUrl);
  }

  
  getResidenceById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.residenceUrl}/${id}`);
  }

  
  addResidence(residence: Residence): Observable<Residence> {
    return this.http.post<Residence>(this.residenceUrl, residence);
  }

  
  updateResidence(residence: Residence): Observable<Residence> {
    return this.http.put<Residence>(`${this.residenceUrl}/${residence.id}`, residence);
  }

  deleteResidence(id: number): Observable<any> {  
    return this.http.delete(`${this.residenceUrl}/${id}`);  
  }
}