import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductTypeService } from 'src/app/service/product-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss'],
})
export class ProductTypeComponent implements OnInit {
  listProductType = [];
  productTypeForm: FormGroup;

  constructor(
    private productTypeService: ProductTypeService,
    private fb: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
    await this.getAllProductType();
  }

  initForm() {
    this.productTypeForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      updated_at: [''],
    });
  }
  async getAllProductType() {
    this.listProductType = await this.productTypeService.getAll().toPromise();
  }

  onCreateProductType() {
    let productType = this.productTypeForm.getRawValue();
    this.productTypeService.createProductType(productType).subscribe((res) => {
      this.getAllProductType();
      this.show = false;
    });
  }

  show: boolean = false;
  update: boolean = false;
  onShow(id) {
    this.initForm();
    if (id) {
      this.update = true;
      this.productTypeService.getProductById(id).subscribe((res) => {
        this.productTypeForm.patchValue({
          id: res.id,
          name: res.name,
          updated_at: res.updated_at,
        });
        this.show = true;
      });
    } else {
      this.update = false;
      this.show = true;
    }
  }

  onHide() {
    this.show = false;
  }

  onUpdate() {
    let product = this.productTypeForm.getRawValue();
    this.productTypeService.updateProductType(product).subscribe((res) => {
      this.getAllProductType();
      this.show = false;
    });
  }

  onDelete(id) {
    this.productTypeService.deleteProductType(id).subscribe((res) => {
      this.getAllProductType();
    });
  }
}
