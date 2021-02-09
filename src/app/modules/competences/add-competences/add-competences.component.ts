import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupeDeCompetencesService} from '../../groupes-de-competences/groupe-de-competences.service';
import {GroupeDeCompetences} from '../../../models/groupe-de-competences';
import {Niveaux} from '../../../models/niveaux';

@Component({
  selector: 'app-add-competences',
  templateUrl: './add-competences.component.html',
  styleUrls: ['./add-competences.component.scss']
})
export class AddCompetencesComponent implements OnInit {
  form: FormGroup;
  competenceControl = new FormControl('', [Validators.required]);
  comps: any;
  grpCompetences: GroupeDeCompetences[] = [];
  niveaux: Niveaux[] = [];
  constructor(
    private fb: FormBuilder,
    private grpCompService: GroupeDeCompetencesService
  ) {
    this.form = this.fb.group({
      libelle: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCompetences();
  }
  public getCompetences = () => {
    this.grpCompService.getAllGroupeDeCompetences().subscribe(
      res => {
        this.grpCompetences = res;
        console.log(res);
      }
    );
  }
  public getNiveaux = () => {

  }

}
