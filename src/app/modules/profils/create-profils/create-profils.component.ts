import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/models/profil';
import { ProfilsService } from '../../profils/profils.service';

@Component({
  selector: 'app-create-profils',
  templateUrl: './create-profils.component.html',
  styleUrls: ['./create-profils.component.scss']
})
export class CreateProfilsComponent implements OnInit {
  myForm: FormGroup;
  profil: Profil;
  id: number;
  panelTitle: string;

  constructor(
    private fb: FormBuilder,
    private profilService: ProfilsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myForm = fb.group({
      libelle: ''
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getProfil(id);
      }
    );
  }
  reset(): any {
    this.myForm.reset();
  }
  private getProfil(id: number): void {
    if (id === 0) {
        this.profil = {
          id: null,
          libelle: null,
          archive: null
        };
        this.panelTitle = 'Création';
        // this.myForm.reset();
    }  else {
    this.panelTitle = 'Modification';
    this.profilService.getProfil(id).subscribe(
        (profil) => {
          this.profil = profil;
          console.log(profil);
        },
        (err: any) => console.log(err)
      );
    }
  }
  saveProfil(): void {
    if (this.profil.id === null){
      this.profilService.addProfils(this.profil).subscribe(
        (data: Profil) => {
          console.log(data);
          this.router.navigate(['/home/profils']);
        },
        (error: any) => {
          console.log(error);
        });
    } else {
      this.profilService.updateProfil(this.profil).subscribe(
        () => {
          this.router.navigate(['/home/profils']);
        },
        (error: any) => {
          console.log(error);
        });
    }
  }

}
