import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
  
})
export class Componente1Component implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegacion(){
    this.router.navigate(['web2'])
   
  }
  navegacion1(){
    this.router.navigate(['web3'])
   
  }

  navegacion2(){
    this.router.navigate(['web4'])
   
  }

  
  

}
