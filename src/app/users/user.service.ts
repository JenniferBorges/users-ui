import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Page } from '../commons/page.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  constructor(private client: HttpClient ) { }

  list(size:number = 0, page:number = 0, sort:string='name', dir:string = 'asc'):Observable<Page<User>>{

    return this.client.get<Page<User>>(`${environment.apiUrl}/users?sort=${sort},${dir}&size=${size}&page=${page}`)
  }

  delete(id:number):Observable<any>{
    return this.client.delete(`${environment.apiUrl}/users/${id}`)
  }

  getUf():Observable<any>{
     return this.client.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  }

  postUser(user:User):Observable<any>{
     return this.client.post(`${environment.apiUrl}/users`, user )
  }

  updateUser(user:User):Observable<any>{
    return this.client.put(`${environment.apiUrl}/users/${user.id}`, user )
  }

  getById(id:number):Observable<User>{
    return this.client.get<User>(`${environment.apiUrl}/users/${id}`)
  }

  getSummary(): Observable<any>{
    return this.client.get(`${environment.apiUrl}/users/summary`)
  }
}
