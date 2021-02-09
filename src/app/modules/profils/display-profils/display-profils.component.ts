import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Profil } from '../../../models/profil';
import { ProfilsService } from '../profils.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-display-profils',
  templateUrl: './display-profils.component.html',
  styleUrls: ['./display-profils.component.scss']
})
export class DisplayProfilsComponent implements OnInit {

  @Input() profil: Profil;

  displayedColumns = ['libelle', 'actions'];
  dataSource = new MatTableDataSource<Profil>();
  constructor(
    private proService: ProfilsService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.proService.getAllProfils().subscribe(
        response => {
          this.dataSource.data = response as Profil[];
        });
    }
    viewProfil(id: number): void {
      console.log(id);
      this.router.navigate(['/home/profils/detailsProfil', id]);
    }
    editProfil(id: number): void {
      console.log(id);
      this.router.navigate(['/home/profils/updateProfil', id]);
    }
    deleteProfil(id: number): void {
      swal({
        title: 'Êtes-vous sûre?',
        // text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: 'warning',
        // @ts-ignore
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            this.proService.deleteProfil(id).subscribe(
              () => {
                swal('Poof! tu viens de supprimer ce profil', {
                  icon: 'success',
                });
              }
            );
          }
        });
    }


}
