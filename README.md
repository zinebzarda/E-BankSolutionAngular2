# E-Bank Application

## Table des matières

1. [Description du Projet](#description-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation et Configuration](#installation-et-configuration)
5. [Sécurisation avec Spring Security](#sécurisation-avec-spring-security)
6. [Déploiement avec Docker](#déploiement-avec-docker)
7. [Structure du Projet](#structure-du-projet)
8. [Contributeurs](#contributeurs)

## Description du Projet

L'application E-Bank vise à offrir aux clients une expérience fluide et accessible pour la gestion de leurs comptes bancaires, cartes bancaires, transferts d'argent et l'authentification sécurisée. Elle est développée en utilisant Angular pour le front-end et Spring Boot pour le back-end.

## Fonctionnalités

### Gestion des Comptes

- Création de comptes bancaires (courant, épargne, etc.)
- Consultation des soldes et des historiques de transactions
- Fermeture de comptes bancaires

### Gestion des Cartes Bancaires

- Consultation des informations de la carte
- Activation et désactivation de la carte
- Blocage en cas de perte ou de vol

### Transferts d'Argent

- Transferts internes entre comptes du même utilisateur
- Transferts externes vers des comptes dans d'autres banques
- Gestion des bénéficiaires

### Authentification

- Authentification via nom d'utilisateur et mot de passe
- Génération et utilisation de JWT pour sécuriser les communications

## Technologies Utilisées

- **Front-end**: Angular 2+, TypeScript, SCSS, Bootstrap ou TailwindCSS
- **Back-end**: Spring Boot, Spring Security, JWT
- **Build Tools**: Angular CLI
- **Déploiement**: Docker

## Installation et Configuration

### Prérequis

- Node.js et npm
- Angular CLI
- JDK 11+
- Docker

### Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-utilisateur/e-bank.git
   cd e-bank

cd frontend
npm install

ng build

cd ../backend
./mvnw spring-boot:run

## Déploiement avec Docker
docker build -t e-bank-backend .

docker run -p 8080:8080 e-bank-backend

## Structure du Projet

e-bank/

├── backend/

│ ├── src/

│ │ ├── main/

│ │ │ ├── java/com/bank/ebank/

│ │ │ │ ├── controller/

│ │ │ │ ├── model/

│ │ │ │ ├── repository/

│ │ │ │ ├── service/

│ │ │ │ └── EBankApplication.java

│ │ └── resources/

│ │ └── application.properties

├── frontend/

│ ├── src/

│ │ ├── app/

│ │ │ ├── components/

│ │ │ ├── services/

│ │ │ ├── models/

│ │ │ ├── app.module.ts

│ │ │ └── app.component.ts

└── README.md



## Contributeurs
ZARDA ZINEB 
zinebzarda1@gmail.com



