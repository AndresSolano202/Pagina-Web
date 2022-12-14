import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from 'src/Componentes/modulo1/componente1/componente1.component';
import { Componente2Component } from 'src/Componentes/modulo2/componente2/componente2.component';
import { Componente3Component } from 'src/Componentes/modulo3/componente3/componente3.component';
import { Componente4Component } from 'src/Componentes/modulo4/componente4/componente4.component';
import { Componente5Component } from 'src/Componentes/modulo5/componente5/componente5.component';
import { Componente6Component } from 'src/Componentes/modulo6/componente6/componente6.component';


const routes: Routes = [
  {
    path: '', component: Componente1Component
  },

  {
    path: 'web2', component: Componente2Component
  },
  
  {
    path: 'web3', component: Componente3Component
  },

  {
    path: 'web4', component: Componente4Component
  },

  {
    path: 'web6', component: Componente6Component
  },

  {
    path: 'web5', component: Componente5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
