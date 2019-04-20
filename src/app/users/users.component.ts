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

  constructor(private service: UserService, private toastr: ToastrService, private route:ActivatedRoute) { }

  ngOnInit() { 
    
    this.reload()
  }

  change(sort, dir){
    this.reload(sort, dir)
  }

  reload(sort:string = 'id', dir: string = 'asc'){

    this.route.queryParams.subscribe(params => {
      this.service.list(params['size'], params['page'], sort, dir).subscribe(page => {
        this.page = page
      })  
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
