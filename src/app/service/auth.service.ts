import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyDaiWpE8pICZbNwi4AiiJE-BFUWMsyDU1I';

  userToken: string;

  //Crear usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Loguear usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient) {
    this.leerToken();
   }

  logOut(){
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel){

    const AUTHDATA = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
      AUTHDATA
    ).pipe(
      map( res => {
        this.guardarToken(res['idToken'])
        return res;
      })
    )

  }

  newUser(usuario: UsuarioModel){

    const AUTHDATA = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`,
      AUTHDATA
    ).pipe(
      map( res => {
        this.guardarToken(res['idToken'])
        return res;
      })
    )

  }

  private guardarToken( idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(){
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token')
    }else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean{
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    }else {
      return false;
    }
  }


}
