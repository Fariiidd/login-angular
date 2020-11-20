import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService) { }

  ngOnInit() { 
    this.usuario = new  UsuarioModel();
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return;
    }

    this.auth.newUser(this.usuario).subscribe(res => {
      console.log(res);
    }, (err ) => {
      console.log(err.error.error.message);
      
    })
    
  }


}