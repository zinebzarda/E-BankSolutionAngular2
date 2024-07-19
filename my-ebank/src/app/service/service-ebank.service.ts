import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class ServiceEbankService {

  constructor(private http : HttpClient) { }

  showAllUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>("http://localhost:8080/Utilisateur/showAllUtilisateur");
  }




}
