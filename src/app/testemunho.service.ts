import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ITestemunho } from './ITestemunhos';

@Injectable({
  providedIn: 'root'
})
export class TestemunhoService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<ITestemunho[]>(`${API_PATH}comments`).toPromise();
  }

  obterPorId(id: number){
    return this.httpClient.get<ITestemunho>(`${API_PATH}comments/${id}`).toPromise();
  }

  obterSomenteBody(body: string){
    return this.httpClient.get<ITestemunho>(`${API_PATH}comments/${body}`).toPromise();
  }

}
