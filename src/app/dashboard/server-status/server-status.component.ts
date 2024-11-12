import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
// In Angular (en TypeScript), "implements OnInit" geeft aan dat de klasse een bepaalde interface implementeert. De class moet zich aan de structuur van de interface houden (in dit geval OnInit). 
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  // De constructor wordt direct aangeroepen wanneer het component wordt geïnstantieerd, voordat Angular de component heeft geïnitialiseerd. De constructor kan worden gebruikt voor basisinitialisatie.
  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random(); // 0 - 0.9999999

  //     if (rnd < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.9) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // } 

  // ngOnInit is een Angular-levenscyclusmethode die wordt aangeroepen nadat de Angular-component volledig is geïnitialiseerd, inclusief de bindings en afhankelijkheden.
  ngOnInit()  {
    setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
