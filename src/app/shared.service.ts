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
    return this.http.get<any>(this.APIUrl+'/Users');
  }

  addUsers(val :any){
    return this.http.post(this.APIUrl+'/Users',val);
  }
  updateUsers(val :any){
    return this.http.put(this.APIUrl+'/Users',val);
  }
  deleteUsers(val :any){
    return this.http.delete(this.APIUrl+"/Users/"+val);
  }
}
