import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { emppp, ServiceService } from '../service.service';
import { User } from '../user';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  details: any;
  alldetails:Observable<User[]> | undefined;
  _message: any;
  emp: any;
  _empp: Array<emppp> = [];

 
  users: User[]| any;
  user: User[]=[];

  


  constructor(private service:ServiceService, private http:HttpClient,private router:Router
   ) { }


  deleteStudent(id: number) {
    this.service.deleteStudent(id).subscribe(msg => this.emp = msg);
    alert("all safe");
  }

  ngOnInit(): void {
    this.service.getEmployeesList().subscribe(students => this._empp = students);
    this._message = "";
    this.getUsers;
  }

  // deleteTutorial(): void {
  //   this.service.delete(this.currentTutorial.id)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.router.navigate(['/home']);
  //         alert("fhig");
  //       },
  //       error: (e) => console.error(e)
  //     });
  
  //   }


     getUsers() {
      this.service.getEmployeesList().subscribe(data => {
        this.user = data;
      });
    }
    deleteUser(id: number) {
      this.service.deleteUser(id).subscribe(data => {
        console.log(data);
        this.getUsers();
      });
    }
 
}
