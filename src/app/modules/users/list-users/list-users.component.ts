import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/users';
import {UsersService} from '../users.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @Input() user: User;

  public displayedColumns: string[] = ['photo', 'prenom', 'nom', 'email', 'profil', 'actions'];
  public dataSource = new MatTableDataSource<User>();
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.userService.getAllUsers().subscribe(
      response => {
        this.dataSource.data = response as User[];
      });
  }
  viewUser(id: number): void {
    console.log(id);
    this.router.navigate(['/home/users/detailsUser', id]);
  }
  editUser(id: number): void {
    console.log(id);
    this.router.navigate(['/home/users/editUser', id]);
  }
  deleteUser(id: number): void {
    console.log(id);
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
          this.userService.deleteUser(id).subscribe(
            () => {
              swal('Poof! tu viens de supprimer cet utilisateur', {
                icon: 'success',
              });
            }
          );
        }
      });
  }


}
