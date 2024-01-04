// mouvement.component.ts

import { Component, OnInit } from '@angular/core';
import { MouvementService } from '../../mouvement.service';
import { Mouvement } from '../../mouvement.model';

@Component({
  selector: 'app-mouvement',
  templateUrl: './mouvement.component.html',
  styleUrls: ['./mouvement.component.scss']
})
export class MouvementComponent implements OnInit {
  mouvements: Mouvement[] = [];
  nouveauMouvement: Mouvement = { idMvt: 0, typeMvt: '', numCompte: '', datemvt: new Date() };

  constructor(private mouvementService: MouvementService) { }

  ngOnInit(): void {
    this.loadMouvements();
  }

  loadMouvements(): void {
    this.mouvementService.getAllMouvements().subscribe(data => {
      this.mouvements = data;
    });
  }

  ajouterMouvement(): void {
    this.mouvementService.addMouvement(this.nouveauMouvement).subscribe(() => {
      this.loadMouvements();
      this.nouveauMouvement = { idMvt: 0, typeMvt: '', numCompte: '', datemvt: new Date() };
    });
  }

  mettreAJourMouvement(idMvt: number, mouvement: Mouvement): void {
    this.mouvementService.updateMouvement(idMvt, mouvement).subscribe(() => {
      this.loadMouvements();
    });
  }

  supprimerMouvement(idMvt: number): void {
    this.mouvementService.deleteMouvement(idMvt).subscribe(() => {
      this.loadMouvements();
    });
  }
}
