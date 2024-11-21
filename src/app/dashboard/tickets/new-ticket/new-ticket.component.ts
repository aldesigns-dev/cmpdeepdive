import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{title: string, text: string}>();

  ngOnInit() {
    console.log('ON INIT');
    // console.log(this.form?.nativeElement); // @ViewChild
    console.log(this.form().nativeElement); // viewChild signal function
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    // console.log(this.form?.nativeElement); // @ViewChild
    console.log(this.form().nativeElement); // viewChild signal function
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText});
    // this.form?.nativeElement.reset(); // @ViewChild
    this.form().nativeElement.reset(); // viewChild signal function
  }
}
