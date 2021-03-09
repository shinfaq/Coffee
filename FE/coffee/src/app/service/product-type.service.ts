import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService {
  constructor(private http: HttpClient) {}
  private URL = environment.BASE_URL + 'product_type';
  getAll(): Observable<any> {
    return this.http.get(this.URL).pipe(
      map((res) => {
        if (res) {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error('NOT FOUND');
      })
    );
  }

  getProductById(id): Observable<any> {
    return this.http.get(this.URL + '/' + id).pipe(
      map((res) => {
        if (res) {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error('NOT FOUND');
      })
    );
  }

  createProductType(productType): Observable<any> {
    return this.http.post(this.URL, productType).pipe(
      map((res) => {
        if (res) {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error('NOT FOUND');
      })
    );
  }

  updateProductType(productType) {
    return this.http.put(this.URL, productType).pipe(
      map((res) => {
        if (res) {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error('NOT FOUND');
      })
    );
  }

  deleteProductType(id) {
    return this.http.delete(this.URL + '/' + id).pipe(
      map((res) => {
        if (res) {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error('NOT FOUND');
      })
    );
  }
}
