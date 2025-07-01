import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlowStatement } from './components/control-flow-statement/control-flow-statement';

@Component({
  selector: 'app-root',
  imports: [ControlFlowStatement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
}
