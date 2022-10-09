import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {
    //Recupera parâmetros. Exemplo: http://localhost:4200/portfolio/1
    this.parametrizador.params.subscribe((res) => console.log(res));

    //Recupera parâmetros de Query. Exemplo: http://localhost:4200/portfolio/1?{name=nadilson&token=123}
    this.parametrizador.queryParams.subscribe((res) => console.log(res));

    //Recupera parâmetros de rotas children. Exemplo: http://localhost:4200/portfolio/1/abc
    this.parametrizador.firstChild?.params.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    setInterval(() => {
      this.navegador.navigate(['/']);
    }, 5000);
  }
}
