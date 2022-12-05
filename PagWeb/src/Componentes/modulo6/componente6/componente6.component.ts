import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css'],
  animations: [
    trigger('Cuadroanimacion', [
      state('estado1', style({
        backgroundColor: 'red'
      })),
      state('estado2', style({
        backgroundColor: 'blue'
      }))
    ])
    
  ]
})
export class Componente6Component implements OnInit {
  estadoCuadro = 'estado1';
  constructor(private router: Router) { }

  ngOnInit(): void {}
  navegacion(){
    this.router.navigate([''])
   
  }

  animar()
  {
    this.estadoCuadro = this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';
  }

}
