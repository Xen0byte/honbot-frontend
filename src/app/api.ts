import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../environments/environment';

@Injectable()
export class Api {
  private url: string = environment.backendUrl;

  constructor(private http: Http) { }

  getPlayerSeason(nickname: string): Promise<any[]> {
    const url = `${this.url}/season/${nickname}`;
    return this.http
      .get(url)
      .map(res => res.json())
      .toPromise();
  }
}