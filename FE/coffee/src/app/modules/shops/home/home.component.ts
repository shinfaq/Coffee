import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}

  listProduct = [];
  async ngOnInit(): Promise<void> {
    this.listProduct = await this.getAllProduct();
  }

  getAllProduct() {
    return this.productService.getAll().toPromise();
  }
}