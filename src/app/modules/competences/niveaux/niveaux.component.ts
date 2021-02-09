import { Component, OnInit } from '@angular/core';
import {Competences} from '../../../models/competences';
import {CompetencesService} from '../competences.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-niveaux',
  templateUrl: './niveaux.component.html',
  styleUrls: ['./niveaux.component.scss']
})
export class NiveauxComponent implements OnInit {
  competence: Competences;
  id: number;
  selected = new FormControl(0);

  constructor(
    private competencesService: CompetencesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id');
        this.competencesService.getCompetence(this.id).subscribe(
          response => { this.competence = response; },
          (error: any) => { console.log(error); }
        );
      }
    );
  }

}
