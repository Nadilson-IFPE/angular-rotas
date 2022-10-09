import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full',
  },
  // TrÊS rotas (para testar, comentar o código com setInterval):
  //portfolio
  //portfolio/1
  //portfolio/1/nome_do_usuario
  {
    path: 'portfolio',
    component: CardComponent,
    children: [
      {
        path: ':id',
        component: CardComponent,
      },
      {
        path: ':id/:token',
        component: CardComponent,
      },
    ],
  },
  {
    path: 'portfolio/:id',
    component: CardComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
