import { Component, OnInit } from '@angular/core';
import {ProfilsDeSortie} from '../../../models/profils-de-sortie';
import {MatTableDataSource} from '@angular/material/table';
import {ProfilDeSortieService} from '../profil-de-sortie.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-profils-de-sortie',
  templateUrl: './profils-de-sortie.component.html',
  styleUrls: ['./profils-de-sortie.component.scss']
})
export class ProfilsDeSortieComponent implements OnInit {

  profilDeSortie: ProfilsDeSortie[];
  public displayedColumns = ['libelle', 'actions'];
  public dataSource = new MatTableDataSource<ProfilsDeSortie>();
  constructor(
    private profilDeSortService: ProfilDeSortieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._getProfilsDeSortie();
  }
  // tslint:disable-next-line:variable-name
  public _getProfilsDeSortie = () => {
    this.profilDeSortService.getAllProfilsDeSortie().subscribe(
      res => {
        this.dataSource.data = res as ProfilsDeSortie[];
      }
    );
  }
  editPro(id: number): void {
    console.log(id);
    this.router.navigate(['/home/profDeSorties/edit', id]);
  }
  deletePro(id: number): void {
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
          this.profilDeSortService.deleteProfilDeSortie(id).subscribe(
            () => {
              swal('Poof! tu viens de supprimer ce profil de sortie', {
                icon: 'success',
              });
            }
          );
        }
      });
  }


}
