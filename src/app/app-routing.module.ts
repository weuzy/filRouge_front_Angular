import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layouts/home/home.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {LoginComponent} from './modules/login/login.component';
import {PromoComponent} from './modules/promo/promo.component';
import {ProfilsDeSortieComponent} from './modules/profils-de-sortie/list/profils-de-sortie.component';
import {ReferentielsComponent} from './modules/referentiels/referentiels.component';
import {GroupesDeCompetencesComponent} from './modules/groupes-de-competences/list/groupes-de-competences.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {LoginGuard} from './auth/login.guard';
import {DefaultsComponent} from './layouts/defaults/defaults.component';
import {AddUserComponent} from './modules/users/add-user/add-user.component';
import {UpdateUserComponent} from './modules/users/update-user/update-user.component';
import {AddProfilsDeSortieComponent} from './modules/profils-de-sortie/add-profils-de-sortie/add-profils-de-sortie.component';
import {AddGroupeDeCompetencesComponent} from './modules/groupes-de-competences/add/add-groupe-de-competences.component';
import { ListProfilsComponent } from './modules/profils/list-profils/list-profils.component';
import { ProfilsListResolverService } from './modules/profils/list-profils/profils-list-resolver.service';
import { CreateProfilsComponent } from './modules/profils/create-profils/create-profils.component';
import { DisplayProfilsComponent } from './modules/profils/display-profils/display-profils.component';
import { DetailsProfilComponent } from './modules/profils/details-profil/details-profil.component';
import {UsersComponent} from './modules/users/users/users.component';
import {UsersListResolverService} from './modules/users/users/users-list-resolver.service';
import {DetailsUserComponent} from './modules/users/details-user/details-user.component';
import {ListCompetencesComponent} from './modules/competences/list-competences/list-competences.component';
import {NiveauxComponent} from './modules/competences/niveaux/niveaux.component';
import {AddCompetencesComponent} from './modules/competences/add-competences/add-competences.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
        {
          path: '',
          component: DashboardComponent
        },
        {
          // TODO de tous les utilisateurs
          path: 'users',
          component: UsersComponent,
          resolve: { usersList: UsersListResolverService},
          children: [
            {
              path: 'editUser/:id',
              component: AddUserComponent
            },
            {
              path: 'updateUser/:id',
              component: UpdateUserComponent
            },
            {
              path: 'detailsUser/:id',
              component: DetailsUserComponent
            }
          ]
        },
        {
          // TODO liste des profils
          path: 'profils',
          component: ListProfilsComponent,
          resolve: { profilsList: ProfilsListResolverService},
          children: [
            {
              path: 'addProfil',
              component: CreateProfilsComponent
            },
            {
              path: 'updateProfil/:id',
              component: CreateProfilsComponent
            },
            {
              // TODO liste des utilidateurs d'un profil
              path: 'listPro/:id/users',
              component: DisplayProfilsComponent
            },
            {
              path: 'detailsProfil/:id',
              component: DetailsProfilComponent
            }
          ]
        },
        {
          path: 'promos',
          component: PromoComponent
        },
        {
          //  TODO liste des profils de sortie
          path: 'profDeSorties',
          component: ProfilsDeSortieComponent, children: [
            {
              path: 'edit/:id',
              component: AddProfilsDeSortieComponent
            }
          ]
        },
        {
          path: 'referentiels',
          component: ReferentielsComponent
        },
        {
          path: 'grpCompetences',
          component: GroupesDeCompetencesComponent
        },
        {
          path: 'addGrpCompetences/:id',
          component: AddGroupeDeCompetencesComponent
        },
        {
          path: 'listCompetences',
          component: ListCompetencesComponent,
          children: [
            {
              path: 'competenceNiveaux/:id',
              component: NiveauxComponent
            }
          ]
        },
        {
          path: 'editCompetence/:id',
          component: AddCompetencesComponent
        }
      ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: DefaultsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
