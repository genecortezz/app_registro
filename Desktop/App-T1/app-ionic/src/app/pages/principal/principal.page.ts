import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuario: string = '';
  contrasena: string ='';
  equipo: string ='';

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras;

    if(extras?.state){
      this.usuario = extras.state["usuario"];
      this.contrasena = extras.state["contrasena"];
      this.equipo = extras.state["equipo"];
    }
  }

}
