import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (product) => (this.products = product),
      error: (e) => console.log(e),
      complete: () => console.info('completed'),
    });
  }

  addProduct() {
    this.router.navigate(['product/add']);
  }

  editProduct(id: number) {
    this.router.navigate(['product/update', id]);
  }

  deleteProduct(product: Product) {
    this.products.filter((f) => f !== product);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
