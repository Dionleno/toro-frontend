import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
export interface CheckingAccountElement {
  account: string;
  checkingAccountAmount: number;
  positions: Array<any>,
  consolidated: number;
}

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.scss'],
})
export class CheckingAccountComponent implements OnInit {
  profileJson: string = '';
  @Input() checkingAccountData: CheckingAccountElement = {
    account: '00000000',
    positions: [],
    checkingAccountAmount: 0,
    consolidated: 0,
  };
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => (this.profileJson = JSON.stringify(profile, null, 2)));
  }
}
