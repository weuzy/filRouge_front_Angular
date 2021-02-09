export interface User {
  id: number;
  nom: string;
  prenom: string;
  telephone: number;
  photo: string;
  adresse: string;
  email: string;
  password: string;
  username: string;
  profils: string;
  profil: {
    libelle: string;
  };
  genre: string;
}
