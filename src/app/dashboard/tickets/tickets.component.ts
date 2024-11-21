import { Component } from '@angular/core';

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string, text: string}) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }
    // add this ticket object to this Tickets array
    this.tickets.push(ticket);
  }

  // Updating tickets array
  onCloseTicket(id: string) {
    // Doorloop alle tickets en update het gewenste ticket
    this.tickets = this.tickets.map((ticket) => {
      // Controleer of de huidige ticket-id overeenkomt met de meegegeven id
      if (ticket.id === id) {
        // Als het overeenkomt, maak een nieuw ticketobject met de oude properties, maar wijzig de status naar 'closed'
        return { ...ticket, status: 'closed' }
      }
      return ticket;
    })
  }
}
