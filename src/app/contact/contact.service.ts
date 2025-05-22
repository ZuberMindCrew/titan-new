import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // private apiUrl = 'http://44.247.227.66:3000/api/form/submitemail'; // URL of your backend API
 //private apiUrl = 'http://localhost:3000/api/form/submitemail'; // URL of your backend API
  // private apiUrl = 'http://3.148.2.220:3000/api/form/submitemail'; // URL of your backend API
   private apiUrl = 'https://titanedgeadvisory.com/api/api/form/submitemail'; // URL of your backend API


  constructor(private http: HttpClient) { }

  // Function to send the form data to the backend
  submitForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
