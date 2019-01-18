import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
    @Inject('apiBase') private _apiBase: string) { 

    }

  addProductCart(id: BigInteger){
    const httpOptions = {
      headers: new HttpHeaders({
          // 'Content-Type':  'application/json',
          'Authorization': localStorage.getItem('sessionUser')
      })
     };
    return this.http.post(this._apiBase + 'api/client/addToCart?productId=' + id, {}, httpOptions)
    .pipe(
      tap((object) => console.log(object)),
      catchError(this.handleError<Object>('add product'))
  );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}
}
