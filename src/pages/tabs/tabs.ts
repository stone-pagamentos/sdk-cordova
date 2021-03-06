import { Component } from '@angular/core';

import { TransactionListPage } from '../list/list';
import { TransactionPage } from '../transaction/transaction';
import { ValidationPage } from '../validation/validation';
import { DevicesPage } from '../devices/devices';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = ValidationPage;
  tab2Root = TransactionPage;
  tab3Root = TransactionListPage;
  tab4Root = DevicesPage;

  constructor() {
  }

}
