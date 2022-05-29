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
/* Obter todos os itens do Array */
  obterTodosTestemunhos(){
    this.testemunhoService.obterTodos()
      .then(testemunhos => console.log(testemunhos))
      .catch(error => console.log(error));
  }
/* Obter apenas um dos itens do Array */
  obterSomenteUm(){
    this.testemunhoService.obterPorId(2)
      .then(testemunho => console.log(testemunho))
      .catch(error => console.log(error));
  }

  obterSomenteUmnome(){
    this.testemunhoService.obterPorId(2)
      .then(testemunho => console.log(testemunho?.name))
      .catch(error => console.log(error));
  }
}
