import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'  
})
export class SharedService {
  readonly APIUrl ="https://localhost:44332/api";


  constructor(private http:HttpClient) { }

  getUsersList() : Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/users');
  }

  addUsers(val :any){
    return this.http.post(this.APIUrl+'/users',val);
  }
  updateUsers(val :any){
    return this.http.put(this.APIUrl+'/users',val);
  }
  deleteUsers(val :any){
    return this.http.delete(this.APIUrl+"/users",val);
  }
}
