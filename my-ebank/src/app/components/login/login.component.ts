import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobaleService } from '../../service/globale.service';
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private gl: GlobaleService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    const user = this.loginForm.value;
    this.gl.login(user).subscribe(
      (response: HttpResponse<string>) => {
        const token = response.body;
        if (token) {
          console.log('Login successful:', token);
          localStorage.setItem('token', token); // Sauvegarder le token
          this.router.navigate(['/dashboard']); // Rediriger vers le tableau de bord
        } else {
          console.error('Unexpected response structure:', response);
        }
      },
      (error: any) => {
        console.error('Login failed:', error);
        if (error.error instanceof ErrorEvent) {
          // Erreur côté client
          console.error('Client-side error:', error.error.message);
        } else {
          // Erreur côté serveur
          console.error('Server-side error:', error);
          console.error('Response body:', error.error);
        }
      }
    );
  }
}
