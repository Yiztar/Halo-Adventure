import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from './api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = `${API_CONFIG.baseUrl}'/auth`;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Comprueba si hay un token
  }
}
