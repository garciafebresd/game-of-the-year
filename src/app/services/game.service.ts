import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game.interface';
import { of, pipe } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor(private httpClient: HttpClient) { }

  getGames() {

    if (this.games.length > 0) {
      return of(this.games);
    }

    return this.httpClient.get<Game[]>(environment.url + '/api/goty')
      .pipe(tap(games => this.games = games));

  }

  votes(id: string) {
    return this.httpClient.post(environment.url + `/api/goty/${id}`, {}).pipe(
      catchError( (error: any) => {
        return of(error.error);
      })
    );
  }
}
