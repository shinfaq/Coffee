import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}
  private URL = environment.BASE_URL + 'table';
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

  getTableById(id): Observable<any> {
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

  createTable(TableType): Observable<any> {
    return this.http.post(this.URL, TableType).pipe(
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

  updateTable(TableType) {
    return this.http.put(this.URL, TableType).pipe(
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

  deleteTable(id) {
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
