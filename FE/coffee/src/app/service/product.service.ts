import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL = environment.BASE_URL + 'product';
  constructor(private http: HttpClient) {}

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

  createProduct(product) {
    return this.http.post(this.URL, product).pipe(
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

  updateProduct(product) {
    return this.http.put(this.URL, product).pipe(
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

  deleteProduct(id) {
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
