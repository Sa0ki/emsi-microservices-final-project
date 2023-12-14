import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  public productId: number = 0;
  public productForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
              private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.productForm = this.formBuilder.group(
          {
            id: this.formBuilder.control(product.id),
            name: this.formBuilder.control(product.name, [Validators.required]),
            price: this.formBuilder.control(product.price, [Validators.required]),
            checked: this.formBuilder.control(product.checked, [Validators.required])
          }
        )
      }, error: err => {
        console.log(err);
      }
    })
  }
  updateProduct(){
    let product: Product = this.productForm.value;
    this.productService.updateProduct(product).subscribe({
      next: data => {
        alert("Produit modifié !")
      }
    })
  }
}
