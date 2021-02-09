import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {LoginComponent} from '../../modules/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PromoComponent} from '../../modules/promo/promo.component';
import {ProfilsDeSortieComponent} from '../../modules/profils-de-sortie/list/profils-de-sortie.component';
import {ReferentielsComponent} from '../../modules/referentiels/referentiels.component';
import {GroupesDeCompetencesComponent} from '../../modules/groupes-de-competences/list/groupes-de-competences.component';
import {ListUsersComponent} from '../../modules/users/list-users/list-users.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AddUserComponent} from '../../modules/users/add-user/add-user.component';
import {MatSelectModule} from '@angular/material/select';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {MatExpansionModule} from '@angular/material/expansion';
import { ListProfilsComponent } from 'src/app/modules/profils/list-profils/list-profils.component';
import { DisplayProfilsComponent } from 'src/app/modules/profils/display-profils/display-profils.component';
import { CreateProfilsComponent } from '../../modules/profils/create-profils/create-profils.component';
import { DetailsProfilComponent } from 'src/app/modules/profils/details-profil/details-profil.component';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    PromoComponent,
    ProfilsDeSortieComponent,
    ReferentielsComponent,
    GroupesDeCompetencesComponent,
    ListUsersComponent,
    AddUserComponent,
    ListProfilsComponent,
    DisplayProfilsComponent,
    CreateProfilsComponent,
    DetailsProfilComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MatSidenavModule,
        MatDividerModule,
        MatCardModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatTableModule,
        MatPaginatorModule,
        FormsModule,
        MatDialogModule,
        MatSelectModule,
        MaterialFileInputModule,
        MatExpansionModule,
        MatRadioModule
    ],
    exports: [
        ListUsersComponent
    ]
})
export class HomeModule { }
