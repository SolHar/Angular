import { Component, OnInit } from '@angular/core';
import { PlaceholderJsonService } from '../placeholder-json.service';
import { AgendaService } from '../../../services/agenda.service';
import { Observable } from 'rxjs';
import { Contact } from '../../../services/contact.interface';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favorites$: Observable<Contact[]>;

  //constructor(private placeholderJsonService  : PlaceholderJsonService) { }
  constructor(public agendaService : AgendaService) { }
  ngOnInit(): void {
    // traitement du retour de la requete
  //   this.placeholderJsonService.getList().subscribe({
  //     //
  //     next: (value) => {
  //       console.log(value);

  //     },
  //     error: (reason) => {

  //     },
  //     // n'envoie pas de valeur
  //     complete: () => {

  //     }
  //   });

  //   this.placeholderJsonService.createPost({
  //     title : '',
  //     body: '',
  //     userId: 77,
  //   }).subscribe((w) => console.log(w))

    this.favorites$ = this.agendaService.favorites$;
  }


}
