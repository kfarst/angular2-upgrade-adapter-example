import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, Response } from '@angular/http';

import { AppSettings } from './app_settings';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export interface Movie {
  id: number;
  title: string;
  year: number;
  mpaa_rating: string;
  runtime: number;
  release_dates: any[];
  ratings: any[];
  synopsis: string;
  posters: any[];
  abridged_cast: any[];
  alternate_ids: any[];
  links: any[];
}

class BaseResource {
  url(resourceType: string, categoryType: string): string {
    return `/api/public/v1.0/lists/${resourceType}/${categoryType}.json?apikey=${AppSettings.API_KEY}`;
  }
}

@Injectable()
export class MoviesApi extends BaseResource {
  constructor(private http: Http) {
    super();
  }

  get(options: any): Promise<Movie[]> {
    return this.http.get(this.url('movies', options.type.replace('-', '_'))).
      toPromise().
      then(response => response.json().movies).
      catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class RentalsApi extends BaseResource {
  constructor(private http: Http) {
    super();
  }

  get(options: any): Promise<Movie[]> {
    return this.http.get(this.url('dvds', options.type.replace('-', '_'))).
      toPromise().
      then(response => response.json().movies).
      catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
