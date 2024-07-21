import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobaleService } from '../../service/globale.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private gl: GlobaleService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    }
    return null;
  }

  register(): void {
    if (this.registerForm.valid) {
      this.gl.createUtilisateur(this.registerForm.value).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']).then(() => {
            // Handle successful navigation
          }).catch(err => {
            console.error('Navigation error:', err);
          });
        },
        error: (error: any) => {
          console.error('Registration failed:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
  
}
