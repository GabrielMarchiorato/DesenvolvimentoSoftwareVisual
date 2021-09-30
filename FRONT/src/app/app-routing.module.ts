import { ProdutoCadastrarComponent } from './components/views/produto/produto-cadastrar/produto-cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListarComponent } from './components/views/produto/produto-listar/produto-listar.component';

const routes: Routes = [
    {
        path:"",
        component: ProdutoCadastrarComponent,
    },{
        path:"produto/listar",
        component: ProdutoListarComponent,
    },{
        path:"produto/cadastrar",
        component: ProdutoCadastrarComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
