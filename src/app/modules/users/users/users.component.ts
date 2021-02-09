import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/users';
import {ActivatedRoute} from '@angular/router';
import {ResolvedUsersList} from '../../../models/resolved-userslist.models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  error: string;
  constructor(
    private route: ActivatedRoute
  ) {
    const resolvedUsersList: ResolvedUsersList = this.route.snapshot.data['usersList'];
    if (resolvedUsersList.error == null) {
      this.users = resolvedUsersList.usersList;
    } else {
      this.error = resolvedUsersList.error;
    }
  }

  ngOnInit(): void {
  }

}
