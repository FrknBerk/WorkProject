import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private service:SharedService) { }
  users:any=[];
  //users:User[] = [];

  ModalTitle:string="";
  ActiveAddEditUserComp:boolean=false;
  user:any;

  ngOnInit(): void {
    this.refreshUserList();
  }
  addClick(){
    this.user={
      id:0,
      firstName:"",
      lastName:"",
      phone:"",
    }
    this.ModalTitle="Kullanıcı Eklendi";
    this.ActiveAddEditUserComp=true;
  }
  editClick(item:object){
    this.user = item; 
    this.ModalTitle="Kullanıcı Güncelle";
    this.ActiveAddEditUserComp=true;
  }

  deleteClick(item:any){
    if(confirm("Silmek istiyor musunuz?")){
       this.service.deleteUsers(item.id).subscribe(data => {
         alert("Başarılı bir şekilde silindi");
         this.refreshUserList();
       })
    };
  }

  closeClick(){
    this.ActiveAddEditUserComp=false;
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUsersList().subscribe(data =>
      {
        this.users = data;
      } 
    );
  }
}
