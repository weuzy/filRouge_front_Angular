import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfilDeSortieService} from '../profil-de-sortie.service';
import {ProfilsDeSortie} from '../../../models/profils-de-sortie';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-profils-de-sortie',
  templateUrl: './add-profils-de-sortie.component.html',
  styleUrls: ['./add-profils-de-sortie.component.scss']
})
export class AddProfilsDeSortieComponent implements OnInit {
  profilDeSortie: ProfilsDeSortie;
  myForm: FormGroup;
  panelTitle: string;
  constructor(
    private fb: FormBuilder,
    private proSortService: ProfilDeSortieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.myForm = fb.group({
      libelle: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getProfilsDeSortie(id);
      }
    );
  }
  private getProfilsDeSortie(id: number): void {
    if (id === 0) {
      this.profilDeSortie = {
        id: null,
        libelle: null
      };
      this.panelTitle = 'Ajout';
    } else {
      this.panelTitle = 'Modification';
      this.proSortService.getProfilDeSortie(id).subscribe(
        (proSortie) => this.profilDeSortie = proSortie,
        (err: any) => console.log(err)
      );
    }
  }
  saveProfilDeSortie(): void {
    // console.log(this.myForm.value);
    if (this.profilDeSortie.id === null) {
      this.proSortService.addProSortie(this.profilDeSortie)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/home/profDeSorties']);
          },
          (error: any) => {
            console.log(error);
          });
    } else {
      this.proSortService.updateProSortie(this.profilDeSortie)
        .subscribe(
          () => {
            this.router.navigate(['/home/profDeSorties']);
          },
          (error: any) => {
            console.log(error);
          });
    }
  }

}
