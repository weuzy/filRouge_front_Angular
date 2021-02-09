import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/models/profil';
import { ResolvedProfilsList } from 'src/app/models/resolved-profilslist.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.scss']
})
export class ListProfilsComponent implements OnInit {
  profils: Profil[];
  error: string;
  constructor(
    private route: ActivatedRoute
  ) {
    // tslint:disable-next-line:no-string-literal
      const resolvedProfilsList: ResolvedProfilsList = this.route.snapshot.data['profilsList'];
      if (resolvedProfilsList.error == null) {
              this.profils = resolvedProfilsList.profilsList;
          } else {
            this.error = resolvedProfilsList.error;
          }
   }

  ngOnInit(): void {
  }

}
