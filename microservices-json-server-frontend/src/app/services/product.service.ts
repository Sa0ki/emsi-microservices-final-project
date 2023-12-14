import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, takeWhile} from "rxjs";
import {Product} from "../models/product.model";
import {ProductComponent} from "../product/product.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  port: number = 3000;
  constructor(private http: HttpClient) { }
  public getProducts(keyword: string ="", page: number=1, size: number=4){
    return this.http.get<Array<Product>>(`http://localhost:${this.port}/products?name_like=${keyword}&_page=${page}&_limit=${size}`, {observe: 'response'});
  }
  public getProductById(productId: number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:${this.port}/products/${productId}`)
  }
  public checkProduct(product: Product): Observable<Product>{
    return this.http.patch<Product>(`http://localhost:${this.port}/products/${product.id}`, {checked: !product.checked});
  }
  public deleteProduct(product: Product){
    return this.http.delete<Product>(`http://localhost:${this.port}/products/${product.id}`);
  }
  public saveProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`http://localhost:${this.port}/products`, product);
  }
  public updateProduct(product: Product):Observable<Product>{
    return this.http.put<Product>(`http://localhost:${this.port}/products/${product.id}`, product);
  }
}
