import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { Contact } from './contact.interface';
import { map, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private contactsCollection: AngularFirestoreCollection<Contact>;
  private collectionName = 'contacts';

  constructor(private afs: AngularFirestore) {

    this.contactsCollection = this.afs.collection<Contact>(this.collectionName);
  }

  get contacts$(): Observable<Contact[]> {
    return this.afs
      .collection<Contact>(this.collectionName)
      .valueChanges({ idField: 'id' });
  }

  get favorites$(): Observable<Contact[]> {
    return this.contacts$.pipe(
      //pipe() : prends des operateurs
      //map() : operateur de transformation, renvoie un nouveau tableau de
      //contacts avec application du filter
      map((contacts) => {
        return contacts.filter((c) => c.favorite);
      }),
      tap((c) => console.log('tap toto', c))
    );
  }

  /////////////// < Méthode > \\\\\\\\\\\\\

  getById(id: string): Observable<Contact> {
    return this.afs
      .collection<Contact>(this.collectionName)
      .doc<Contact>(id)
      .valueChanges()
      .pipe(
        map((contact) => {
          contact.id = id;
          return contact;
        })
      );
  }

  updateContact(contact: Contact): Observable<void> {
    return from(
      this.afs
        .collection<Contact>(this.collectionName)
        .doc(contact.id)
        .update(contact)
    );
  }

  addContact(name:string, phone: string): Observable<void>{
    const id = this.afs.createId();
    const item: Contact = {
      id,
      name,
      phone
    };
    return from(this.contactsCollection.doc(id).set(item));
  }

  deleteItem(contact: Contact): Observable<void> {
    return  of(contact).pipe(
      mergeMap(contactDeleted => {
        return from(
          this.afs
          .collection<Contact>(this.collectionName)
          .doc(contactDeleted.id)
          .delete()
        );
      })
    );


  }


}
