export interface Competences {
  id: number;
  libelle: string;
  descriptif: string;
  groupeDeCompetences: [
    {
      libelle: string;
    }
  ];
  niveaux: [
    {
      libelle: string;
      description: string;
      criterDevaluation: string;
      groupeDaction: string;
    }
  ];
}
