import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public appStateService: AppStateService, private router: Router) {
  }
  actions: Array<any> = [
    {title: "Home", "route": "/admin/home", icon: "house"},
    {title: "Product", "route": "/admin/products", icon: "suitcase"},
    {title: "New Product", "route": "/admin/new-product", icon: "database-add"},
  ];
  currentAction: any;
  setCurrentAction(action: any){
    this.currentAction = action;
  }

  logout(){
    this.appStateService.authState = {};
    this.router.navigateByUrl("/login");
  }

  login(){

  }
}

