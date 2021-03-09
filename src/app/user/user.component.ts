import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:SharedService) { }

  users:User[]=[];
  //users:User[] = [];

  ModalTitle:string="";
  ActiveAddEditUserComp:boolean=false;
  user:any;

  ngOnInit() {
    this.refreshUserList();
    //this.getUsers().subscribe(data => {
      //this.users = data
    //})
  }
  //getUsers(){
    //return this.httpClient.get<User[]>("https://localhost:44332/api/users")
  //}

 

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

  deleteClick(item:object){
    if(confirm("Silmek istiyor musunuz?")){
       this.service.deleteUsers(item).subscribe(data => {
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
