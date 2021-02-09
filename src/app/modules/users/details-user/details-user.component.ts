import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/users';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {
   user: User;
   id: number;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id');
        this.userService.getUser(this.id).subscribe(
          response => { this.user = response; },
          (error: any) => { console.log(error); }
        );
      }
    );
  }

}
