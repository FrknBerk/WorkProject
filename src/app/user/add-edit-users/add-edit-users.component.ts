import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css']
})
export class AddEditUsersComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() user:any;
  id!:number;
  firstName!:string;
  lastName!:string;
  phone!:string;

  ngOnInit(): void {
    this.id=this.user.id;
    this.firstName=this.user.firstName;
    this.lastName= this.user.lastName;
    this.phone = this.user.phone;
  }
  addUsers(){
    var val = {
      id:this.id,
      firstName:this.firstName,
      lastName:this.lastName,
      phone:this.phone
    };
    this.service.addUsers(val).subscribe(res =>{
      alert("Kullanıcı Başarı ile Eklendi");
    });
  }
  updateUsers(){
    var val = {
      id:this.id,
      firstName:this.firstName,
      lastName:this.lastName,
      phone:this.phone
    };
    this.service.updateUsers(val).subscribe(res =>{
      alert("Kullanıcı Başarı ile Güncellendi");
    });
  }
}
