import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from './user';

let empdel = "http://localhost:2020/deletedetails/";

export interface emppp {
  [x: string]: any;
  id:number;
  first_name :string;
  last_name : string;

  dob : string;
  skills: string;
  gender :string;
  qualification: string;
  work_address :string;
  permanent_address :string;
  temporary_address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private data:string;
  // user:User =new User();
  private del:string
  private gett:string;
  private putt:string;
  private register:string
  constructor(private http : HttpClient,) { 
    this.data="http://localhost:2020/search";this.del="http://localhost:2020/deletedetails";this.gett="http://localhost:2020/details"
; this.putt="http://localhost:2020/updatedetails" ; this.register="http://localhost:2020/postdetails" }

  findAll(user:User){
    console.log(this.data);
    let params = new HttpParams();                               
    params=params.append("first_name",user.first_name);
    return this.http.get<User[]>(this.data,{params:params});
 
    }

    getEmployeesList(): Observable<User[]>{
      return this.http.get<User[]>(`${"http://localhost:2020/details"}`);
    }

    // public deleteUser(id){
    //   alert("rustedrod")
    //   return this.http.delete("http://localhost:2020/deletedetails/"+id);
    // }

    // deleteEmployee(id: number): Observable<any> {
    //   alert("del 2")
    //   return this.http.delete(`${"http://localhost:2020/deletedetails"}/${id}`, {responseType: 'text'});
    // }
  
   
    delete(id: any): Observable<any>  {
      return this.http.delete(this.del + `?id=${id}`)
    }
    
    deleteStudent(id:any) {
      let headers = new Headers();
      alert("all safe");
      console.log(id);
      return this.http.delete<number>(empdel + id, 
      )
    }

    updateUser( user:User): Observable<Object>{
      return this.http.put(`${this.putt}`, user);
    }

    deleteUser(id:number): Observable<any>{
      return this.http.delete(`${this.del}/${id}`);
    }

    registeremp(user:User){
      return this.http.post<User>(this.register,user);
    }


}
