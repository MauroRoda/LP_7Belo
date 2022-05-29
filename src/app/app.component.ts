import { Component } from '@angular/core';
import { TestemunhoService } from './testemunho.service';
import { ITestemunho } from './ITestemunhos'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LP_7Belo';
  testemunhos = [] as (Array<ITestemunho> | undefined);

  constructor(private testemunhoService: TestemunhoService)
  {}

  ngOnInit() {
    this.obterTodos();
  }

/* Obter todos */
  obterTodos(){
    this.testemunhoService.obterTodos()
      .then(dados => {
        dados = dados?.slice(0,4)
        this.testemunhos = dados
      })
      .catch(error => console.log(error));
  }

}
