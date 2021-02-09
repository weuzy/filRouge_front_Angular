export interface GroupeDeCompetences {
  id: number;
  libelle: string;
  descriptif: string;
  competences: [
    {
      libelle: string;
    }
  ];
  tags: [
    {
      libelle: string;
    }
  ];
}
