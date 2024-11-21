import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output(); // Output event

  onToggleDetails() {
    // ! opposite of current value (true or false)
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkAsCompleted() {
    this.close.emit(); // Emit output event
    this.detailsVisible.set(false);
  }
} 
