import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RV } from '../../shared/rv';
import { Observable } from 'rxjs/Observable';
import { NewinventoryProvider } from '../newinventory/newinventory';

import { Storage } from '@ionic/storage';

const STORAGE_KEY: Array < string > =[];


@Injectable()
export class FavoritesProvider {

  favorites: Array<any>;

  constructor( 
    public http: Http,
    public storage: Storage,
    private newinventoryservice: NewinventoryProvider) {
    
      this.favorites = [];
  }

  addFavorite(id: number): boolean {
    if (!this.isFavorite(id))
      this.favorites.push(id);
    console.log('favorites', this.favorites);
    return true;
  }

  isFavorite(id: number): boolean {
        return this.favorites.some(el => el === id);
  }

  getFavorites(): Observable<RV[]> {
    return this.newinventoryservice.getRVs()
      .map(rvs => rvs.filter(rv => this.favorites.some(el => el === rv.id)));
  }

  deleteFavorite(id: number): Observable<RV[]> {
    let index = this.favorites.indexOf(id);
    if (index >= 0) {
      this.favorites.splice(index,1);
      return this.getFavorites();
    }
    else {
      console.log('Deleting non-existant favorite', id);
      return Observable.throw('Deleting non-existant favorite' + id);
    }
  }
}




