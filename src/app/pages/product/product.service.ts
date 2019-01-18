import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";


@Injectable()
export class ProductService {
    constructor(private http: HttpClient,
                @Inject('apiBase') private _apiBase: string) {

    }

    getProducts() {
        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('sessionUser')
            })
        };
        return this.http.get(this._apiBase + 'api/product/getAll/', httpOptions).pipe(
            tap((object) => console.log(object)),
            catchError(this.handleError<Object>('get product'))
        );
    }

    addProduct(form: Object) {
        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('sessionUser')
            })
        };
        return this.http.post(this._apiBase + 'api/product/addProduct/', form, httpOptions).pipe(
            tap((object) => console.log(object)),
            catchError(this.handleError<Object>('add product'))
        );
    }

    createSession(){
        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('sessionUser')
            })
        };
        return this.http.post(this._apiBase + 'api/session/create/', {}, httpOptions).pipe(
            tap((object) => console.log(object)),
            catchError(this.handleError<Object>('create session'))
        );
    }

    addUserSession(id){
        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('sessionUser')
            })
        };
        return this.http.post(this._apiBase + 'api/session/addUser?sessionId=' + id , {}, httpOptions).pipe(
            tap((object) => console.log(object)),
            catchError(this.handleError<Object>('addUser'))
        );
    }

    viewSessionDetails(){
        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('sessionUser')
            })
        };
        const id = localStorage.getItem('sessionId')
        if(id){
        return this.http.get(this._apiBase + 'api/session/getDetails?sessionId=' + id, httpOptions).pipe(
            tap((object) => console.log(object)),
            catchError(this.handleError<Object>('get product'))
        );
     } else {
         console.log("session not opened")
     }
    }
    checkoutSession(){
        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('sessionUser')
            })
        };
        const id = localStorage.getItem('sessionId')
        if(id){
        return this.http.post(this._apiBase + 'api/session/checkout?sessionId=' + id, httpOptions).pipe(
            tap((object) => console.log(object)),
            catchError(this.handleError<Object>('checkout session'))
        );
    } else {
        console.log("Session not opened");
    }
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