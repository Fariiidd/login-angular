import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
  }

  salir(){
    if(!this.auth.estaAutenticado){
      return true;
    }else{
      this.auth.logOut();
      this.router.navigateByUrl('/login');
      return false;
    }
  }



}
