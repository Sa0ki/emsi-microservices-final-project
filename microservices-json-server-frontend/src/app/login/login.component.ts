import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  errorMessage = "";
  constructor(private formBuilder: FormBuilder, private router: Router,
              private authService: AuthService) {
  }
  ngOnInit(){
    this.formLogin = this.formBuilder.group({
      username: this.formBuilder.control(""),
        password: this.formBuilder.control("")
    });
  }

  login(){
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
   this.authService.login(username, password).then(response => {
     this.router.navigateByUrl("/admin/home");
   }).catch(error => {
     this.errorMessage = error;
   })
  }
}
