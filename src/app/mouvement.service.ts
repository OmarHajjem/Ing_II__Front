// mouvement.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mouvement } from './mouvement.model';

@Injectable({
  providedIn: 'root'
})
export class MouvementService {
  private apiUrl = 'http://localhost:6500/Mouvement';

  constructor(private http: HttpClient) { }

  getAllMouvements(): Observable<Mouvement[]> {
    return this.http.get<Mouvement[]>(`${this.apiUrl}`);
  }

  getMouvementById(idMvt: number): Observable<Mouvement> {
    return this.http.get<Mouvement>(`${this.apiUrl}/GetMvt/${idMvt}`);
  }

  addMouvement(mouvement: Mouvement): Observable<Mouvement> {
    return this.http.post<Mouvement>(`${this.apiUrl}/AddMvt`, mouvement);
  }

  updateMouvement(idMvt: number, mouvement: Mouvement): Observable<Mouvement> {
    return this.http.put<Mouvement>(`${this.apiUrl}/UpdMvt/${idMvt}`, mouvement);
  }

  deleteMouvement(idMvt: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DelMvt/${idMvt}`);
  }
}
