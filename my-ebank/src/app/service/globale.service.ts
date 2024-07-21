import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte, Utilisateur } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GlobaleService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : new HttpHeaders();
  }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiUrl}/Utilisateur/signup`, utilisateur, { headers: this.getAuthHeaders() });
  }

  login(user: Utilisateur): Observable<HttpResponse<string>> {
    return this.http.post(this.apiUrl + '/Utilisateur/login', user, {
      responseType: 'text',
      observe: 'response'
    });
  }

  ajouterCompte(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(`${this.apiUrl}/comptes/saveCompte`, compte, { headers: this.getAuthHeaders() });
  }

  getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }
}
