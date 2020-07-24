import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../../../services/contact.interface';

@Pipe({
  name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {

  transform(value: Contact, sep = ', ', end = '.'): string {
    console.log('value', value);
    let result = value.name;
    if(value.organization){
      result += sep + value.organization + end;
    }
      return result;

  }

}

