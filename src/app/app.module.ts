import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './layouts/home/home.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginInterceptor} from './modules/login/login.interceptor';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DefaultsComponent } from './layouts/defaults/defaults.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateUserComponent } from './modules/users/update-user/update-user.component';
import {MatSelectModule} from '@angular/material/select';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import { AddProfilsDeSortieComponent } from './modules/profils-de-sortie/add-profils-de-sortie/add-profils-de-sortie.component';
import { AddGroupeDeCompetencesComponent } from './modules/groupes-de-competences/add/add-groupe-de-competences.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ListCompetencesComponent } from './modules/competences/list-competences/list-competences.component';
import { AddCompetencesComponent } from './modules/competences/add-competences/add-competences.component';
import { ProfilsListResolverService } from './modules/profils/list-profils/profils-list-resolver.service';
import { DetailsUserComponent } from './modules/users/details-user/details-user.component';
import { UsersComponent } from './modules/users/users/users.component';
import { NiveauxComponent } from './modules/competences/niveaux/niveaux.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginLayoutComponent,
        DefaultsComponent,
        UpdateUserComponent,
        AddProfilsDeSortieComponent,
        AddGroupeDeCompetencesComponent,
        ListCompetencesComponent,
        AddCompetencesComponent,
        DetailsUserComponent,
        UsersComponent,
        NiveauxComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MatTabsModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoginInterceptor,
            multi: true
        },
        ProfilsListResolverService
    ],
  exports: [
  ],
    bootstrap: [AppComponent],
})
export class AppModule { }
