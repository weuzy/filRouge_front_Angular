import { Component, OnInit } from '@angular/core';
import {Profil} from '../../../models/profil';
import {User} from '../../../models/users';
import {ProfilsService} from '../profils.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-profil',
  templateUrl: './details-profil.component.html',
  styleUrls: ['./details-profil.component.scss']
})
export class DetailsProfilComponent implements OnInit {

  profil: Profil;
  user: User[];
  id: number;
  public displayedColumns: string[] = ['photo', 'prenom', 'nom', 'email'];
  constructor(
    private profilService: ProfilsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id');
        this.profilService.getProfilUsers(this.id).subscribe(
          response => { this.user = response; },
          (error: any) => { console.log(error); }
        );
      }
    );
  }

}
