import {User} from './users';


export class ResolvedUsersList {
  constructor(public usersList: User[], public error: string = null) {
  }
}
