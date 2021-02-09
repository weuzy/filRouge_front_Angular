import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Competences} from '../../../models/competences';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatChipInputEvent, MatChipList} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {GroupeDeCompetences} from '../../../models/groupe-de-competences';
import { GroupeDeCompetencesService } from '../groupe-de-competences.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-groupe-de-competences',
  templateUrl: './add-groupe-de-competences.component.html',
  styleUrls: ['./add-groupe-de-competences.component.scss']
})
export class AddGroupeDeCompetencesComponent implements OnInit {

  form: FormGroup;
  grpCompet: GroupeDeCompetences;
  id: number;
  panelTitle: string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCompetences: Observable<Competences[]>;
  competenceCtrl = new FormControl();
  competences: Competences[] = [];
  allCompetences: Competences[] = [];

  @ViewChild('competenceInput') competenceInput: ElementRef;
      constructor(
        private fb: FormBuilder,
        private grpCompService: GroupeDeCompetencesService,
        private route: ActivatedRoute,
        private router: Router
      ) {
        this.form = this.fb.group({
          libelle: ['', Validators.required],
          descriptif: ['', Validators.required],
          competenceCtrl: ['', Validators.required],
          // competenceInput: [null],
          // competences: [this.grpCompet.competences, this.validateFruits]
        });
        this.filteredCompetences = this.competenceCtrl.valueChanges.pipe(
          startWith(''),
          map((libelle: string | null) => {
            const competence = libelle ? this._filter(libelle) : this.allCompetences.slice();
            return competence;
          }));
      }
      ngOnInit(): void {
        this.getCompetences();
        this.route.paramMap.subscribe(
          params => {
            const id = +params.get('id');
            this.getGroupeDeCompetence(id);
          }
        );
      }
      reset(): any {
        this.form.reset();
      }
      private getGroupeDeCompetence(id: number): void {
        if (id === 0) {
          this.grpCompet = {
            id: null,
            libelle: null,
            descriptif: null,
            competences: null,
            tags: null
          };
          this.panelTitle = 'Ajout';
        } else {
          this.panelTitle = 'Modification';
          this.grpCompService.getGroupeDeCompetence(id).subscribe(
            (grpCompetence) => {
              this.grpCompet = grpCompetence;
              console.log(grpCompetence);
            },
            (error: any) => console.log(error)
          );
        }
      }
      private getCompetences(): void {
        this.grpCompService.getCompetences().subscribe(
          resp => {
            this.allCompetences = resp;
            // console.log(this.allCompetences);
          }
        );
      }
      add(event: MatChipInputEvent): void {
        const input = event.input;
        const competence = event.value as unknown as Competences;
        // Add our fruit
        if ((competence.libelle || '').trim()) {
          this.competences.push(competence);
        }
        // Reset the input value
        if (input) {
          input.value = '';
        }
        this.competenceCtrl.setValue(null);
      }
      remove(competence, indx): void {
        this.competences.splice(indx, 1);
      }
      selected(event: MatAutocompleteSelectedEvent): void {
        this.competences.push(event.option.value as Competences);
        this.competenceInput.nativeElement.value = '';
        this.competenceCtrl.setValue(null);
      }
      private _filter(libelle: any): Competences[] {
        const filterValue = libelle.toLowerCase();
        return this.allCompetences.filter(competence => competence.libelle.toLowerCase().indexOf(filterValue) === 0);
      }
      saveGroupeDeCompetence(): void {
        console.log(this.form.value);
        if (this.grpCompet.id === null) {
          this.grpCompService.addGroupeDeCompetence(this.grpCompet).subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/home/grpCompetences']);
            },
            (error: any) => {
              console.log(error);
            }
          );
        } else {
          this.grpCompService.updateGroupeDeCompetence(this.grpCompet).subscribe(
            () => {
              this.router.navigate(['/home/grpCompetences']);
            },
            (error: any) => {
              console.log(error);
            }
          );
        }
      }

}
