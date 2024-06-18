import { Component } from '@angular/core';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TrafficComponent } from './traffic/traffic.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardItemComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
