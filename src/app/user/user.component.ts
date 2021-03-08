import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  users:User[] = [];
  ngOnInit() {
    this.getUsers().subscribe(data => {
      this.users = data
    })
  }
  getUsers(){
    return this.httpClient.get<User[]>("https://localhost:44332/api/users")
  }

}
