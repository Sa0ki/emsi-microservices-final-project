import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {AppStateService} from "./app-state.service";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private appStateService: AppStateService) { }

  async login(username: string, password: string){
    let user: any = await firstValueFrom(this.http.get("http://localhost:3000/users/"+username));
    if(password == atob(user.password)){
      let decodedJwt: any = jwtDecode(user.token);
      this.appStateService.setAuthState({
        username: user.id,
        roles: user.roles,
        isAuthenticated: true,
        token: user.token
      })
      return Promise.resolve(true);
    }
    return Promise.reject("Bad credentials.");
  }
}
