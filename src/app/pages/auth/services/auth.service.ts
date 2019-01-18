import {Inject, Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class AuthService implements OnInit{
  public sessionUser: any;
  constructor(private http: HttpClient, @Inject('apiBase') private _apiBase: string,
              private router: Router){

  }

  ngOnInit(): void {
    this.sessionUser = localStorage.getItem('sessionUser');
    // this.currentUserId = localStorage.getItem('currentUserId');

  }

  register(form: Object){
    return this.http.post(this._apiBase + 'api/client/register', form)
      .pipe(
        tap((object) => console.log(object)),
        catchError(this.handleError<Object>('register form'))
      );
  }

  login(form: Object){
    return this.http.post(this._apiBase + 'login', form, {observe: 'response'})
      .pipe(
        tap((object) => console.log(object)),
        catchError(this.handleError<Object>('login form'))
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
