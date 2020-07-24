import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  MaxLengthValidator,
} from '@angular/forms';
import { AgendaService } from '../../../services/agenda.service';
import { Observable } from 'rxjs';
import { mergeMap, tap, map } from 'rxjs/operators';
import { Contact } from '../../../services/contact.interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  contact$: Observable<Contact>;
  private id: string;

  form = new FormGroup({
    name: new FormControl('Ta mère', Validators.required),
    phone: new FormControl('12304', [Validators.required, this.validatePhone]),
    organization: new FormControl('whooouaaaa'),
    favorite: new FormControl(false),
  });

  constructor(
    //Injection de dépendance
    private activatedRoute: ActivatedRoute,
    private agendaService: AgendaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contact$ = this.activatedRoute.params.pipe(
      map((p) => p.id),
      tap((id: string) => { this.id = id;
      }),
      mergeMap((id) => this.agendaService.getById(id)),
      tap((contact) => this.form.patchValue(contact))
    );
  }

  updateContact(): void {
    console.log(this.form);
    console.log(this.form.getRawValue(), this.id);
    this.agendaService.updateContact({
      id : this.id,
      ...this.form.getRawValue()
    }).pipe(
      untilDestroyed(this),
    ).subscribe(() => {
      this.router.navigate(['contact']);
    });
  }

  private validatePhone(formControl: FormControl): ValidationErrors | null {
    const value: string = formControl.value;
    const regExOnlyNumber = /^[0-9]+$/g;
    if (value[0] === '+') {
      const allNumber = value.substr(1, value.length - 1);
      if (!regExOnlyNumber.test(allNumber)) {
        return {
          phone: true,
        };
      }
    } else {
      if (
        !regExOnlyNumber.test(value) ||
        value[0] !== '0' ||
        value.length !== 10
      ) {
        return {
          phone: true,
        };
      }
    }
  }
}
