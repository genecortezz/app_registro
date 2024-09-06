import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_pass: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    console.log();
  }
  
  navegar(){

    //navegación con parámetros
    let extras: NavigationExtras ={
      state: {
        "usuario": this.mdl_user,
        "contrasena": this.mdl_pass,
        "equipo": "Colo Colo"

      },
      


    }

    this.router.navigate(['principal'], extras);

  }

}
