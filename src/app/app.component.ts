import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'projetangular';

  phoneNumber = '0606060606';

  meta = {
    page : 0,
    // description est la propriété de l'objet meta
    description : 'valeur de l\'objet'
  };

  maMethode(){
    return'toto'
  };

  // Création Event
  pagination(){
    this.meta.page++
  };

  call(n) {

    this.phoneNumber = n;
  }

  RoutesLink = [
    "phone", "contact", "favoris"
  ]
}
