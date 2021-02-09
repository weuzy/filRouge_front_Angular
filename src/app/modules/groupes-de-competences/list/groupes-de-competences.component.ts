import { Component, OnInit } from '@angular/core';
import {GroupeDeCompetencesService} from '../groupe-de-competences.service';
import {GroupeDeCompetences} from '../../../models/groupe-de-competences';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-groupes-de-competences',
  templateUrl: './groupes-de-competences.component.html',
  styleUrls: ['./groupes-de-competences.component.scss']
})
export class GroupesDeCompetencesComponent implements OnInit {
  panelOpenState = false;
  groupeDeCompetences: GroupeDeCompetences[] = [];
  constructor(
    private grpDeCompet: GroupeDeCompetencesService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getGroupeDeCompetences();
  }
  public getGroupeDeCompetences = () => {
    this.grpDeCompet.getAllGroupeDeCompetences().subscribe(
        res => {
          this.groupeDeCompetences = res;
          // console.log(res);
        }
    );
  }
  editGrpCompetence(id: number): void {
    console.log(id);
    this.router.navigate(['/home/addGrpCompetences', id]);
  }
  deleteGrpCompetence(id: number): void {
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
          this.grpDeCompet.deleteGroupeDeCompetence(id).subscribe(
            () => {
              swal('Poof! tu viens de supprimer un groupe de compétence', {
                icon: 'success',
              });
            }
          );
        }
      });
  }

}
