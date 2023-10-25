import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { CheckingAccountElement } from '../components';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getCheckingAccount() {
    return this.http.get<CheckingAccountElement>(`http://localhost:3000/accounts`);
  }
}
