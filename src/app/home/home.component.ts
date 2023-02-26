import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
details:any;
users:any
data:any;
a:any;
b:any;
  user: User[]=[];
  ink: any;

  constructor(private http:HttpClient, private service :ServiceService,private router:Router) { this.users= User}

  ngOnInit(): void {
    let responce= this.http.get("http://localhost:2020/details ");
    responce.subscribe((data)=>this.details=data);

    this.getEmployees;
  }

  searchdata(user:User){
  
      user.first_name=this.a;
      // alert(user.first_name)
    console.log('searchdata',user.first_name);
    this.service.findAll(user).subscribe(dataa => {this.user=dataa;});
    console.log(this.data)
  // alert("test"+this.a)

  
   }
   getsearch(){
    console.log('getSearch' ,this.users.first_name);
   this.searchdata(this.users);
   
  //  alert(this.users.first_name)
   }

  opendata(data: { first_name: any; }){
   
    //  alert("roddd"+data.first_name);
    this.a=data.first_name  
  }

  private getEmployees(){
    this.service.getEmployeesList().subscribe(dataaa => {
      this.user = dataaa;
    });
  }

//   public delteUser(id:number){
//     this.service.deleteEmployee(id).subscribe( w => {
//       console.log(w);
//       alert("del 1")
//       this.getEmployees();
//       // alert("del 1")
//     })
// }
registerr(){
  this.router.navigate(['register']);
}
delete(){
  this.router.navigate(['delete']);
}

}
