import { UploadFileService } from './../../../service/upload-file.service';
import { ProductTypeService } from './../../../service/product-type.service';
import { ProductService } from './../../../service/product.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @ViewChild('inputFile') myInputVariable: ElementRef;
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private productTypeService: ProductTypeService,
    private fb: FormBuilder,
    private uploadFileService: UploadFileService
  ) {}
  imagesUrl;
  listProduct = [];
  listProductType = [];
  async ngOnInit(): Promise<void> {
    this.initForm();
    await this.getAllProduct();
    this.listProductType = await this.getAllProductType();
  }

  initForm() {
    this.productForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      updated_at: [''],
    });
  }

  async getAllProduct() {
    this.listProduct = await this.productService.getAll().toPromise();
  }

  getAllProductType() {
    return this.productTypeService.getAll().toPromise();
  }

  show: boolean = false;
  onShow(id) {
    this.initForm();
    this.imagesUrl = null;
    this.myInputVariable.nativeElement.value = '';
    if (id) {
      this.update = true;
      this.productService.getProductById(id).subscribe((res) => {
        this.productForm.patchValue({
          id: res.id,
          name: res.name,
          price: res.price,
          type: res.type,
          updated_at: res.updated_at,
        });
        this.show = true;
        this.imagesUrl = res.image;
      });
    } else {
      this.update = false;
      this.show = true;
    }
  }
  onHide() {
    this.show = false;
    this.imagesUrl = null;
  }

  update = false;

  onCreate() {
    let product = this.productForm.getRawValue();
    product.image = this.imagesUrl;
    this.productService.createProduct(product).subscribe((res) => {
      this.getAllProduct();
      this.show = false;
      this.imagesUrl = null;
    });
  }
  onUpdate() {
    let product = this.productForm.getRawValue();
    product.image = this.imagesUrl;
    this.productService.updateProduct(product).subscribe((res) => {
      this.getAllProduct();
      this.show = false;
      this.imagesUrl = null;
    });
  }
  onDelete(id) {
    this.productService.deleteProduct(id).subscribe((res) => {
      this.getAllProduct();
    });
  }
  selectFile(event) {
    let files: FileList = event.target.files;
    if (!files.length || files.length <= 0) {
      this.imagesUrl = null;
      return;
    }
    const selectFile: File = files[0];
    if (selectFile['type'].split('/')[0] !== 'image') {
      return;
    }
    this.uploadFileService.upload(selectFile).subscribe((res) => {
      this.imagesUrl = res.url;
    });
  }
}
