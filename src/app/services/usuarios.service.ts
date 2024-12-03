import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../api/api.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = `${API_CONFIG.baseUrl}/users`;

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.userUrl}/details`);
  }
}
