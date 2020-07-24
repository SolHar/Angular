import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AgendaService } from '../../../services/agenda.service';
import { Contact } from '../../../services/contact.interface';
import { NgModel } from '@angular/forms';
import { mergeMap, tap, map, debounceTime, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  defaultFilterName: string = '';
  private subject = new BehaviorSubject<string>(this.defaultFilterName);

  constructor(
    private agendaService: AgendaService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    ) {}

  filterByName($event: string): void {
    console.log($event);
    this.subject.next($event);
  }

  ngOnInit(): void {
  //this.contacts$ = this.agendaService.contacts$;

//Fonction de filtrage
    this.contacts$ = this.subject.pipe(
      debounceTime(250),
      switchMap((name) => {
        console.log('filter by name', name);
        return this.agendaService.contacts$.pipe(
          map((contacts) => {
            return contacts.filter((contact) => {
              return contact.name.indexOf(name) !== -1;
            });
          }),
          tap((c) => console.log('result agenda service', c))
        );
      })
    );
  }

  goToNew(): void {
    this.router.navigate(['new'],{relativeTo: this.activatedRoute });
  }

  deleteItem(contact: Contact): void{
    this.agendaService.deleteItem(contact).pipe(
      untilDestroyed(this)
      ).subscribe(() => {
        this.router.navigate(['contact']);
      });
  }

}
