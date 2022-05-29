import { Component } from '@angular/core';
import { TestemunhoService } from './testemunho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LP_7Belo';

  constructor(private testemunhoService: TestemunhoService)
  {}

/* Obter apenas um objeto do Array, pelo id */
  obterSomenteUm(){
    this.testemunhoService.obterPorId(2)
      .then(testemunho => console.log(testemunho))
      .catch(error => console.log(error));
  }
/* Obter apenas o NOME d objeto selecionado pelo id */
  obterSomenteNome(){
    this.testemunhoService.obterPorId(2)
      .then(testemunho => console.log(testemunho?.name))
      .catch(error => console.log(error));
  }
  /* Obter apenas o NOME d objeto selecionado pelo id */
  obterSomenteBody(){
    this.testemunhoService.obterPorId(2)
      .then(testemunho => console.log(testemunho?.body))
      .catch(error => console.log(error));
  }
}
