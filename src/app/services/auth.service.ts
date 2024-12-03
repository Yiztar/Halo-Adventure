import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';






@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:4000/api/auth'; // URL del backend

  constructor(private http: HttpClient) {}

 

  private validUser = {
    email: 'test@example.com',
    password: 'password123',
  };

  login(email: string, password: string): Observable<void> {
    if (email === this.validUser.email && password === this.validUser.password) {
      localStorage.setItem('token', 'mock-token');
      return of();
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
