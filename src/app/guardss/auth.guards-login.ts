// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../service/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardLogin implements CanActivate {

//   constructor(private auth: AuthService,
//               private router: Router){

//   }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {

//         if (!this.auth.estaAutenticado()) {
//             return true;
//         }else{
//         this.router.navigateByUrl('/login')
//         return false;
//         }
//   }
  
// }
