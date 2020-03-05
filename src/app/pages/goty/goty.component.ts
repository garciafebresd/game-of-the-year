import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';
import Swal from 'sweetalert2';

interface Votes {
  ok: boolean;
  message: string;
}

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styles: ['.card-columns { column-count: 4; }']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.gameService.getGames().subscribe(response => {
      console.log(response);
      this.games = response;
    });
  }

  votar(game: Game) {
    this.gameService.votes(game.id).subscribe((response: Votes) => {

      if (response.ok) {
        Swal.fire('Gracias', response.message, 'success');
      } else {
        Swal.fire('Oops', response.message, 'error');
      }
    });
  }


}
