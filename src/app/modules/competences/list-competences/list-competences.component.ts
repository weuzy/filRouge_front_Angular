import { Component, OnInit } from '@angular/core';
import {CompetencesService} from '../competences.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GroupeDeCompetencesService} from '../../groupes-de-competences/groupe-de-competences.service';
import {GroupeDeCompetences} from '../../../models/groupe-de-competences';


@Component({
  selector: 'app-list-competences',
  templateUrl: './list-competences.component.html',
  styleUrls: ['./list-competences.component.scss']
})
export class ListCompetencesComponent implements OnInit {
  competenceControl = new FormControl('', Validators.required);
  comps: any;
  grpCompetences: GroupeDeCompetences[] = [];
  constructor(
    private competencesService: CompetencesService,
    private grpComService: GroupeDeCompetencesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCompetences();
  }
  public getCompetences = () => {
    this.grpComService.getAllGroupeDeCompetences().subscribe(
      res => {
        this.grpCompetences = res;
        console.log(res);
      }
    );
  }
  showNiveaux(id: number): void {
    console.log(id);
    this.router.navigate(['/home/listCompetences/competenceNiveaux', id]);
  }
  updateIndex(): void {
/*
    console.log(this.animalControl.value);
*/
    this.comps = (this.competenceControl.value as GroupeDeCompetences).competences;
    console.log(this.comps);
  }

}
