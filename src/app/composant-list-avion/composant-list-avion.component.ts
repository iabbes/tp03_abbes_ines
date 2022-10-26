import { Component, OnInit } from '@angular/core';
import { Observable, Subject, map, filter } from 'rxjs';
import { Plane } from '../models/plane.model';
import { PlaneService } from '../services/plane.service';


@Component({
  selector: 'app-composant-list-avion',
  templateUrl: './composant-list-avion.component.html',
  styleUrls: ['./composant-list-avion.component.css']
})
export class ComposantListAvionComponent implements OnInit {
  searchText: any;
  plane$ !: Observable<Plane[]>;
  private destroy$!: Subject<boolean>;

  constructor(private planeService: PlaneService) { }

  ngOnInit(): void {
    this.plane$ = this.planeService.getAllPlanes();

    this.destroy$ = new Subject<boolean>();
  }

  filter(name) {
    /*
    return this.plane$.pipe(
      map(projects =>projects.filter(proj => proj.airplane === name)
      )
    ).subscribe();*/
    
  }


  

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
