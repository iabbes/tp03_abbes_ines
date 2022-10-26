import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'services/catalogue.service';
import { Avion  } from 'src/objets/avion';

@Component({
  selector: 'app-composant-afficher-avion',
  templateUrl: './composant-afficher-avion.component.html',
  styleUrls: ['./composant-afficher-avion.component.css']
})
export class ComposantAfficherAvionComponent implements OnInit {

  catalog !: Avion[];
  constructor(private  service: CatalogueService) { }

  ngOnInit(): void {
    const catalogString = this.service.getCatalogue();
    const catalog = JSON.parse(catalogString);
  }

}
