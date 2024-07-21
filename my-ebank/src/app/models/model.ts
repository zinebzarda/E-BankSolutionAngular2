// utilisateur.model.ts
export interface Utilisateur {
  idUtillisateur: number;
  username: string;
  email: string;
  password: string;
  compte: Compte[];
}

// TransfertArgent.model.ts
export interface TransfertArgent {
  idTranfert: number;
  montant: number;
  description: string;
  compte: Compte;
  beneficiaire: Beneficiaire;
}

// transaction.model.ts
export interface Transaction {
  idTransaction: number;
  dateHeure: Date;
  montant: number;
  description: string;
  compte: Compte;
}

// Compte.model.ts
export interface Compte {
  idCompte: number;
  type: string;
  soldeInitial: number;
  dateCreation: Date;
  utilisateur: Utilisateur;
  transactions: Transaction[];
  carte: Carte[];
  transfertArgent: TransfertArgent[];
}

// carte.model.ts
export interface Carte {
  idCarte: number;
  numeroCarte: string;
  dateExpiration: Date;
  typeCarte: string;
  raisonBlocage: string;
  compteBancaire: Compte;
}

// beneficiaire.model.ts
export interface Beneficiaire {
  idBenificiaire: number;
  nomBenificiaire: string;
  numeroCompte: string;
  banque: string;
  date: Date;
  transfertArgent: TransfertArgent[];
}

