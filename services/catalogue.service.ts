import { Injectable } from '@angular/core';
import { Catalogue } from '../src/app/catalogue';
import { Observable } from 'rxjs';
import {Avion} from '../src/objets/avion';
import { environment } from '../src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) {}
  env = environment;

  public getCatalogue(): string{
    const catalog = [
      {
        id : 1,
        airplane : 'boeing ...',
        type : 'passenger',
        price : 150000

      },
      {
        id : 2,
        airplane : 'rapace ...',
        type : 'fighter',
        price : 233000

      }
    ];
    return JSON.stringify(catalog);
  }
}



