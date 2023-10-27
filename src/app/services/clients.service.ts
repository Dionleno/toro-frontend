import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { CheckingAccountElement } from '../components';
import { environment as env } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getCheckingAccount() {
    return this.http.get<CheckingAccountElement>(`${env.dev.serverUrl}/accounts`);
  }
}
