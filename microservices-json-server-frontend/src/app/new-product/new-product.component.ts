import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  public productForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: this.formBuilder.control("", [Validators.required]),
      price: this.formBuilder.control(0, [Validators.required]),
      checked: this.formBuilder.control(false)
    })
  }
  saveProduct(){
    let product: Product = this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      }, error: err => {
        console.log(err);
    }
    })
  }
}
