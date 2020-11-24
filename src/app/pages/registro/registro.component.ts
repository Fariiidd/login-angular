import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/service/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit() { 
    this.usuario = new  UsuarioModel();
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return;
    }

    Swal.fire({  
       allowOutsideClick: false,
       icon: 'info', 
       text: 'Espera por Favor..'
      });

    this.auth.newUser(this.usuario).subscribe(res => {
      console.log(res);

    Swal.fire({  
      allowOutsideClick: false,
      icon: 'success', 
      text: 'Tu cuenta a sido creada'
    });

    if (this.recordarme) {
      localStorage.setItem('email', this.usuario.email);
    }

    this.router.navigateByUrl('/login')
    }, (err ) => {
      console.log(err.error.error.message);
    Swal.fire({ icon: 'error', title: 'Error al autenticar',text: err.error.error.message});
    })
    
  }


}
