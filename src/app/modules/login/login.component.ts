import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  public formSubmitAttemp: boolean;
  tokenDecode: string;
  helper = new JwtHelperService();
  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }
  submitForm(form): void {
    console.log(form);
    this.loginInvalid = false;
    this.formSubmitAttemp = false;
    if (this.form.valid) {
      this.authService.login(form).subscribe(
        (response: any) => {
          const Token = response.token;
          this.tokenDecode = this.helper.decodeToken(Token);
          // console.log(this.tokenDecode);
          const link = ['/home'];
          localStorage.setItem('token', Token);
          this.router.navigate(link);
        },
        (error) => {
          console.log(error);
          this.loginInvalid = true;
        }
      );
    } else {
      this.formSubmitAttemp = true;
    }
  }

  ngOnInit(): void {
  }

}
