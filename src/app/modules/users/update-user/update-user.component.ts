import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  imageURL: string;
  myForm: FormGroup;
  Profil: any = ['ADMIN', 'FORMATEUR', 'CM'];
  readonly maxSize = 104857600;
  constructor(public fb: FormBuilder) {
    // Reactive Form
    this.myForm = this.fb.group({
      avatar: [null],
      prenom: [''],
      nom: [''],
      email: [''],
      profil: ['']
    });
  }

  ngOnInit(): void { }
  reset(): any {
    this.myForm.reset();
  }


  // Image Preview
  // tslint:disable-next-line:typedef
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      avatar: file
    });
    this.myForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  submit(): void {
    console.log(this.myForm.value);
  }

}
