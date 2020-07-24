import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';


@Component({
  selector: 'app-phone-keyboard',
  templateUrl: './phone-keyboard.component.html',
  styleUrls: ['./phone-keyboard.component.css']
})
export class PhoneKeyboardComponent implements OnInit{

  buttons = [1,2,3,4,5,6,7,8,9,'*', 0,'#'];
  @Input()current = '';

  @Output() currentChange = new EventEmitter<string>();

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
  }

  clickTo(btn: number) : void{
    console.log('btn', btn);
    this.current += btn + '';
    this.called();
  }

  clearAll() : void {
    this.current = '';
    this.called();

  }

  deleteLastOne() : void {
    this.current = this.current.substring(0, this.current.length -1);
    this.called();

  }

  called() : void{
    this.currentChange.emit(this.current);
  }
}
