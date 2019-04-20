import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Page } from '../commons/page.model';
import { User } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  page:Page<User>

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.reload()
  }

  reload(){
    this.service.list().subscribe(page => {
      this.page = page
    })
  }

  delete(id:number){
    if(confirm('Tem certeza que deseja excluir esse usuário?')){
      this.service.delete(id).subscribe(response =>{
        this.toastr.success('Usuário excluído', 'Sucesso!');
        this.reload()
      })
    }
  }
}
