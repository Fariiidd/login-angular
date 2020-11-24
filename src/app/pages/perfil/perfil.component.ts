import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

}
