import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export interface WalletItemElement {
  symbol: string;
  amount: number;
  currentPrice: number;
}
export interface WalletListElement {
  positions: Array<WalletItemElement>;
}

export interface PeriodicElement {
  active: string;
  price: number;
  amount: number;
  invested: number;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnChanges {
  loading = false
  @Input() checkingAccountData: WalletListElement = {
    positions: [
      {
        symbol: '',
        amount: 0,
        currentPrice: 0,
      },
    ],
  };
  displayedColumns: string[] = ['active', 'amount', 'price', 'invested'];
  dataSource: PeriodicElement[] = [];
 
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.checkingAccountData) return
    this.loading = true
    this.dataSource = this.checkingAccountData.positions.reduce((prev, current) => {
      prev.push({
        active: current.symbol,
        amount: current.amount,
        price: current.currentPrice,
        invested: current.amount * current.currentPrice,
      });
      return prev;
    }, [] as PeriodicElement[]);
  }
  
}
