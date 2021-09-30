import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

    nome!: string;
    descricao!: string;
    preco!: number;
    quantidade!: number;

    constructor(private service: ProdutoService, private router: Router) { }

    ngOnInit(): void {}

    cadastrar(): void
    {
        let produto : Produto = {
            nome: this.nome,
            descricao: this.descricao,
            quantidade: this.quantidade,
            preco: this.preco,
        };
        //Chamar o create do service
        this.service.create(produto).subscribe(produto => {
            console.log(produto);
            this.router.navigate(["produto/listar"]);
        });
    }

}
