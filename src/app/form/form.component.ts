import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { User } from '../users/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {

   ufs:any[]

   user?:User={}

  constructor(private service: UserService, private route: ActivatedRoute, 
            private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    if(id){
      this.service.getById(id).subscribe(user => this.user = user )
    }

    this.service.getUf().subscribe(listUfs => {
     this.ufs = listUfs
    })
  }

  save(){
    const observable = this.user.id ? 
    this.service.updateUser(this.user) : this.service.postUser(this.user)
    observable.subscribe(user =>{
      this.toastr.success('Salvo com sucesso', 'Sucesso!');
      this.router.navigate(['/users'])
    }, errors => {
      errors.error.forEach(fieldError => {
        this.toastr.error(fieldError.message, fieldError.field)
      });
    })
  }

  isInvalid(input: NgModel){
    return input.invalid && (input.dirty || input.touched)
  }
}
