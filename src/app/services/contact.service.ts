import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://portfolio-backend-production-a507.up.railway.app/api/contact';

  constructor(private http: HttpClient) {}

  sendContactMessage(formData: ContactFormData): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ApiResponse>(
      `${this.apiUrl}/send`,
      formData,
      { headers }
    );
  }

  testEmailService(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/test`);
  }
}