import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/game.interface';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  games: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('goty').valueChanges()
    .pipe(
      map((response: Game[]) => {
        return response.map( ({name, votos}) => ({name, value: votos}));
      })
    )
    .subscribe(games => {
      this.games = games;
    });
  }

}
