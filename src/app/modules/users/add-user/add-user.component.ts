import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileValidator} from 'ngx-material-file-input';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
import {UsersService} from '../users.service';
import {User} from '../../../models/users';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {
  user: User;
  panelTitle: string;
  imageURL: string;
  uploadForm: FormGroup;
  Profil: any = ['ADMIN', 'FORMATEUR', 'CM'];
  selectedFile: File = null;
  readonly maxSize = 104857600;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
    ) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      photo: ['', [Validators.required, FileValidator.maxContentSize(this.maxSize)]],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$')]],
      profils: ['', Validators.required],
      genre: ['M']
    });
  }
  onFIleSelected(event): void {
    this.selectedFile = (event.target.files[0] as File);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getUser(id);
      }
    );
  }
  private getUser(id: number): void {
    if (id === 0) {
      this.user = {
        adresse: '', password: '', profil: {libelle: ''}, telephone: 0, username: '',
        id: null,
        photo: null,
        prenom: null,
        nom: null,
        email: null,
        profils: null,
        genre: null
      };
      this.panelTitle = 'Ajout';
    } else {
      this.panelTitle = 'Modification';
      this.userService.getUser(id).subscribe(
        (user) => {
          this.user = user;
          console.log(user);
        },
        (error: any) => console.log(error)
      );
    }
  }
  // Submit Form
  submit(): void {
    const fd = new  FormData();
    fd.append('photo', this.selectedFile);
    fd.append('prenom', this.uploadForm.value.prenom);
    fd.append('nom', this.uploadForm.value.nom);
    fd.append('email', this.uploadForm.value.email);
    fd.append('profils', this.uploadForm.value.profils);
    fd.append('genre', this.uploadForm.value.genre);
    if (this.user.id === null) {
      console.log(this.uploadForm.value);
      this.http.post(environment.urlAdress + 'admin/users', fd).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/home/users']);
        }
      );
    } else {
      console.log(this.uploadForm.value);
      this.http.put(`${(environment.urlAdress + 'admin/users')}/${this.user.id}`, fd).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/home/users']);
        }
      );
    }
  }

}

