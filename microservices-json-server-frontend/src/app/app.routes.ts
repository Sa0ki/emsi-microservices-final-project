import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {
    path: "admin", component: AdminTemplateComponent, canActivate: [AuthenticationGuard], children: [
      {path: "home", component: HomeComponent},
      {path: "products", component: ProductComponent},
      {path: "new-product", component: NewProductComponent, canActivate: [AuthorizationGuard], data: {roles: "ADMIN"}},
      {path: "edit-product/:id", component: EditProductComponent, canActivate: [AuthorizationGuard], data: {roles: "ADMIN"}},
      {path: "not-authorized", component: NotAuthorizedComponent}
    ]
  },
  {path: "", redirectTo:"login", pathMatch: "full"}
];
