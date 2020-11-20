import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { switchAll } from 'rxjs/operators';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/service/auth.service';
// import {   } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel;
  }

  login(form: NgForm){
    if (form.invalid) {
      return;
    }


    this.auth.login(this.usuario).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log(err.error.error.message);
        
      }
    )

    
    
  }

}
