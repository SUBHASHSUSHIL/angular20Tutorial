import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlowStatement } from './components/control-flow-statement/control-flow-statement';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [ControlFlowStatement, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
  loggedUseName: string = '';

  constructor(private masterService: Master) {
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData();
    })
  }

  readLoggedData() {
    const loggedData = localStorage.getItem("angular20User");
    if (loggedData != null) {
      this.loggedUseName = loggedData;
    }
  }

  onLogOff() {
    localStorage.removeItem("angular20User");
  }
}
