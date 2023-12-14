import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe,
    FormsModule,
    NgClass
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  public products: Array<Product> = [];
  public keyword: string = "";
  public totalPages: number = 0;
  public pageSize: number = 2;
  public currentPage: number = 1;
  constructor(private productService: ProductService, private router: Router, public appStateService:AppStateService) {
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts(this.keyword, this.currentPage, this.pageSize).subscribe({
      next: resp => {
        this.products = resp.body as Product[];
        let totalProducts: number = parseInt(resp.headers.get("x-total-count")!)
        this.totalPages = Math.floor(totalProducts / this.pageSize);
        if(totalProducts % this.pageSize != 0)
          this.totalPages ++;
      }, error: err => {console.log(err)}
    });
  }

  checkProduct(product: Product){
    this.productService.checkProduct(product).subscribe({
      next: updatedProduct => {
        product.checked = !product.checked;
      }
    });
  }
  deleteProduct(product: Product){
    if(confirm("Supprimer le produit " + product.name + " ?"))
      this.productService.deleteProduct(product).subscribe({
      next: value => {
        this.products = this.products.filter(p => p.id != product.id);
        }
      })
  }
  updateProduct(product: Product){
    this.router.navigateByUrl(`admin/edit-product/${product.id}`)
  }
  goToPage(pageNumber: number){
    this.currentPage = pageNumber;
    this.getProducts();
  }
}
