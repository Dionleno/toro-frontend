import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
export type CheckingAccountElement = {
  account: string;
  checkingAccountAmount: number;
  positions: [
    {
      amount: number;
      symbol: string;
      currentPrice: number;
    }
  ];
  consolidated: number;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData: any
  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getCheckingAccount().subscribe((data) => {
      this.userData = data;
    });
  }
}
