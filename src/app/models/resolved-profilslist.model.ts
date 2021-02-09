import { Profil } from '../models/profil';

export class ResolvedProfilsList {
  constructor(public profilsList: Profil[], public error: string = null) {

  }
}
