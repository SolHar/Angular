import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../../../services/agenda.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from '../../../services/contact.interface';
import { tap } from 'rxjs/operators';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css'],
})
export class NewcontactComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, this.validatePhone]),
  });

  constructor(private agendaService: AgendaService, private router: Router) {}

  ngOnInit(): void {}

  addContact(): void {
    console.log(this.addForm);
    if (this.addForm.valid) {
      const formData = this.addForm.getRawValue();
      const name = formData.name;
      const phone = formData.phone;
      this.agendaService
        .addContact(name, phone)
        .pipe(untilDestroyed(this))
        .subscribe(() => {
          this.router.navigate(['contact']);
        });
    }
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
